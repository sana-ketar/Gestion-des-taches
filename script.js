const listTodo = document.getElementById("listTodo");
const addTodo = document.getElementById("addTodo");
const input = document.getElementById("tache");

function addTache() {
    if (input.value === "") {
        alert("No task added");
    } else {
        let liTemplate = `
            <li class="list">
                ${input.value}
                <span class="span-close" onclick="deleteTache(this)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>`;
        listTodo.innerHTML += liTemplate;
    }
    input.value = "";
    save();
}

function deleteTache(element) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
        element.parentElement.remove(); // Supprime l'élément <li> parent du DOM
        save();
    }
}

// Marquer une tâche comme terminée et gérer la suppression
listTodo.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        save();
    }
});

// Sauvegarde dans le localStorage
function save() {
    localStorage.setItem("save", listTodo.innerHTML);
}

// Chargement depuis le localStorage avec ajout des gestionnaires d'événements
function load() {
    const savedTasks = localStorage.getItem("save");
    if (savedTasks) {
        listTodo.innerHTML = savedTasks;
        // Réattribuer les événements `onclick` pour chaque bouton de suppression
        document.querySelectorAll(".span-close").forEach(button => {
            button.onclick = function() {
                deleteTache(button);
            };
        });
    }
}

// Charger les tâches enregistrées au démarrage
load();
