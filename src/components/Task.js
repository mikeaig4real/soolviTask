import {
    useGlobalContext
} from '../context/appContext';

import {
    FaTrashAlt,
    FaEdit,
    FaCheck,
    FaBinoculars,
} from 'react-icons/fa';

const Task = ({ id, user_icon, task_msg, task_date, is_completed }) => {
    const { deleteTask, editTask } = useGlobalContext();
    return (
        <div className="tasks__task">
            <div className="task__details">
                <div className="tasks__task_user">
                    <img src={user_icon} alt="user" />
                </div>
                <div className="task__msg_date">
                    <div className="tasks__task_msg">
                        <span>{task_msg}</span>
                    </div>
                    <div className="tasks__task_date">
                        <span>{task_date}</span>
                    </div>
                </div>
            </div>
            <div className="tasks__task_actions">
                <button
                    onClick={() => editTask(id)}
                    className="tasks__task_edit">
                    <FaEdit />
                </button>
                <button
                    onClick={() => deleteTask(id)}
                    className="tasks__task_delete">
                    <FaTrashAlt />
                </button>
                <button
                    onClick={() => editTask(id, { is_completed: 1 })}
                    className="tasks__task_complete">
                    {
                        is_completed ? <FaBinoculars /> : <FaCheck />
                    }
                </button>
            </div>
        </div>
    )
};

export default Task;