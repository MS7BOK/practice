// // To Do List
// // Select elements
// const newTaskInput = document.getElementById("new-task");
// const addTaskButton = document.getElementById("add-task");
// const taskList = document.getElementById("task-list");

// // Event listener for adding a new task
// addTaskButton.addEventListener("click", addTask);

// // Event listener for marking a task as complete or deleting a task
// taskList.addEventListener("click", (event) => {
//     const target = event.target;
//     if (target.classList.contains("delete")) {
//         deleteTask(target);
//     } else if (target.classList.contains("complete-checkbox")) {
//         completeTask(target);
//     }
// });

// // Function to add a new task
// function addTask() {
//     const taskText = newTaskInput.value.trim();
//     if (taskText === "") return;

//     const taskItem = document.createElement("li");
//     taskItem.innerHTML = `
//         <span>${taskText}</span>
//         <input type="checkbox" class="complete-checkbox">
//         <button class="delete">Delete</button>
//     `;
//     taskList.appendChild(taskItem);

//     newTaskInput.value = "";
// }

// // Function to mark a task as complete
// function completeTask(checkbox) {
//     const taskText = checkbox.previousElementSibling;
//     taskText.classList.toggle("complete");
// }

// // Function to delete a task
// function deleteTask(button) {
//     const taskItem = button.parentElement;
//     taskItem.remove();
// }


// Weather Application
// Load environment variables from .env file
document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("cityInput");
    const searchBtn = document.getElementById("searchBtn");
    const cityNameElement = document.getElementById("cityName");
    const temperatureElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const conditionElement = document.getElementById("condition");
    const weatherInfo = document.getElementById("weatherInfo");
   
    searchBtn.addEventListener("click", function () {
        const city = cityInput.value;

        if (city) {
            fetchWeatherData(city);
        }
    });

    function fetchWeatherData(city) {
        const apiKey = '7659a4205848314ebd16e45cdb803329'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
        fetch(apiUrl)  //used to make the network request
            .then((response) => response.json()) //allows you to covert data into a js object
            .then((data) => { //receives a Response object representing the response from the server
                if (data.cod === 200) {
                    cityNameElement.textContent = data.name;
                    temperatureElement.textContent = data.main.temp;
                    humidityElement.textContent = data.main.humidity;
                    conditionElement.textContent = data.weather[0].description;
                    weatherInfo.style.display = "block";
                } else {
                    alert("City not found!");
                }
            })
            .catch((error) => { //used to handle any errors that occur 
                console.error("Error fetching data:", error);
            });
    }
})
