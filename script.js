const listTodo = document.getElementById("listTodo")
const addTodo = document.getElementById("addTodo")
const input = document.getElementById("tache")


/* function addTache() {
    if (input.value == "") {
        alert("No stain added")
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        li.style.fontSize = "18px"
        li.style.color = "Black"
        li.style.fontFamily = 'Gochi Hand'
        li.addEventListener("click", function () {
            li.classList.toggle("checked")
            save()
        })
        let span = document.createElement('span')
        span.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        li.appendChild(span)
        span.addEventListener("click", function () {
            li.remove()
            save()
        })
        listTodo.appendChild(li)
        console.log(listTodo);
        save()
    }
} */
function addTache() {
    if (tache.value == "") {
        alert("No stain added")
    } else {
        let liTemplate = `
            <li class= "list">
                ${ tache.value }
        <span class="span-close">X</span>
            </li > `
        listTodo.innerHTML += liTemplate
    }
    tache.value = "";
    save();
}
listTodo.addEventListener("click", function(event) {
    console.log(event);
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        save();
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        save();
    }
})

/* function save() {
    localStorage.setItem("save", listTodo.innerHTML)
}

save()
function load() {
    listTodo.innerHTML = localStorage.getItem("save")
    let liElements = document.getElementsByClassName('li')
    let spanElements = document.getElementsByClassName('span')
    for (let i = 0; i < liElements.length; i++) {
        let li = liElements[i]
        let span = spanElements[i]
        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            save();
        });
        span.addEventListener("click", function () {
            li.remove();
            save();
        });
    }
}
load() */
function save() {
    localStorage.setItem("save", listTodo.innerHTML);
}

function load() {
    listTodo.innerHTML = localStorage.getItem("save");
}
load();
