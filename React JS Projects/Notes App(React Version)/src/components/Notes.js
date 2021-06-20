import React,{useState} from 'react';

const Notes = ({text,note,setNote,noteBox})=>{

    const [textareaContent , setTextareaContent] = useState("");
    const textHandler = (e)=>{
        console.log(e.target.value);
        setTextareaContent(e.target.value);
    }

    const deleteNoteHandler = ()=>{
        //console.log(noteBox);
        setNote(
            note.filter( item => ( item.id !== noteBox.id ))
        );
    }

    return(
        <div className="note">
            <textarea onChange={textHandler} className="note-content" name="note-content ">
                {textareaContent}
            </textarea>
            <button onClick={deleteNoteHandler} className="delete-note">
                <i className="fa fa-trash trash-note"></i>
            </button>
        </div>
    );
}

export default Notes;

