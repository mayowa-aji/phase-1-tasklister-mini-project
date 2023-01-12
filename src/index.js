document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form');
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const descField = document.querySelector('#new-task-description');
    // console.log(descField.value);


    const taskList = document.querySelector('#tasks');
    // console.log(taskList)
    const newTask = document.createElement('li');
    newTask.textContent = descField.value;

    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', (event) => {
     newTask.remove();
    });

    newTask.append(delBtn);
    taskList.append(newTask);
  })
});
