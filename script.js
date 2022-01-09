//Select the section with an id of container without using querySelector.
const container = document.getElementById("container")

//Select the section with an id of container using querySelector.
const container1 = document.querySelector("#container")

console.log(container.textContent)
console.log(container1.textContent)

//Select all of the list items with a class of "second".
const second = document.getElementsByClassName("second")
console.log(second.length)


//Select a list item with a class of third, but only the list item inside of the ol tag.
const thirdInOl = document.querySelector("ol .third")
console.log(thirdInOl.textContent)

//Give the section with an id of container the text "Hello!".
container.prepend("Hello!")

// Add the class main to the div with a class of footer.
const footer = document.getElementsByClassName("footer")[0]
footer.classList.add("main")
console.log(footer.className)

//Remove the class main on the div with a class of footer.
footer.classList.remove("main")
console.log(footer.className)

//Create a new li element
const li = document.createElement("li")
//Give the li the text "four"
li.textContent = "four"
//Append the li to the ul element
const ul = document.getElementsByTagName("ul")[0]
ul.appendChild(li)

// Loop over all of the lis inside the ol tag and give them a background color of "green".
const ol = document.querySelectorAll("ol li")
console.log(ol.length)
for (let i = 0; i<ol.length; i++){
    console.log(ol[i].style)
    ol[i].style.backgroundColor = "green"
}

//Remove the div with a class of footer.
footer.remove()
const footer1 = document.getElementsByClassName("footer")[0]
console.log(footer1) //undefine