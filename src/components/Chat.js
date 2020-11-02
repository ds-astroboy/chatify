import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect( () => {
        setSeed(Math.floor(Math.random() * 5000));
        }, []);

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
    
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at..</p>
            </div>
                <div className="chat_headerRight">
                <IconButton>
             <SearchOutlined />
             </IconButton>
             <IconButton>
             <AttachFile />
             </IconButton>
             <IconButton>
             <MoreVertIcon />
             </IconButton>
                </div>
            </div>
            <div className="chat_body">
            <p className="chat_message">Hey guys</p>
            <p className="chat_message">Hey guys</p>
            </div>
            <div className="chat_footer">
                
            </div>
        </div>
    )
}

export default Chat;
