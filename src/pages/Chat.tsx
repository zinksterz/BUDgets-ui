import React, {useState} from 'react';
import axios from '../services/api';

const Chat: React.FC = () =>{
    const [message, setMessage] = useState('');

    const handleSend = async () =>{
        try{
            const response = await axios.post('/api/chat/send-message', {message});
            console.log("Message Sent:", response.data);
            setMessage('');
        }catch(err){
            console.error("Error sending message: ", err);
        }
    };

    return(
        <div>
            <h1>Chat</h1>
            <input
                type='text'
                placeholder='Type a message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chat;