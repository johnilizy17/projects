import React from 'react';
import {useStateValue} from './StateProvider';
function ChatMessages ( props ){
    const [{ user }, dispatch] = useStateValue();
    const sendMessages = uid === auth.currentUser.uid ? "sent" : "received";
    const {text, uid, photoURL} = props.messages;
    return (<>
        <div className={`messages ${sendMessages}`}>
            <img src={photoURL} alt="user image" />
            {text}
        </div>
        </>
    )
}
export default ChatMessages;
