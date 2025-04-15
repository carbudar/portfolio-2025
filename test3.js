function createButton(size, buttonText, className, highlightColor, color, parentElement = null) {
    // console.log("button function is connected")
    const button = document.createElement('div');
    button.classList.add('button');

    const buttonExpand = document.createElement('div');
    buttonExpand.classList.add('button-expand');

    const buttonContent = document.createElement('div');
    const buttonTitle = document.createElement(size);
    buttonTitle.innerHTML = buttonText;

    buttonContent.appendChild(buttonTitle);
    buttonContent.classList.add('buttonContent');

    button.appendChild(buttonExpand);
    button.appendChild(buttonContent);

    buttonContent.style.color = color;

    buttonContent.addEventListener('mouseover', () => {
        const buttonContentRect = buttonContent.getBoundingClientRect();
        buttonExpand.style.width = `${buttonContentRect.width}px`;
        buttonExpand.style.height = `${buttonContentRect.height}px`;
        buttonExpand.style.backgroundColor = highlightColor;
        buttonContent.style.color = "#126889";
    });

    buttonContent.addEventListener('mouseout', () => {
        buttonExpand.style.width = "0";
        buttonContent.style.color = color;
    });

    if (parentElement) {
        parentElement.appendChild(button);
    } else {
        const buttonPlaceHolder = document.querySelector(`.${className}`);
        if (buttonPlaceHolder) {
            buttonPlaceHolder.appendChild(button);
        } else {
            console.error(`Placeholder for button with class "${className}" not found.`);
        }
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const projectKey = urlParams.get('project'); // Get project name from URL

        if (!projectKey) {
            console.error('No project specified in URL');
            return;
        }

        const response = await fetch('projects.json');
        const data = await response.json();

        // Check if project exists in work or play category
        const project = data.work[projectKey] || data.play[projectKey];

        if (project) {
            document.querySelector('.content-left').innerHTML = `<h2>${project.name}</h2><h3>${project.year}</h3>`;
            document.querySelector('.content-center').textContent = project.info;
            document.querySelector('.content-right').innerHTML = project.material?.length? project.material.map(m => `<li>${m}</li>`).join(''): '<li>Not specified</li>';

            const img = document.querySelector('.projectThumbnail');
            img.classList.add('noEnlarge')
            img.src = project.documentation.thumbnail;
            img.alt = project.name;

            img.addEventListener('click',()=>{
                window.open(project.link);
            })

            document.querySelector('.progressTitle').textContent = "Progress";

            document.querySelector('.reflectionTitle').textContent = "Reflection";

            const contentBackToTop = document.querySelector('.content-backToTop')
            contentBackToTop.addEventListener('click',()=>{
                top=0
            })
            createButton("h3", "Back To Top", "content-backToTop", "#EDED14", "#000");


            if(project.link){
                const visitSite = document.querySelector('.visitSite')
                createButton("h3", "Visit Site", "visitSite", "#EDED14", "#000");

                visitSite.addEventListener('click',()=>{
                    window.open(project.link);
                })
            }
           
            
            

            const projectDocumentation = document.querySelector('.progressPhoto');

            // Clear any existing content first
            projectDocumentation.innerHTML = "";

            // Loop through all keys in the documentation object
            Object.entries(project.documentation).forEach(([key, value]) => {
                // Skip thumbnail since it's used elsewhere
                if (key !== "thumbnail" && value) {
                    const img = document.createElement("img");
                    img.src = value;
                    img.alt = `${project.name} - ${key}`;
                    img.classList.add("documentation-image"); // Optional: for styling
                    projectDocumentation.appendChild(img);
                }
            });

            


            
        } else {
            console.error('Project not found');
        }
    } catch (error) {
        console.error('Error loading projects:', error);
    }
    enlargeMedia()
});
function enlargeMedia() {
    const mediaImages = document.querySelectorAll('img:not(.noEnlarge)'); // Exclude .noEnlarge images

    mediaImages.forEach(img => {
        img.style.cursor = 'pointer'; // Optional: makes it feel interactive

        img.addEventListener('click', () => {
            console.log("image clicked:", img.src);
            window.open(img.src, '_blank');
        });
    });
}
