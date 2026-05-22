const TaskList = ({tasks}) => {
    if (tasks.length === 0) 
        return <p>Список пуст</p>; 

    return(
        <ul>
            {
                tasks.map((task) => <li 
                key={task.id}
                style={{textDecoration: task.isDone? 'none' : 'line-through'}}
                >
                    {task.title}
                </li>) 
            }
        </ul>);
}

export default TaskList;