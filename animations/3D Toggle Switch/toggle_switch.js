// for removing the `pristine` class that prevents CSS animation on load
document.addEventListener("click",e => {
    let tar = e.target;
    if (tar.name == "toggle")
      tar.removeAttribute("class");
  });