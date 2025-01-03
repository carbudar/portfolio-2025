// // Fetch the JSON file
// fetch('projects.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to fetch JSON');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Access the directory data
//         const directoryData = data.directory;
//         const directoryDiv = document.querySelector('.directory');

//         // Iterate through the floors and add images
//         for (const [floor, floorData] of Object.entries(directoryData)) {
//             const img = document.createElement('img');
//             img.src = floorData.default; // Use the default image
//             img.alt = `${floor} image`; // Set alt text
//             img.className = 'floor-image'; // Optional class for styling
//             directoryDiv.appendChild(img); // Add to the directory div
//         }
//     })
//     .catch(error => {
//         console.error('Error loading JSON:', error);
//     });


const containers = document.querySelectorAll('[id^="dirContainer"]');

// Loop through each container and set z-index based on its position
containers.forEach((container, index) => {
    container.style.zIndex = containers.length - index; // Reverse the order for z-index
});



// JavaScript to update the existing h3 element with current date and time
const dynamicTimeElement = document.getElementById('dynamic-time');

function updateTime() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString('en-US');
    const time = currentDate.toLocaleTimeString('en-US');
    dynamicTimeElement.textContent = `New York, NY -  ${date}, ${time}`;
}

// Call updateTime immediately to set the current time
updateTime();

// Optionally, update the time dynamically every second
setInterval(updateTime, 1000); // Updates every second
