import React, {useState, useEffect} from 'react';
import axios from '../services/api';
import '../styles/globals.css';

const Chat: React.FC = () =>{
    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState<string>("");

    useEffect(() => {
        const fetchMessages = async () => {
            try{
                const response = await axios.get("/api/chat/messages");
                setMessages(response.data);
            }catch(err){
                console.error("Error fetching messages: ", err);
            }
        };

        fetchMessages();
    }, []);

    const handleSendMessage = async () =>{
        if(inputMessage.trim() === "") return;

        try{
            await axios.post("/api/chat/send-message", {message: inputMessage});
            setMessages((prev) => [...prev, inputMessage]);
            setInputMessage("");
        } catch(err){
            console.error("Error sending message: ", err);
        }
    };

    return(
        <div className="container mt-5">
      <div className="card bg-dark text-white">
        <div className="card-header">Chat</div>
        <div className="card-body" style={{ height: '300px', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <div key={index} className="alert alert-secondary my-2">{msg}</div>
          ))}
        </div>
        <div className="card-footer d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};



export default Chat;