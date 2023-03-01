const input = document.querySelector('input')
const button = document.querySelector('button')
const tasksList = document.getElementById('tasks__list')

function newTask(text) {
    let task =  document.createElement('div')
    tasksList.appendChild(task)
    task.outerHTML = `
        <div class="task">
            <div class="task__title">
                ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `
    const tasks = document.querySelectorAll('.task')
    const close = tasks[tasks.length - 1].querySelector('.task__remove')
    close.addEventListener('click', () => {
        tasks[tasks.length - 1].remove(tasks[tasks.length - 1])
    })
}

button.addEventListener('click', (event) => {
    if (input.value.trim() != "") {
        newTask(input.value.trim())
        input.value = ""
    }
    event.preventDefault()
})
