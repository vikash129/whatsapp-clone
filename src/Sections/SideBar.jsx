import React from 'react'
import styles from "./sidebar_styles.module.css";
import { Sync , MoreVert , Message , SearchOutlined } from '@material-ui/icons';
import {IconButton , Avatar} from '@material-ui/core'
import SideBarChat  from './SideBarChat';

export default function SideBar() {
  return (
    <section className={styles.sideBar}>


<div className={styles.sideBar__header}>

        <div className={styles.sideBar__avatar}>
                <Avatar src = "logo.png"/>
        </div>

        <div className={styles.sideBar__header_icons}>
        <IconButton className = {styles.icon_button}>
            <Sync/>
        </IconButton>

        <IconButton className = {styles.icon_button}>
            <Message/>
        </IconButton>

        <IconButton className = {styles.icon_button}>
            <MoreVert/>
        </IconButton>
        </div>
</div> 



<div className={styles.sideBar__search}>
    <div className={styles.sideBar__searchContainer}>
    <SearchOutlined className={styles.sideBar__searchIcon}/>
    <input type="text" placeholder='start typing message...' className={styles.sideBar__searchInput}/>
    </div>
</div>

<div className={styles.sideBar__chats}>
<SideBarChat/>
<SideBarChat/>
<SideBarChat/>
<SideBarChat/>
</div>


    </section>
  )
}
