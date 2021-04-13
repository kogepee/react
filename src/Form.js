import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        if ( value == '') {
            alert('入力してください');
            return false;
    } else {
        
    }
        setValue.addEventListner('keypress', e => {
            document.setValuevalue.reset()
        })
        
}

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                onChange={e => {
                    setValue(e.target.value)
                    // console.log(e.target.value)
                }}
            />
        </form>
    )
}

export default Form