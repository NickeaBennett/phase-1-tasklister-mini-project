document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    buildToDo(e.target.new_task_description.value, e.target.children[3].value);
    // buildToDo(e.target.new_task_description.value);
    form.reset();
  })
});

function buildToDo(todo, color) {
  let pTag = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = "X";
  pTag.textContent = todo;
  pTag.style.backgroundColor=color;
  pTag.append(btn);
  document.querySelector('#tasks').append(pTag);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

// function changeColor(e) {
//     console.log(e);
//     let color = e.value;
//     document.getElementById('p').style.backgroundColor=color;
//     // document.getElementById('tasks').style.backgroundColor=color;
//     // e.target.pTag.append(color);

// }
