const h2 = document.createElement("h2");
h2.textContent = "This cat has a very important message to deliver";
document.querySelector("body").appendChild(h2);

const h3 = document.createElement("h3");
h3.textContent = "Click on the cat, to see what it has to say!";
document.querySelector("body").appendChild(h3);


const imageTag = document.getElementById("clickImage")
imageTag.addEventListener("click", function(){
    alert("give me treats!")
});


