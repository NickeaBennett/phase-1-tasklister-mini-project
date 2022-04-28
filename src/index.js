document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
  })
});

function buildToDo(todo) {
  let pTag = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = "X";
  pTag.textContent = todo;
  pTag.append(btn);
  document.querySelector('#tasks').append(pTag);
  
}

function handleDelete(e) {
  e.target.parentNode.remove();
}