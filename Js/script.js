// console.log("hello world from external file");

// get all classes
const items = document.getElementsByClassName("list-item");
for (let item of items) {
  // item.style.backgroundColor = "green";
}

const title = document.querySelector("#title");
const listAll = document.querySelectorAll("#menu .list-item a");
for (let list of listAll) {
  list.style.color = "Green";
}

// add classname

const paragraph = document.querySelector("#paragraph");
paragraph.classList.add("alignCenter");

// remove classname
paragraph.classList.remove("bg-green");

// getAttribute & setAttribute
const ancor = document.querySelector(".youtube");
const link = ancor.getAttribute("href");
const github = ancor.setAttribute("href", "https://github.com/farjanayeasminrimi/JS-DOM-Practice");
console.log(ancor);
