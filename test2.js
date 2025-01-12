const doors = [
    { detail: "assets/doors/door white detail.png", blank: "assets/doors/door white blank.png", color: "#F8F6F1" },
    { detail: "assets/doors/door green detail.png", blank: "assets/doors/door green blank.png", color: "#353F30" },
    { detail: "assets/doors/door pink detail.png", blank: "assets/doors/door pink blank.png", color: "#F7D3FB" },
    { detail: "assets/doors/door teal detail.png", blank: "assets/doors/door teal blank.png", color: "#306685" },
];

const loadProjects = async () => {
    try {
        // Get the section from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const section = urlParams.get('section'); // e.g., "website", "creativecode", "graphicdesign"

        if (!section) {
            console.error('No section specified in the URL');
            return;
        }

        // Fetch data from the projects.json file
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Check if the section exists in the JSON data
        if (!data[section]) {
            console.error(`Section "${section}" not found in the JSON file`);
            return;
        }

        // Get the container to append the project divs to
        const doorContainer = document.getElementById('doorContainer');
        doorContainer.innerHTML = ''; // Clear previous content

        // Iterate over each project in the selected section
        Object.keys(data[section]).forEach((key, index) => {
            const project = data[section][key];

            // Create a container for each project
            const eachProject = document.createElement('div');
            eachProject.classList.add('eachDoor');

            // Create the thumbnail container
            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.classList.add('thumbnailContainer');

            // Add the thumbnail image
            const thumbnailPic = document.createElement('img');
            thumbnailPic.src = project.documentation.thumbnail;
            thumbnailPic.classList.add('thumbnailPic');

            // Create an unordered list to display materials
            const topicList = document.createElement('ul');
            topicList.classList.add('materialList');

            // Populate the list with materials from the project
            project.material.forEach((material) => {
                const listItem = document.createElement('li');
                listItem.textContent = material;
                topicList.appendChild(listItem);
            });

            thumbnailContainer.appendChild(thumbnailPic);
            thumbnailContainer.appendChild(topicList);

            // Create the door image
            const doorImage = document.createElement('img');
            doorImage.classList.add('doorImage');
            doorImage.src = doors[index % doors.length].detail;

            // Add hover effect to the door image
            doorImage.addEventListener('mouseover', () => {
                doorImage.src = doors[index % doors.length].blank;
                doorContainer.style.backgroundColor = doors[index % doors.length].color;
                thumbnailContainer.style.display = "block"; // Show the thumbnail on hover
            });

            doorImage.addEventListener('mouseout', () => {
                doorImage.src = doors[index % doors.length].detail;
                doorContainer.style.backgroundColor = '';
                thumbnailContainer.style.display = "none"; // Hide the thumbnail on hover out
            });

            // Create a project details div
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
                <h3>${project.name}</h3>
                <p><strong>Year:</strong> ${project.year}</p>
                <p>${project.info}</p>
                ${project.haveLink ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
            `;

            // Append elements to the project container
            eachProject.appendChild(doorImage);
            eachProject.appendChild(thumbnailContainer);
            eachProject.appendChild(projectDiv);

            // Append the project container to the main door container
            doorContainer.appendChild(eachProject);
        });
    } catch (error) {
        console.error('Error loading JSON file:', error);
    }
};

// Call the function to load projects
loadProjects();
