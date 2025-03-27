let tests = {}; // Variable global para almacenar las pruebas

document.addEventListener('DOMContentLoaded', function() {
    async function loadTests() {
        try {
            const response = await fetch('src/main/resources/static/pruebasJmeter.json');
            tests = await response.json();
            console.log("Datos cargados:", tests); // Verificar en consola
            renderTests('load'); // Intenta renderizar los datos después de cargarlos
        } catch (error) {
            console.error("Error cargando los datos de pruebas:", error);
        }
    }
    

    function renderTests(type) {
        const container = document.getElementById('testContent');
        container.innerHTML = '';

        if (!tests[type] || tests[type].length === 0) {
            container.innerHTML = '<p>No hay pruebas disponibles.</p>';
            return;
        }

        tests[type].forEach(test => {
            const testElement = document.createElement('div');
            testElement.className = 'test-item';
            testElement.innerHTML = `
                <div class="test-card">
                    <img src="${test.image || 'default.jpg'}" alt="${test.title}" class="test-image">
                    <div class="test-content">
                        <h3>${test.title}</h3>
                        <p>${test.description || 'Sin descripción disponible.'}</p>
                        <h4>Diseñada por:</h4>
                        <p>${test.designedBy || 'No especificado'}</p>
                        <h4>Ejecutada por:</h4>
                        <p>${test.executedBy || 'No especificado'}</p>
                        <h4>Dependencias:</h4>
                        <p>${test.dependencies || 'No especificadas'}</p>
                        <h4>Casos de Prueba:</h4>
                        <ul>
                            ${test.cases.map((c, index) => `
                                <li>
                                    <strong>Escenario ${index + 1}:</strong> 
                                    <br> <b>Esperado:</b> ${c.expectedResults || 'No especificado'}
                                    <br> <b>Obtenido:</b> ${c.actualResults || '[A llenar tras ejecución]'}
                                    <br> <b>Aprobado:</b> ${c.passed || '[Sí/No]'}
                                </li>
                            `).join('')}
                        </ul>
                        <a href="${test.link || '#'}" target="_blank" class="test-link">Más información</a>
                    </div>
                </div>
            `;
            container.appendChild(testElement);
        });
    }

    // Manejo de pestañas
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderTests(button.dataset.type);
        });
    });

    // Cargar datos desde JSON
    loadTests();
});
