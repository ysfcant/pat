import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      const msgList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgList);
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault(); 
    if (message.trim()) { 
      await addDoc(collection(db, 'messages'), {
        text: message,
        createdAt: new Date(),
      });
      setMessage('');
    }
  };

  return (
    <div className="app">
      <h1>Project-Pat</h1>
      <div className="chat">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            {msg.text}
          </div>
        ))}
        <form onSubmit={sendMessage}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesaj yaz..."
          />
          <button type="submit">Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default App;