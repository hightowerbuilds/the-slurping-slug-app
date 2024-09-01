
import './CommentsPage.css'
import { useState, useEffect } from 'react'
import DashboardNavBar from "../components/DashboardNavBar"
import Footer from '../components/Footer'
import messageLogo from '../images/browserImages/messageBoardLogo.jpg'
import supabase from '../services/supabase'

export default function CommentsPage() {

  const [ newMessage, setNewMessage ] = useState('')
  const [ messageList, setMessageList] = useState([])


  // const fetchData = async () => {
  //   try {
  //     let { data: messages, error } = await supabase
  //       .from('message_board')
  //       .select('*')
  //       .order('created_at', { ascending: false });
  //     if (error) {
  //       throw error;
  //     }
  //     setMessageList(messages);
  //   } catch (error) {
  //     console.error('Error fetching messages:', error.message);
  //   }}; 
 
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  

  const messageHandler = (e) => {
    setNewMessage(e.target.value)
  }

  const listHandler = () => {
    setMessageList([...messageList, newMessage])
  }


  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        color: 'white'
    }}> 
     <DashboardNavBar />
        
    <div>
      <img src={messageLogo} />
    </div>

    <div>
    <input type="text" value={newMessage} onChange={messageHandler}/>
    <button onClick={listHandler} >send</button>
    </div>

    <div>
      {[...messageList].reverse().map((message, index) => (<p key={index}>{message}</p>))}
    </div>


    <br />
        <Footer />
    </div>
  )
}
