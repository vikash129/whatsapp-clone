import React from 'react'
import styles from "./sidebar_styles.module.css";
import {  Avatar} from '@material-ui/core'

export default function SideBarChat() {
  return (
    <div className={styles.sideBarChat}>

                <Avatar src = "logo.png" />

    <div className={styles.sideBarChat__info}>

    <h4>Name</h4>
    <p>message Lorem ipsum dolor sit amet consectetur.</p>

        
</div> 

</div> 






  )
}
