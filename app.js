//Variables
const addNote = document.querySelector('.add-btn');
const notes = document.querySelector('.notes');
let activeNote=false;

//Functions
const appendNote = ()=>{

    //create note div
    const note = document.createElement('div');
    note.classList.add("note");

    // Create textarea
    let textArea = document.createElement('textarea');
    textArea.classList.add("note-content");
    textArea.innerHTML="Enter Text Here...";
    note.appendChild(textArea);

    // Create trash button
    const trash = document.createElement('button');
    trash.innerHTML = "<i class='fa fa-trash trash-note'></i>";
    trash.classList.add("delete-note");
    note.appendChild(trash);

    //Append div to notes
    notes.appendChild(note);
}

//Events
addNote.addEventListener('click',appendNote);

notes.addEventListener('click',(item)=>{

    //console.log(item.target.parentElement);
    //console.log((item.target.parentElement).parentElement);
    if(item.target.classList.contains('trash-note'))
        item.target.parentElement.parentElement.remove();
    
})