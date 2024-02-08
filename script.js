function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* if(html.classlist.contains('light')){
  html.classlist.remove('light')
else{
  html.classlist.add('light')
}
*/
  /////////////////////////////////////////////////////////////////////
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
