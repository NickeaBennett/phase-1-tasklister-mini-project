document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.new_task_description.value);
  })
});

function handleToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = "X";
  p.textContent = todo;
  p.append(btn);
  document.querySelector('#tasks').append(p);
  
}
