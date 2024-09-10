var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for (let tablink of tablinks){
            tablink.classList.remove("active-link") ;
        }
        for (let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab") ;
        }
        event.currentTarget.classList.add ("active-link") ;
        document.getElementById(tabname).classList.add("active-tab") ;
    }

     
var sidemenu = document.getElementById("sidemenu") ;
function openmenu(){
    sidemenu.style.right = "0" ;
}
function closemenu(){
    sidemenu.style.right = "-200px" ;
}


// const msg = document.getElementById("msg") ;
// FormData.addEventListener('submit', e=>{
//     e.preventDefault()
//     msg.innerHTML = "MESSAGE SENT" 
//     setTimeout(function(){
//         msg.innerHTML = ""
//         },5000)
//         FormData.reset()
//     })