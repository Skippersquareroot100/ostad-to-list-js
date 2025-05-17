let todos=[
        {  title:"learn js", done:false},
        {   title:"learn css", done:false},
        {   title:"learn html", done:false},    
        {   title:"learn react", done:true},
        {   title:"learn node", done:true},
        {   title:"learn express", done:true}
    ];


    let doneTodos=[];
    let onGoningTodos=[];

todos.forEach((todo)=>{
    if(todo.done){
        doneTodos.push(todo);
    }else{
        onGoningTodos.push(todo);
    }
});

console.log("done todos: ");
doneTodos.forEach(todo=>{
    console.log(`-${todo.title}`)
})

console.log("\n\nOngoing todos: ");
onGoningTodos.forEach(todo=>{
    console.log(`-${todo.title}`)
})