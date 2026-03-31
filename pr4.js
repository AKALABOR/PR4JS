"use strict";

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        console.log(`Додано завдання: "${taskText}"`);
        taskInput.value = "";
    } else {
        console.warn("Спроба додати порожнє завдання");
    }
};

taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const removedText = event.target.textContent;
        event.target.remove();
        console.log(`Видалено завдання: "${removedText}"`);
    }
});

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});