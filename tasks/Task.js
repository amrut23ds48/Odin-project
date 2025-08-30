        const task = document.querySelector("input");
        const submit = document.querySelector(".submit");
        const listOfTasks = document.querySelector("ul")

        submit.addEventListener('click', addTask);

        task.addEventListener('keydown', (e) => {
            if(e.key === 'Enter'){
                addTask();
            }
        })

        listOfTasks.addEventListener('click', (e) => {
            if(e.target.classList.contains('delete')){
                const li = e.target.parentNode.parentNode;
                listOfTasks.removeChild(li);
            }
        });
        //if target class = update
        //  navigate to current list
        //  select and trim first child
        //  prompt for update with first child
        //  if prompt not null 
        //      firstchild.text = new prompt
        listOfTasks.addEventListener('click', (e) =>{
            if(e.target.classList.contains('update')){
                const li = e.target.parentNode.parentNode;
                const currentTask = li.children[0];
                const updatedTask = prompt("Update task", currentTask.innerHTML.trim())
                if(updatedTask !== null && updatedTask !== ""){
                    currentTask.textContent = updatedTask;
                }
            }
        });

        function addTask(){
            const list = document.createElement('li');
            if(task.value === ''){
                alert("Plese enter a valid task");
                return;
            }
            list.innerHTML = `<span>${task.value}</span> 
                                <div class="buttons">
                                    <button class="delete">Delete</button>
                                    <button class="update">Update</button>
                                </div>`;
                document.querySelector('ul').appendChild(list);
                task.value = '';
    }