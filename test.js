document.addEventListener('DOMContentLoaded', () => {
    function displayAllDoorImages() {
        const doors = [
            { 
                detail: "assets/doors/door white detail.png", 
                blank: "assets/doors/door white blank.png" 
            },
            { 
                detail: "assets/doors/door green detail.png", 
                blank: "assets/doors/door green blank.png" 
            },
            { 
                detail: "assets/doors/door pink detail.png", 
                blank: "assets/doors/door pink blank.png" 
            },
            { 
                detail: "assets/doors/door teal detail.png", 
                blank: "assets/doors/door teal blank.png" 
            }
        ];

        const doorCarousel = document.querySelector('.doorCarousel');
        
    }



    displayAllDoorImages();
});

// Fetch JSON file
        // const response = await fetch('projects.json');
        // const data = await response.json();

        // const container = document.querySelector(containerClass);

        // // Make a section for each project in the current page's context
        // Object.values(data[page]).forEach((project) => {
        //     const projectDiv = document.createElement('div');
        //     projectDiv.classList.add('project');

        //     projectDiv.innerHTML = `<h2>${project.name}, ${project.year}</h2>`;
        //     container.appendChild(projectDiv);

        //     // Adding grid child column for contents
        //     const expandCard = document.createElement('div');
        //     expandCard.classList.add('expand');


        //     // const expandGap = document.createElement('div')
        //     // expandGap.classList.add('expandGap')

        //     // expandCard.appendChild(expandGap)


        //     // Left section
        //     const columnLeft = document.createElement('div');
        //     columnLeft.classList.add('columnLeft');
        //     const coverImage = document.createElement('img');
        //     coverImage.classList.add('coverImage');
        //     coverImage.src = project.documentation.thumbnail;
        //     columnLeft.appendChild(coverImage);

        //     // Right section
        //     const columnRight = document.createElement('div');
        //     columnRight.classList.add('columnRight');
        //     expandCard.appendChild(columnLeft);
        //     expandCard.appendChild(columnRight);

        //     // Column right contents
        //     columnRight.innerHTML = `
        //         <h2>${project.name}</h2>
        //         <h3>${project.year}</h3>
        //         <p>${project.info}</p>
        //     `;

        //     // Material + language info
        //     const mediumInfo = document.createElement('ul');
        //     mediumInfo.classList.add('mediumInfo');
        //     project.material.forEach(material => {
        //         const listItem = document.createElement('li');
        //         listItem.textContent = material;
        //         mediumInfo.appendChild(listItem);
        //     });
        //     columnRight.appendChild(mediumInfo);

        //     // Adding link button + interaction
        //     if (project.haveLink === true) {
        //         const linkBtn = document.createElement('div');
        //         linkBtn.classList.add('linkBtn');
        //         linkBtn.innerHTML = "visit site";
        //         columnRight.appendChild(linkBtn);

        //         linkBtn.addEventListener('click', () => {
        //             window.location.href = project.link;
        //         });
        //     } else {
        //         const noLink = document.createElement('div');
        //         noLink.innerHTML = `No additional documentation for ${project.name}`;
        //         noLink.style.fontStyle = 'italic';
        //         columnRight.appendChild(noLink);
        //     }


        //     // Interaction event listener
        //     projectDiv.addEventListener('mouseover', () => {
        //         projectDiv.appendChild(expandCard);

        //     });
        //     projectDiv.addEventListener('mouseleave', () => {
        //         expandCard.remove();
        //     });
        // });
