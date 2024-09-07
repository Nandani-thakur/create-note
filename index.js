const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
const notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createBtn.addEventListener("click",()=>{
    const inputBox=document.createElement("p");
    const img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="https://img.icons8.com/?size=50&id=102350&format=png&color=ff6363";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
if(event==="Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
}
})