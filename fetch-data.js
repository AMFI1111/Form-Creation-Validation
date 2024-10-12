// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element where the user data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API asynchronously
        const response = await fetch(apiUrl);

        // If the response is not OK, throw an error
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through the users array and create a list item for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;  // Set the text content to the user’s name
            userList.appendChild(listItem);    // Append the list item to the user list
        });

        // After the loop, append the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // In case of an error, clear the existing content of dataContainer
        dataContainer.innerHTML = '';

        // Display an error message
        dataContainer.textContent = 'Failed to load user data.';

        // Optionally log the error for debugging
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
