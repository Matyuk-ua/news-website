
// call createNewDiv function at the end of page
window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    createNewDiv();
  }
});
//creates new news div
function createNewDiv() {
  // creates div other_news
  var newDiv = document.createElement("div");
  newDiv.classList.add("other_news");
  document.body.appendChild(newDiv);
    //creates div img_side inside other_news
    var DivImg=document.createElement("div");
    DivImg.classList.add("img_side");
    newDiv.appendChild(DivImg);
    //creates div text_side inside other_news
    var DivText=document.createElement("div");
    DivText.classList.add("text_side");
    newDiv.appendChild(DivText);
      //creates div title_space inside text_side
      var DivTitle=document.createElement("div");
      DivTitle.classList.add("title_space");
      DivText.appendChild(DivTitle);
}
// 
window.onload = function TitleDivSize() {
  var div = document.getElementsByClassName('title_space');
  var contentHeight = div.scrollHeight;
  div.style.height = contentHeight + 'px';
};

