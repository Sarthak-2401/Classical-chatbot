
import { useState } from 'react';
import './App.css'

function App() {
 
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {sender:"bot",text:"Hi, I am your assistant Chatbot. How may i help you? "}
  ]);
  
  const getBotResponse = (userInput)=>{
    const input = userInput.toLowerCase();
    if(input.includes("which date were you created") || input.includes("when were you created")) return "I don't know specifically about my creation date";
    if(input.includes(' hi ') || input.includes('hello') || input.includes("hey there")) return "hello there! 😊";
   if(input.includes('how are you') ||  input.includes("whats up") ) return "I am good bro 😎. ";
    if(input.includes('what is your name') || input.includes("are you real")) return "I am a chat bot ";
    if(input.includes("who made you") || input.includes("who created you")) return "My creator is Sarthak";
    if(input.includes("tell me a joke")) return "Why are mountains so funny? They’re hill areas😂";
    if(input.includes("you have emotions")) return "No, i am Automated robot.";
    if(input.includes('bye') || input.includes("talk to you later") || input.includes("goodbye") || input.includes("byy")) return "see you! Bye";
    if(input.includes("where are you from")) return "The internet";
    if(input.includes("is this conversation recorded")) return "No , it isn't.";
    if(input.includes("use this chatbot on phone")) return "Yes, i am fully compatible with mobile devices.";
    if(input.includes("what can you do")) return "I can answer basic questions as i am just a newbie🤓";
    if(input.includes("what languages do you")) return "Right now, I can speak English only."

    return "sorry, i am unable to understand your message";
  }

  const handleKeyDown = (event)=>{
      if(event.key =="Enter") handleSend();
  }

 const handleSend = ()=>{
  if(!input.trim()) return;
  const userMessage = {sender:"user", text:input};
  const botReply = {sender:"bot", text:getBotResponse(input)};
  setMessages(prev => [...prev , userMessage , botReply]);
  setInput('');
 }
  return (
    <>
    <h1>CLASSICAL CHATBOT</h1>
    <div className="chat-container">
      <div className="messages">
       {
        messages.map(( msg, id)=>(
          <div key={id}
          className= { `message ${msg.sender === 'user' ? 'user':'bot'}`}>

             {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input type="text" 
          placeholder='Type your text'
           value = {input}
          onChange={(e)=>setInput(e.target.value)}
          onKeyDown={handleKeyDown}
         />
         <button onClick={handleSend}>Send</button>
      </div>
    </div>
      
    </>
  );
};

export default App;
