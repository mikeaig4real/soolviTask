import {
    useGlobalContext
} from '../context/appContext';

import Task from './Task';

const Tasks = () => {
    const {
        allTasks,
    } = useGlobalContext();
    return (
        <div className="tasks__allTasks">
            {
                allTasks.map((task) => {
                    return (
                        <Task key={task.id} {...task}/>
                    )
                })
            }
        </div>
    )
};

export default Tasks;