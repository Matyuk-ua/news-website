
window.onload = function TitleDivSize() {
  var div = document.getElementsByClassName('title_space');
  var contentHeight = div.scrollHeight;
  div.style.height = contentHeight + 'px';
};