let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont")
let addFlag = false;

addBtn.addEventListener("click", (e) => {
    // alert("clicked");
    //DISPLAY MODAL
    //Generate ticket

    //addFlag = true -> modal display
    //addFlag = false -> modal none
    addFlag = !addFlag;
    if(addFlag) {
        modalCont.style.display = "flex";
    }
    else{
        modalCont.style.display = "none";
    }
})

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;
    if(key === "Shift"){
        createTicket();
        modalCont.style.display = "none";
        // modalCont.innerHTML = "";
        textareaCont.value = ""
        addFlag = false;
    }
})

function createTicket(){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color"></div>
        <div class="ticket-id">#sample</div>
        <div class="task-area"></div>
    `;
    mainCont.appendChild(ticketCont);
}
