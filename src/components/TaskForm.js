import {
    useGlobalContext
} from '../context/appContext';

import DatePicker from "react-datepicker";

const TaskForm = () => {
    const {
        setTask,
        startDate,
        setStartDate,
        setShowTaskModal,
        task,
        saveTask,
        assignedUsers,
    } = useGlobalContext();
    return (
        <form className='tasks__form' onSubmit={(event) => saveTask(event)}>
            <div className='tasks__form_item'>
                <label htmlFor='task_msg'>Task Description</label>
                <input
                    value={task?.task_msg}
                    onChange={({ target: { value } }) => setTask({ ...task, task_msg: value })}
                    type='text'
                    id='task_msg'
                    required />
            </div>
            <div className='tasks__form_date_time'>
                <div className='tasks__form_item'>
                    <label htmlFor='task_date'>Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                            setTask({ ...task, task_date: date.toISOString().split('T')[0], task_time: date.getHours() * 3600 + date.getMinutes() * 60 })
                        }}
                    />
                </div>
                <div className='tasks__form_item'>
                    <label htmlFor='task_time'>Time</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                            setTask({ ...task, task_date: date.toISOString().split('T')[0], task_time: date.getHours() * 3600 + date.getMinutes() * 60 })
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                </div>
            </div>
            <div className='tasks__form_item'>
                <label htmlFor='task_user'>Assign User</label>
                <select
                    id='task_user'
                    value={task?.assigned_user}
                    onChange={(e) => setTask({ ...task, assigned_user: e.target.value })}
                >
                    {
                        assignedUsers.map((user, index) => {
                            return <option key={index} value={user.name}>{user.name}</option>
                        })
                    }
                </select>
            </div>
            <div className='tasks__form_item_btns'>
                <button
                    onClick={() => setShowTaskModal(false)}
                    className='tasks__form_btn'
                >
                    Cancel
                </button>
                <button
                    type='submit'
                    className='tasks__form_btn save'
                >
                    Save
                </button>
            </div>
        </form>
    )
};

export default TaskForm;