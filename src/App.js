import Chat from './Sections/Chat';
import SideBar from './Sections/SideBar';
// import {useEffect  , useState} from "react"

import './App.css';
import './whtsapp-dark.css';

// import axios from './axios'
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import axios from './axios.js';

// Enable pusher logging - don't include this in production
// Pusher.logToConsole = true;





function App() {

  const [messages,setMessages] =  useState([])

  useEffect( () => {  
     axios.get('/').then( (res) => {
      setMessages(res.data)
    } )
  }
     , [ ])
  


  useEffect( () => {

    const pusher = new Pusher('706809e83f854eb217f7', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('message');

    channel.bind('inserted', function(newMessages) {
      setMessages([...messages , newMessages])
    });

    // return () => {
    //   channel.unbind_all()
    //   channel.unsubscribe()
    // }    
  } , [messages])
  
  console.log(messages)

  return (
    <div className="app">

<div className="app__body">
<SideBar/>
<Chat messages = {messages}/>
</div>

      </div>
  );
}


export default App;

