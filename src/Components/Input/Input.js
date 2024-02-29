import React, { useState } from 'react';
import style from './input.module.css';

function Input({ addNotes }) {
    const [newTextValue, setNewTextValue] = useState();
    const handleChange = (e) => {
        // console.log(e.target.value);
        setNewTextValue(e.target.value);
    }

    const handleSubmit = () => {
        if (newTextValue === '') {
            alert("Write Note First")
        } else {
            addNotes(newTextValue);
            setNewTextValue('');
        }
    }

    const handleKeyPress =(e)=>{
        if(e.key === 'Enter'){
            handleSubmit();
            setNewTextValue("")
        }
    }

    return (
        <>
            <div className={style.input_Container}>
                <div className={style.input_btn}>
                    <textarea className={style.input_text}
                        rows={1}
                        cols={10}
                        type="text"
                        placeholder='Take Notes..'
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        value={newTextValue}
                    ></textarea>
                    <span onClick={handleSubmit} className="material-symbols-outlined ">
                        send
                    </span>
                </div>
            </div>
        </>
    )
}

export default Input