document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target.new_task_description.value);
  })
});

function handleToDo(todo) {
  let p = document.createElement('p');
  p.textContent = todo;
  console.log(p);
}
