import React, { useContext, useReducer } from 'react';

import reducer from './reducer';

import {
    SET_START_DATE,
    SET_TASK,
    SET_TASKS,
    SHOW_MODAL,
    SET_TOKEN,
    SET_COMPANY_ID,
    SET_LOADING,
    SET_USER_ID,
} from './actions';

import {
    loginReqUrlOpts,
    assignedUserReqUrlOpts,
    addTaskReqUrlOpts,
    getAllTaskReqUrlOpts,
    getSingleTaskReqUrlOpts,
    updateTaskReqUrlOpts,
    deleteTaskReqUrlOpts,
} from '../utils/useFetch';

// using mock data
import {
    tasks
} from '../assests/data';

const initialState = {
    allTasks: tasks,
    task: null,
    isLoading: true,
    error: null,
    accessToken: null,
    companyId: null,
    userId: null,
    showTaskModal: false,
    startDate: new Date(),
    email: 'smithwills1989@gmail.com',
    password: '12345678',
    loginData: null,
    isLoggedIn: false,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setToken = (token) => {
        dispatch({
            type: SET_TOKEN,
            payload: token,
        });
    }

    const setCompanyId = (companyId) => {
        dispatch({
            type: SET_COMPANY_ID,
            payload: companyId,
        });
    }

    const setUserId = (userId) => {
        dispatch({
            type: SET_USER_ID,
            payload: userId,
        });
    };

    const setTask = (task) => {
        dispatch({
            type: SET_TASK,
            payload: task,
        });
    };
    const setLoading = (isLoading) => {
        dispatch({
            type: SET_LOADING,
            payload: isLoading,
        });
    }
    const setShowTaskModal = (bool) => {
        dispatch({
            type: SHOW_MODAL,
            payload: bool,
        });
    };
    const setStartDate = (date) => {
        dispatch({
            type: SET_START_DATE,
            payload: date,
        });
    };
    const setTasks = (tasks) => {
        dispatch({
            type: SET_TASKS,
            payload: tasks,
        });
    };

    const login = async () => {
        const user = await loginReqUrlOpts(state.email, state.password)
        if (user.status === 'error') {
            setLoading(false);
            return alert(user.message);
        };
        const { token, company_id, user_id } = user.results;
        const tasks = await getAllTaskReqUrlOpts(token, company_id);
        if (tasks.status === 'error') {
            setLoading(false);
            return alert(tasks.message);
        }
        setToken(token);
        setCompanyId(company_id);
        setUserId(user_id);
        setTasks(tasks.results);
        setLoading(false);
    };

    const getAllTasks = async () => {
        setLoading(true);
        const tasks = await getAllTaskReqUrlOpts(state.accessToken, state.companyId);
        if (tasks.status === 'error') {
            setLoading(false);
            return alert(tasks.message);
        };
        setTasks(tasks.results);
        setLoading(false);
    }

    const editTask = async (id, edits) => {
        if (id === null) {
            // create new task
            setTask({
                assigned_user: state.allTasks[0].assigned_user,
                // convert startDate to 'YYYY-MM-DD' iso format
                task_date: state.startDate.toISOString().split('T')[0],
                // convert startDate to seconds format
                task_time: state.startDate.getHours() * 3600 + state.startDate.getMinutes() * 60,
                is_completed: 0,
                time_zone: state.allTasks[0].time_zone,
                task_msg: '',
            });
            setShowTaskModal(true);
            return;
        };
        // mark task as completed
        let task = state.allTasks.find(task => task.id === id);
        if (edits) {
            setLoading(true);
            const editedTask = await updateTaskReqUrlOpts(state.accessToken, state.companyId, { ...task, ...edits });
            if (editedTask.status === 'error') {
                setLoading(false);
                return alert(editedTask.message);
            }
            getAllTasks();
            setShowTaskModal(false);
            return;
        };
        // edit task
        let taskDate = new Date(task.task_date);
        let taskHour = task.task_time / 3600;
        let taskMinute = task.task_time % 3600 / 60;
        taskDate.setHours(taskHour);
        taskDate.setMinutes(taskMinute);
        setStartDate(taskDate);
        setTask(task);
        setShowTaskModal(true);
    };
    const saveTask = async (e) => {
        e.preventDefault();
        // add new task
        setLoading(true);
        // get all tasks
        if (!state.task.id) {
            const newTask = await addTaskReqUrlOpts(state.accessToken, state.companyId, state.task);
            if (newTask.status === 'error') {
                setLoading(false);
                return alert(newTask.message);
            }
            await getAllTasks();
            // reset task
            setTask(null);
            // close modal
            setShowTaskModal(false);
            return;
        }
        // edit existing task
        const editedTask = await updateTaskReqUrlOpts(state.accessToken, state.companyId, state.task);
        if (editedTask.status === 'error') {
            setLoading(false);
            return alert(editedTask.message);
        }
        await getAllTasks();
        // reset task
        setTask(null);
        // close modal
        setShowTaskModal(false);
    }
    const deleteTask = async (id) => {
        setLoading(true);
        const deletedTask = await deleteTaskReqUrlOpts(state.accessToken, state.companyId, { id });
        if (deletedTask.status === 'error') {
            setLoading(false);
            return alert(deletedTask.message);
        }
        await getAllTasks();
        setLoading(false);
    }
    return (
        <AppContext.Provider value={{
            ...state,
            loginReqUrlOpts,
            assignedUserReqUrlOpts,
            addTaskReqUrlOpts,
            getAllTaskReqUrlOpts,
            getSingleTaskReqUrlOpts,
            updateTaskReqUrlOpts,
            deleteTaskReqUrlOpts,
            editTask,
            saveTask,
            deleteTask,
            setStartDate,
            setTask,
            setShowTaskModal,
            login,
            setLoading,
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {
    AppContext,
    AppProvider,
    initialState,
}