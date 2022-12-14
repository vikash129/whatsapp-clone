import express from 'express'
import MessageModel from './dbModels.js'

const router = express.Router();

    // api config
router.get("/", async (req, res) => {

    MessageModel.find( (err , data) => {
        if(err){
           return res.status(500).send( err) ;
        }
        else{
           return res.status(200).send(data) ;
        }
    }
    )  
});


//api endpoints
router.post('/api/message/new' , (req , res) => {
    const message = req.body ;

    // message.map(msg =>  msg['timeStamp'] = new Date().toTimeString()  )


    MessageModel.create( message , (err , data) => {
        if(err){
            res.status(500).send( err) ;
        }
        else{
            res.status(201).send(data) ;
        }
    })
} 
)


export default router;
