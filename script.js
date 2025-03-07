const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("questionText");
const questionContainer = document.getElementById("questionContainer");

let isSure = false; // Controla si ya se cambió la pregunta

// Función para mover un botón dentro del contenedor
function moveButton(button) {
    const maxX = questionContainer.offsetWidth - button.offsetWidth;
    const maxY = questionContainer.offsetHeight - button.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

// Inicialmente, el botón "No" se mueve al pasar el mouse
noBtn.addEventListener("mouseover", () => {
    if (!isSure) {
        moveButton(noBtn);
    }
});

// Cuando hacen clic en "No", cambia la pregunta y el "No" se centra
noBtn.addEventListener("click", () => {
    if (!isSure) {
        questionText.textContent = "¿Estás seguro?";
        isSure = true; // Activamos la nueva fase

        // Centramos el botón "No"
        noBtn.style.left = "50%";
        noBtn.style.top = "50%";
        noBtn.style.transform = "translate(-50%, -50%)"; // Para que quede exacto en el centro
    }
});

// Ahora el "Sí" se moverá cuando pasen el mouse si ya estamos en la segunda pregunta
yesBtn.addEventListener("mouseover", () => {
    if (isSure) {
        moveButton(yesBtn);
    }
});

// Si hacen clic en "Sí", actuará diferente según la fase
yesBtn.addEventListener("click", () => {
    if (isSure) {
        alert("❌ ¡Error! No puedes elegir esta opción. 😈"); // Muestra un mensaje de error
        moveButton(yesBtn); // Sigue moviéndose
    } else {
        questionText.textContent = "Ya lo sabia";
        noBtn.style.display = "none";
        yesBtn.style.display = "none";
    }
});
