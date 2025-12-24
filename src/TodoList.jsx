import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useState } from "react"
const todoList=[
    {id:1,text:"Walking",completed:false},
    {id:2,text:"Studying",completed:false},
    {id:3,text:"Sleeping",completed:false},
    {id:4,text:"Gyming",completed:true},
    {id:5,text:"Eating",completed:false},
]

export default function TodoList(){
    const [todos,setTodos]=useState(todoList);

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

    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {/* first way */}
            {todos.map(todo=>{
                return <TodoItem todo={todo} key={todo.id} remove={()=>removeTodo(todo.id)} toggle={()=>toggleTodo(todo.id)} />
            })}

            {/*second way
             {todos.map(todo=>{
                return <TodoItem todo={todo} key={todo.id} />
            })} */}
            <todoForm />
        </List>
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
