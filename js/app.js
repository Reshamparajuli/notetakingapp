// If user add a notes,add it too the local storage
showtask();
let addBTn = document.getElementById("addBtn");
let addTxt = document.getElementById("addTxt");
addBTn.addEventListener("click", function (e) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
   
    showtask();

});

function showtask() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element, index) {
        html += `
        <div class=" notecards my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class = "card-text">${element}</p>
                <button style="background-color:rgb(255, 0, 13);" id =${index} onclick ="deleteNote(this.id)" class="btn btn-primary">Delete </button>
                
            </div>
           
            </div>
        `;

    });
   
    let notesElm = document.getElementById("notes");
    if (notesobj.length!=0){
        notesElm.innerHTML =html;
       
    }
    else{
        notesElm.innerHTML = `notes are not available please add note to see`;
    }


}
//delete notes
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    notesobj = JSON.parse(notes);
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showtask();
}

// search filter
let search = document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputval= search.value.toLowerCase();
    let notecards =document.getElementsByClassName("notecards");
    Array.from(notecards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
           
        }
    })
})
