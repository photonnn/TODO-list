const mobileBtn = document.querySelector(".mobile");
mobileBtn.addEventListener('click', () => {
    const sidebar = document.querySelector("#sidebar");
    if (sidebar.style.display == "flex") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
        mobileBtn.style.display = "none";
    }
});

const sidebar = document.querySelector("#sidebar");
window.addEventListener('resize', () => {
    if (window.innerWidth > "1100") {
        sidebar.style.display = "flex";
    }
    if (window.innerWidth < "1100") {
        sidebar.style.display = "none";
        mobileBtn.style.display = "flex";
    }
   // //if (sidebar.style.display != "flex") {
      //  mobileBtn.style.display = "none";
    //}
})

const content = document.querySelector("#content");
content.addEventListener("click", () => {
    if (window.innerWidth < "1100") {
        sidebar.style.display = "none";
        mobileBtn.style.display = "flex";
    }
})

// There might be a more efficient way. This seems to work though.