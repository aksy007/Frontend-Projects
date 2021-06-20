import React from 'react';

const AppendNotes = ({note,setNote})=>{

    const noteHandler = ()=>{
        setNote([
            ...note, 
            {   id: Math.floor(Math.random()*1000), 
                text : "Enter Text here.."
            }
        ]);
    }

    return(
        <div className="appendNotes">
            <button onClick={noteHandler} className="add-btn">
                Create Notes
                <i className="fa fa-plus"></i>
            </button>
        </div>
    );
}

export default AppendNotes;