(function() {

  var todoList = [];
  var Todo = {
    name: '',
    done: false,
  }

  function addTodo() {
    if (todoInput.value === '') {
      alert('type anything');
      return;
    }

    let todoObj = Object.create(Todo);
    todoObj.name = todoInput.value;

    // validation for duplicaiton
    let test = todoList.filter(function(todoTest) {
      return todoTest.name === todoObj.name;
    });
    if(test.length > 0) {
      alert('Duplication of todo');
      console.log('Duplication of todo');
      return;
    }

    todoList.push(todoObj);
    todoInput.value = '';
    getTodoList();
  }

  function getTodoList() {
    let list = todoList.map(function(todos) {
      return todos.name;
    }).reverse();

    // clearing of the ul
    ul.innerHTML = '';

    // putting li in the ul
    for (let i = 0; i < list.length; i++) {
      let li = document.createElement('li');
      let idTodo = "todo" + (i+1);
      li.innerHTML = "<input type='checkbox' id=" + idTodo + " name="+ list[i] +"><label for=" + idTodo + ">" + list[i] + "</label>";
      ul.append(li);
    }
  }



  function todoDone() {
    let list = document.querySelectorAll('input[type="checkbox"]');

    let checkList = list.forEach(function(checkbox) {
      console.log(checkbox.check);
      return checkbox.check === true;
    })

    console.log(checkList);
    

    
    /*let newList = list.map(function(text) {
      return text;
    });*/
  }

  var todoInput = document.querySelector('.input-add-todo');
  todoInput.addEventListener('change', function(event) {
    console.log(event.target.value)
  });
  var btnAddTodo = document.querySelector('.input-add');
  var btnDoneTodo = document.querySelector('.input-done');
  var ul = document.querySelector('.todo-list');


  btnAddTodo.addEventListener('click', addTodo);
  btnDoneTodo.addEventListener('click', todoDone);
  
  getTodoList();

})();