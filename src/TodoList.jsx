import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useState, useEffect } from "react"
import { Box, Typography } from '@mui/material';
const todoList= ()=>{
    try {
        let data=JSON.parse(localStorage.getItem("todos"))  || [];
        return data || [];
    } catch (error) {
        return [];
    }
}

export default function TodoList(){
    const [todos,setTodos]=useState(todoList);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    const removeTodo=(id)=>{
        setTodos((prevTodo)=>{
            return prevTodo.filter((t)=>t.id!==id)
        })
    }

    const toggleTodo=(id)=>{
        setTodos((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id===id) return {...todo, completed: !todo.completed}
                else return todo
            })
        })
    }

    const addTodo=(text)=>{
        setTodos(prevTodo=>{
            return [...prevTodo,{text:text, id: crypto.randomUUID() , completed:false}]
        })
    }
    return(
        <Box 
        sx={{
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                alignItems:'center',
                m:4,
                p:'auto',
                border:'2px solid black'
        }}>
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {/* first way */}
            {todos.map(todo=>{
                return <TodoItem todo={todo} key={todo.id} remove={()=>removeTodo(todo.id)} toggle={()=>toggleTodo(todo.id)} />
            })}

            {/*second way
             {todos.map(todo=>{
                return <TodoItem todo={todo} key={todo.id} />
            })} */}
            <TodoForm add={addTodo}/>
        </List>
        </Box>
    )

}

// import * as React from 'react';


// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
        
//       })}
//     </List>
//   );
// }
