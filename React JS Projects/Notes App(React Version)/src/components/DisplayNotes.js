import React from 'react';
import Notes from './Notes';

const DisplayNotes = ({note, setNote})=>{
    //console.log(note)
    return(
        <div className="notes">
            {
              note.map((noteBox)=> 
                (<Notes 
                    key={noteBox.id} 
                    text={noteBox.text}
                    note={note} 
                    setNote={setNote}
                    noteBox = {noteBox}
                />))
            }
        </div>
    );
}

export default DisplayNotes;