document.addEventListener("DOMContentLoaded", function () {
    fetch("/tests.json") // Asegúrate de que la ruta sea accesible en Spring Boot
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el JSON: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("✅ JSON cargado correctamente:", data);
            window.tests = data; // Almacenar datos globalmente
        })
        .catch(error => console.error("❌ No se pudo cargar el JSON:", error));

    // Evento para los botones de pestañas
    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            const type = this.getAttribute("data-type");
            renderTests(type);
        });
    });

    // Mostrar la primera pestaña (pruebas unitarias) al inicio
    renderTests("unit");
});

// Función para mostrar las pruebas
function renderTests(type) {
    console.log("🔍 Mostrando pruebas del tipo:", type);
    const container = document.getElementById("testContent");
    container.innerHTML = ""; // Limpiar contenido previo

    if (!window.tests || !window.tests[type] || window.tests[type].length === 0) {
        console.warn(`⚠️ No hay pruebas disponibles para: ${type}`);
        container.innerHTML = "<p class='no-tests'>No hay pruebas disponibles.</p>";
        return;
    }

    // Iterar sobre las pruebas y renderizar cada una
    window.tests[type].forEach(test => {
        const testElement = document.createElement("div");
        testElement.className = "test-card";
        testElement.innerHTML = `
            <h3>${test.title}</h3>
            <h3>${test.id}</h3>
            <p><strong>Descripción:</strong> ${test.description}</p>
            <p><strong>Diseñado por:</strong> ${test.designedBy}</p>
            <p><strong>Ejecutado por:</strong> ${test.executedBy}</p>
            <p><strong>Dependencias:</strong> ${test.dependencies}</p>
            <p><strong>Resultado esperado:</strong> ${test.expectedResults}</p>
            <p><strong>Resultado real:</strong> ${test.actualResults}</p>
            <p><strong>¿Pasó?</strong> ${test.passed}</p>
            <p><strong>Paso a paso:</strong></p>
            <ul>
                ${test.steps ? test.steps.map(step => `<li>${step}</li>`).join("") : "<li>No hay pasos definidos.</li>"}
            </ul>
            ${test.image ? `<img src="/images/${test.image}" alt="${test.title}" class="test-image">` : ""}
            ${test.link ? `<p><a href="${test.link}" target="_blank">Más detalles</a></p>` : ""}
        `;
        container.appendChild(testElement);
    });
}
