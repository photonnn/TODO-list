// menu button
const mobileBtn = document.querySelector(".mobile");
mobileBtn.addEventListener("click", () => {
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.add('visible');
  mobileBtn.style.display = "none";
});

// more dynamic menu
const sidebar = document.querySelector("#sidebar");
window.addEventListener("resize", () => {
  if (window.innerWidth > "1100") {
    sidebar.classList.add('visible');
    sidebar.classList.add('notransition');
    mobileBtn.style.display = "none";
    
  }
  if (window.innerWidth < "1100") {
    sidebar.classList.remove('visible');
    sidebar.classList.remove('notransition');
    mobileBtn.style.display = "flex";
  }
  // //if (sidebar.style.display != "flex") {
  //  mobileBtn.style.display = "none";
  // }
});

// when you click on content the menu disappears
const content = document.querySelector("#content");
content.addEventListener("click", () => {
  if (window.innerWidth < "1100") {
    sidebar.classList.remove('visible');
    mobileBtn.style.display = "flex";
  }
});

// There might be a more efficient way. This seems to work though.
