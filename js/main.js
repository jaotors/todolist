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
    let list = docuemnt.querySelector('.todo-list li.check');

    
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

  ul.addEventListener('click', function(event) {

    console.log(event.target)

    /*if (this.classList) {
      this.classList.toggle('check');
    } else {
      var classes = this.className.split(' ');
      var existingIndex = classes.indexOf('check');

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push('check');

      this.className = classes.join(' ');
    }*/
  });

  btnAddTodo.addEventListener('click', addTodo);
  btnDoneTodo.addEventListener('click', todoDone);
  getTodoList();

})();