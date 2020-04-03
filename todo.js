   // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

   /*let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]*/

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++){
    let theItem = document.createElement("li");
    let textNode = document.createTextNode(arrayOfTodos[i].title);
    theItem.appendChild(textNode);                 // Create a <p> element
    theItem.innerHTML = arrayOfTodos[i].title;
    if (!arrayOfTodos[i].completed){
      theItem.classList.add("redText");
    }else {
      theItem.classList.add("greenText");
    }
    document.getElementById("todo-list").appendChild(theItem);
    }
  }


