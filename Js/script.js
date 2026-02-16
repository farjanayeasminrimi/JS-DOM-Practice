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
// console.log(ancor);

// childNote & ParentNode

const menuBar = document.getElementById("menu");
// console.log(menuBar.childNodes);
// console.log(menuBar.children);

const newListItem = document.createElement("li");
const newAncor = document.createElement("a");
newAncor.innerText = "Song Album List";
newAncor.classList.add("list-item");
newListItem.appendChild(newAncor);
menuBar.appendChild(newListItem);
// console.log(newListItem);
