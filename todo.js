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
  let theToDos = fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => theToDos = data);

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
    // theItem.setAttribute("id", "node" + document.getElementById("todo-list").children.length);
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

  const clearAndFilter = () => {
    var element = document.getElementById("todo-list");
    element.parentNode.removeChild(element);
    // const filteredToDos = theToDos.filter(todo => todo.userId == document.getElementById("idNumber").value);
    const result = theToDos.filter(toDo => toDo.userId == document.getElementById("idNumber").value);
    for (let i = 0; i < result.length; i++){
      let theList = document.createElement("ol");
      document.getElementById("myList").appendChild(theList);
      theList.setAttribute("id", "democlass");
      let theItem = document.createElement("li");
      // let textNode = document.createTextNode(result[i].userId, result[i].title);
      theItem.innerHTML = "User Id: " + result[i].userId + ",  Title: " + result[i].title;
      document.getElementById("democlass").appendChild(theItem);
    }
      // document.getElementById("idNumber").innerHTML = theToDos.filter(checkUser);
    // for (let i = 0; i < filtered)
    // document.getElementById("todo-list").appendChild(filteredTodos);
  }
  // const theToDos =     fetch('https://jsonplaceholder.typicode.com/todos')
  // .then( (response) => response.json())
  // .then( (json) => arrayOfTodos = json)

  // let theToDos = fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(res => res.json())
  // .then(data => theToDos = data);
  // .then(() => console.log(obj));

  // let userTiDos = cities.filter(city => city.population > 3000000);
  // console.log(bigCities);
  // const clearAndFilter = () => {
  //   const elem = document.getElementsByTagName('li');
  //   document.elem.remove();
  // }

  const clearAndCompleted = () => {
    var element = document.getElementById("democlass");
    element.parentNode.removeChild(element);
    // const filteredToDos = theToDos.filter(todo => todo.userId == document.getElementById("idNumber").value);
    const result = theToDos.filter(toDo => toDo.userId == document.getElementById("idNumber").value);
    for (let i = 0; i < result.length; i++){
      let theList = document.createElement("ol");
      document.getElementById("myList").appendChild(theList);
      theList.setAttribute("id", "democlass");
      let theItem = document.createElement("li");
      if (result[i].completed === true){
      // let textNode = document.createTextNode(result[i].userId, result[i].title);
      theItem.innerHTML = "User Id: " + result[i].userId + ",  Title: " + result[i].title + ",  Completed: " + result[i].completed;
      // document.getElementById("democlass").appendChild(theItem);
         }else {
           continue;
         }
         document.getElementById("democlass").appendChild(theItem);
      }
    }


    const notCompleted = () => {
      var element = document.getElementById("democlass");
      element.parentNode.removeChild(element);
      // const filteredToDos = theToDos.filter(todo => todo.userId == document.getElementById("idNumber").value);
      const toDoResult = theToDos.filter(toDo => toDo.userId == document.getElementById("idNumber").value);
      for (let i = 0; i < toDoResult.length; i++){
        let theList = document.createElement("ol");
        document.getElementById("myList").appendChild(theList);
        theList.setAttribute("id", "democlass");
        let theItem = document.createElement("li");
        if (toDoResult[i].completed === false){
        // let textNode = document.createTextNode(result[i].userId, result[i].title);
        theItem.innerHTML = "User Id: " + toDoResult[i].userId + ",  Title: " + toDoResult[i].title + ",  Completed: " + toDoResult[i].completed;
        // document.getElementById("democlass").appendChild(theItem);
           }else {
             continue;
           }
           document.getElementById("democlass").appendChild(theItem);
        }
      }

      const oneStop = () => {
        var element = document.getElementById("democlass");
        element.parentNode.removeChild(element);
        // const filteredToDos = theToDos.filter(todo => todo.userId == document.getElementById("idNumber").value);
        const getTheResult = theToDos.filter(toDo => toDo.userId == document.getElementById("idNumber").value);
        for (let i = 0; i < getTheResult.length; i++){
          let theAList = document.createElement("ol");
          document.getElementById("myList").appendChild(theAList);
          theAList.setAttribute("id", "firstClass");
          let theAItem = document.createElement("li");
          if (getTheResult[i].completed === false){
            theAItem.innerHTML = "User Id: " + getTheResult[i].userId + ",  Title: " + getTheResult[i].title + ",  Completed: " + getTheResult[i].completed;
          }else {
            continue;
          }
          document.getElementById("firstClass").appendChild(theAItem);
        }
        for (let i = 0; i < getTheResult.length; i++){
          let theBList = document.createElement("ol");
          document.getElementById("myList").appendChild(theBList);
          theBList.setAttribute("id", "secondClass");
          let theBItem = document.createElement("li");
          if (getTheResult[i].completed === true){
          theBItem.innerHTML = "User Id: " + getTheResult.userId + ",  Title: " + getTheResult[i].title + ",  Completed: " + getTheResult[i].completed;
           }else {
             continue;
           }
             document.getElementById("secondClass").appendChild(theBItem);
          }
        }   