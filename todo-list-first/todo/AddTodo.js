import React, { useState } from 'react'

const AddTodo = (props) => {
    const [value, setValue] = useState('')

    const submitHandler = e => {
     e.preventDefault()
     if(value.trim()){
         props.onCreate(value)
         setValue('')
     }
    }

    return(
<form onSubmit={submitHandler} > 
<input type='text' value={value} onChange={e => setValue(e.target.value)}/>
<input type='submit' value='Add todo'/>
</form>
)
}

export default AddTodo