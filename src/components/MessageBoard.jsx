import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase.js'
import './MessageBoard.css'
import messageLogo from '../images/browserImages/messagesLogo.jpg'
import messageLogoMobile from '../images/mobileImages/messagesLogoMobile.jpg'

export default function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [newName, setNewName] = useState('');


  const fetchMessages = async () => { 
    try {
      const { data, error } = await supabase
        .from('message_board')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) {
        throw error;
      }
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages(); 
  }, []);

  const createMessage = async (tableName, data) => {
    try {
        const { error } = await supabase
        .from(tableName)
        .insert([data]);
        if (error) throw error;
        console.log('success');
      } catch (error) {
        console.log(error, 'error')
      }
    }

    const rowData = {
        name: newName,
        message: newMessage
    }

    const handleInsert = async () => { 
        await createMessage('message_board', rowData)
        setNewMessage('');
        setNewName('');
        fetchMessages();
      }


  return (
    <div className='messageBoardMainBox'>

      <div className='messageBoardHeading'>   
        <img src={messageLogo} />
      </div>

      <div className='messageBoardHeadingMobile'>   
        <img src={messageLogoMobile} />
      </div>

      <div className='messageBoardInputBoxDesktop'>

        <div className='messageBoardInputs'>
            <input 
            className='messageBoardInputStylesName' 
            type="text" value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            placeholder='name'
            />
            <br />
            <textarea 
            className='messageBoardInputStylesMessage' 
            type="text" value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
            placeholder='message' 
            />
            <br />
            <button 
            className='messageBoardButtonStyles' 
            onClick={handleInsert}>send
            </button>
        </div>
    
        <div className='messageBoardPosts'>
            {messages.map((message) => (<>
            <p  key={message.id}> 
                <strong style={{color: 'dodgerblue'}}>
                    {message.name.toUpperCase()}
                </strong>: {message.message}
            </p>
            </>))}
        </div>


     
      </div>
      <div className='messageBoardInputBoxMobile'>

      <div className='messageBoardPostsMobile'>
            {messages.map((message) => (<>
            <p key={message.id}> 
                <strong style={{color: 'dodgerblue'}}>
                    {message.name.toUpperCase()}
                </strong>:
                 {message.message}
            </p>
            </>))}
        </div>

        <br />
        <div className='messageBoardInputsMobile'>
            <input 
            className='messageBoardInputStylesNameMobile' 
            type="text" value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            placeholder='name'
            />
            <br />
            <textarea 
            className='messageBoardInputStylesMessageMobile' 
            type="text" value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
            placeholder='message' 
            />
            <br />
            <button 
            className='messageBoardButtonStylesMobile' 
            onClick={handleInsert}>send
            </button>
        </div>

      </div>

        <h1 className='messageBoardHiddenWarning'>dont be a dick</h1>
     
    </div>
  );
}

