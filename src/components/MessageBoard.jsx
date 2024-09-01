import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase.js'

export default function MessageBoard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => { 
      try {
        const { data, error } = await supabase
          .from('message_board')
          .select('*');

        if (error) {
          throw error;
        }

        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages(); 
  }, []);

  return (
    <div>
      <h2>Message Board</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
}

