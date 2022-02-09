// Animate on scroll initialization 
AOS.init();

// Contact Us Text Area Input Counter
function validate(){
  const areatextarea = document.querySelector("#your_message");
  const areatext = document.querySelector("#your_message").value.length;
  const textcount = document.querySelector("#textcount");
  const wordcount = document.querySelector("#words_count");
  textcount.innerHTML = areatext;
  
  if(areatext > 500){
  textcount.classList.add("text-danger");
  // areatextarea.classList.add("textarea_danger");
  }else{
  textcount.classList.remove("text-danger");
  // areatextarea.classList.remove("textarea_danger");
  }
  
  if(areatext < 1){ wordcount.classList.add("d-none"); }else{ wordcount.classList.remove("d-none"); } }


// SCROLL TO TOP OF PAGE CODE
// Scroll to top of page button 
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
