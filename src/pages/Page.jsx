import { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

function Page() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const { data: todos, error } = await supabase
          .from('message_board')
          .select('*');

        if (error) {
          throw error; // Handle errors explicitly
        }

        setTodos(todos);
      } catch (error) {
        console.error('Error fetching messages:', error.message);
        // Optionally, display an error message to the user
      }
    }

    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}> {/* Use a unique identifier as the key */}
          {todo.message} {/* Access the 'message' property (adjust if needed) */}
        </li>
      ))}
    </div>
  );
}

export default Page;