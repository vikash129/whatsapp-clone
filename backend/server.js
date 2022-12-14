import express from 'express'
import Cors from 'cors'
import router from "./api/routing.js";
import mongoose from 'mongoose'
import Pusher from 'pusher';

// app config
const app = express()
const port = process.env.PORT || 8000

const pusher = new Pusher({
    appId: "1524262",
    key: "706809e83f854eb217f7",
    secret: "97b0560b71f89fa4b32f",
    cluster: "ap2",
    useTLS: true
});


// middlewares
app.use(express.json());
app.use(Cors())
//or
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next();
})

// DB config
const pwd = '123'
const username = 'vikash'
const connection_url = `mongodb+srv://${username}:${pwd}@cluster0.dqo2m6e.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', true);

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
// console.log(db)

db.once("open", () => {
    console.log('whatsapp-db connected')

    // const msgCollection = db.collection('message_collection')


    const changeStream = db.watch()
    changeStream.on('change', change => {

        switch (change.operationType) {

            case 'insert':
                {
                    console.log('insert change')

                    const msgDetails = change.fullDocument;

                    pusher.trigger("message", "inserted", {
                        name: msgDetails.name,
                        message: msgDetails.message,
                        timeStamp : msgDetails.timeStamp ,
                        received : msgDetails.received
                    });
                    break;
                }
            default:
                {
                    console.log('error trigging pusher ' , change.operationType)
                    console.log(change)
                }

        }
    })
})


// api config
app.use("/", router);


// listen
app.listen(port, () => console.log(`listening  http://127.0.0.1:${port}`))

// Export the Express API
export default app;
