import styles from "./chat_styles.module.css";
import { SearchOutlined, ShareOutlined, MoreVert , Mic, InsertEmoticon } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { useState } from "react";
import axios from '../axios.js';


function Chat({messages}) {

  const[input , setInput] = useState('')

 const sendMessage =async (e) => {
  e.preventDefault() ;

  await axios.post('/api/message/new' , 
    {
      "name" : "vikas"  ,
        "message" : input,
        "timeStamp" : new Date().toDateString() ,
        "received":true  
  }
)

  setInput('')

 }


  return (

    <section className={styles.chat}>
      <div className={styles.chat__header}>

        <Avatar src="logo.png" />

        <div className={styles.chat__header_info}>
          <h3>Vikash verma</h3>
          <p>last seen at / online</p>
        </div>

        <div className={styles.chat__header_icons}>
          <IconButton className={styles.icon_button}>
            <SearchOutlined />
          </IconButton  >

          <IconButton className={styles.icon_button}>
            <ShareOutlined />
          </IconButton>

          <IconButton className={styles.icon_button}>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className={styles.chat__body}>

{messages.map(message => (

      <div key={message._id} className={ styles.chat__message} id={message.received === true ? styles.chat__message_received : styles.chat__message_send }>
          <span className={styles.chat__name}>{message.name}</span>
          <p className={styles.chat__message}>{ message.message }</p>
          <span className={styles.chat__timestamp}>{message.timeStamp}</span>
      </div>
)
)}
      </div>

      <div className={styles.chat__footer}>
<InsertEmoticon className={styles.Icon}/>
      <form className={styles.chat__input_form}>
        <input 
        value = {input}
         type="text" 
         placeholder="types messaging..." 
         onChange={ (e) => setInput(e.target.value)}
         />
        <button onClick={sendMessage} type="submit">Send</button>
        </form>
<Mic className={styles.Icon}/>

      </div>


    </section>
  )
}

export default Chat