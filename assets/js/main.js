let todoItems = document.querySelector("#todo");
let doneItems = document.querySelector("#done");
let addTodo = document.querySelector("#addTodo");
let deleteAllTodo = document.querySelector("#deleteAllTodo");


let database = [
    {id:1 , taskTile:'practice1' ,state:false},
    {id:2 , taskTile:'practice2' ,state:false},
    {id:3 , taskTile:'practice3' ,state:false},
];

const render = db =>{
   todoItems.innerHTML = ''


    db.map(item =>(
        todoItems.innerHTML +=`
              <div class="todo_items my-3">
                        <div class="row px-3 mt-1">
                            <div class="col-xl-12">
                                <div class="delete_btn"><i class="fa-solid fa-trash"></i>Delete This Task</div>
                            </div>
                        </div>
                        <div class="row px-3 mt-3">
                            <div class="col-xl-3 d-flex justify-content-center align-items-center">
                                <div class="task_name">${item.id}</div>
                            </div>
                            <div class="col-xl-6 d-flex justify-content-center align-items-center">
                                <div class="task_name">${item.taskTile}</div>
                            </div>
                            <div class="col-xl-3 d-flex justify-content-center align-items-center">
                                <div class="done_btn">Done</div>
                            </div>
                        </div>
                    </div>
            `

    ))

};

addTodo.addEventListener("click" , ()=>{
   alert("hello abbas")
});

deleteAllTodo.addEventListener("click" , ()=>{
    todoItems.innerHTML = '';
})


render(database);




/* <div class="done_items my-3">
             <div class="row px-3">
                <div class="col-xl-3 d-flex justify-content-center align-items-center">
                    <div class="task_name">${item.id}</div>
                </div>
                <div class="col-xl-6 d-flex justify-content-center align-items-center">
                    <div class="task_name">${item.taskTile}</div>
                </div>
                <div class="col-xl-3 d-flex justify-content-center align-items-center">
                    <div class="done_color">${item.state}</div>
                </div>
            </div>
        </div>*/









