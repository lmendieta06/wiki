document.addEventListener('DOMContentLoaded', function() {
    const diagrams = [
        {
            title: "Lorem Ipsum Dolor",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
            image: "/api/placeholder/800/500"
        },
        {
            title: "Consectetur Adipiscing",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
            image: "/api/placeholder/800/500"
        },
        {
            title: "Tempor Incididunt",
            description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur",
            image: "/api/placeholder/800/500"
        },
        {
            title: "Magna Aliqua",
            description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
            image: "/api/placeholder/800/500"
        }
    ];

    const diagramSelector = document.getElementById('diagramSelector');
    const diagramImage = document.getElementById('diagramImage');
    const diagramTitle = document.getElementById('diagramTitle');
    const diagramDescription = document.getElementById('diagramDescription');

    // Crear botones de selección
    diagrams.forEach((diagram, index) => {
        const button = document.createElement('button');
        button.className = `diagram-button ${index === 0 ? 'active' : ''}`;
        button.innerHTML = `
            <h3>${diagram.title}</h3>
            <p>${diagram.description}</p>
        `;
        
        button.addEventListener('click', () => {
            // Actualizar estado activo
            document.querySelectorAll('.diagram-button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Actualizar contenido
            diagramImage.src = diagram.image;
            diagramImage.alt = diagram.title;
            diagramTitle.textContent = diagram.title;
            diagramDescription.textContent = diagram.description;
        });
        
        diagramSelector.appendChild(button);
    });

    // Inicializar con el primer diagrama
    diagramImage.src = diagrams[0].image;
    diagramImage.alt = diagrams[0].title;
    diagramTitle.textContent = diagrams[0].title;
    diagramDescription.textContent = diagrams[0].description;
});