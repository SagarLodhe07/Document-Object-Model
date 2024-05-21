/**Selecting By ID */
// const divByID = document.getElementById('container')
// console.log(divByID);

/**Selecting By tagname */
// const selectByTag = document.getElementsByTagName('li')
// console.log(selectByTag);

/**Selecting By classname */
// const selectedByclass = document.getElementsByClassName('div_class')
// console.log(selectedByclass);

/**Selecting By querySelector */
// const SelectingByQuerySelector = document.querySelector('div')
// console.log(SelectingByQuerySelector);

/**Selecting By querySelectorAll */

/**Styling Element */
// const selectedByQSALL = document.querySelectorAll(".list-items");
// step-1
// selectedByQSALL.forEach((element) => {
//   element.style.color = "red";
//   element.style.padding = "20px";
//   element.style.width = "auto";
//   element.style.height = "60px";
//   element.style.border = "1px solid black";
//   element.style.textAlign = "center";
// });

// step-2
// for (let i = 0; i < selectedByQSALL.length; i++) {
//   selectedByQSALL[i].style.fontSize = "3rem";
//   selectedByQSALL[i].style.padding = "20px";
//   selectedByQSALL[i].style.width = "auto";
//   selectedByQSALL[i].style.height = "60px";
//   selectedByQSALL[i].style.border = "1px solid black";
//   selectedByQSALL[i].style.textAlign = "center";
// }
// console.log(selectedByQSALL);

/**Creating element */
// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// Adding classList
// li.innerText = "Spider-Man";

// Modifying Element setattributes
// li.setAttribute("class", "list-items");
// remove attributes
// li.removeAttribute("class");
/**Add Class */
// li.classList.add('list-items')
/**remove Class */
// li.classList.remove('list-items')

// console.log(li.classList.contains('list-items'));
// adding Element
// ul.append(li);

// const firstElement = document.querySelector(".list-items");
// show html
// console.log(firstElement.innerHTML);
// show only String
// console.log(firstElement.innerText);
// show all content including spaces
// console.log(firstElement.textContent);

/**travesing the DOM */

/**Parent node travesal */

const ul = document.querySelector("ul");

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement
// console.log(html);


/**Child node travesal */

console.log(ul.childNodes);
// selecting by index
// console.log(ul.childNodes[1]);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

console.log(ul.children);
/**Siblings node travesal */
