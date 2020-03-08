//SMOOTH SCROLLING
function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }
  
document.getElementById("buttonHeader").addEventListener('click', () => {
    scrollTo(document.getElementById("properties"));
}),
  
document.getElementById("buttonStory").addEventListener('click', () => {
    scrollTo(document.getElementById("properties"));
}),

//function chooseMode() comes from file open-close-nav.js
document.getElementById("about").addEventListener('click', (evt) => {
    chooseMode();
    evt.preventDefault();
    scrollTo(document.getElementById("footer"));
}),
  
document.getElementById("services").addEventListener('click',(evt) => {
    chooseMode();
    evt.preventDefault();
    scrollTo(document.getElementById("footer"));
}),
  
document.getElementById("realtors").addEventListener('click',(evt) => {
    chooseMode();
    evt.preventDefault();
    scrollTo(document.getElementById("footer"));
}),
  
document.getElementById("contact").addEventListener('click',(evt) => {
    chooseMode();
    evt.preventDefault();
    scrollTo(document.getElementById("footer"));
});