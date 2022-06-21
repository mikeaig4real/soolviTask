// 1.Getting Access Token, Company_id, User_id

// URL: https://stage.api.sloovi.com/login
// Method: POST
// Headers: {
//   'Accept': 'application/json',
//     'Content-Type': 'application/json',
//               }
// Body: {
//   email: "smithwills1989@gmail.com",
//     password : "12345678"
// }
//  Response: {
// "status": "success",
//   "code": 200,
//     "message": "You are successfully logged in.",
//       "results": {
//   "want_login": "yes",
//     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTU3NDUyNDMsIm5iZiI6MTY1NTc0NTI0MywianRpIjoiNzFlZTZmOGEtMmM2ZS00ZjJkLWEwYjktZGE3NmQ1MzlhZDZkIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.eZGJ3-kPjFoylBhDa-8Ie4RudNZLfP5T31pIqhJBAdE",
//       "is_first": 0,
//         "icon": "http://www.gravatar.com/avatar/cf94b74bd41b466bb185bd4d674f032b?default=https%3A%2F%2Fs3.sloovi.com%2Favatar-default-icon.png",
//           "by_default": "outreach",
//             "company_id": "company_413ef22b6237417fb1fba7917f0f69e7",
//               "user_id": "user_4ee4cf67ad474a27988bc0afb84cf472",
//                 "status": "active",
//                   "user_type": "client",
//                     "name": "Sundar Pichai",
//                       "email": "smithwills1989@gmail.com",
//                         "created": "2022-03-05T06:11:04.963842"
// }


// 2 Assigned USER dropdown Display User DETAILS
// URL: https://stage.api.sloovi.com/team?product=outreach&company_id=<company_id>
// Method: GET


// /////////////////////////////////////////


// Implement These Functions on your react APP.(use access_token, company_id and user_id as a hard coded value)
// while integrating you need to add an datepicker by yourself

// 1.Task

// 1.1 Adding Task

// URL: https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=<company_id>
// Method: POST
// Headers: {
//   'Authorization': 'Bearer ' + <access_token from login step>,
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//               }
//     Body :    {
//       assigned_user:  <id value from /team api response >,
//     task_date: <date in 'YYYY-MM-DD' format from date field in task>,
//     task_time: <time from time field in task>,seconds in integer format(for ex=01:30am means 5400 seconds) ,
//       is_completed:<0 or 1 integer data type>,
//       time_zone:< CurrentTimezone value in seconds and data type is integer>,(for ex= +05:30 means 19800 seconds),
//         task_msg: <task description from task description field in task>
//                }


//           1.2 Getting All Task

//           URL : https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=<company_id>
//             Method : GET
//             Headers : {
//               'Authorization': 'Bearer ' + <access_token from login step>,
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//               }
//                 Body :    { }


//               1.3 Getting Single Task

//               URL : https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/<task_id_from_previous_test>?company_id=<company_id>
//                 Method : GET
//                 Headers : {
//                   'Authorization': 'Bearer ' + <access_token from login step>,
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//               }
//                     Body :    { }


//                   1.4 Updating Task

//                   URL : https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/<task_id>?company_id=<comapany_id>
//                     Method : PUT
//                     Headers : {
//                       'Authorization': 'Bearer ' + <access_token from login step>,
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json',
//               }
//                         Body :   {
//                         assigned_user: <id value from /team api response >,
//                       task_date: <date in 'YYYY-MM-DD' format from date field in task>,
//                       task_time: <time from time field in task>,integer format send seconds,(for ex=01:30am means 5400 seconds)
//                         is_completed:<0 or 1 integer data type>,
//                         time_zone:<Give timezone value in seconds and data type is integer>,(for ex= +05:30 means 19800 seconds)
//                           task_msg: <task description from task description field in task>
//                }


//                             1.5 Deleting Task

//                             URL : https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/<task_id>?company_id=<comapany_id>
//                               Method : DELETE
//                               Headers : {
//                                 'Authorization': 'Bearer ' + <access_token from login step>,
//                                   'Accept': 'application/json',
//                                   'Content-Type': 'application/json',
//               }
//                                   Body :    { }


//    ///////////////////////////////////


import React, { useContext, useReducer } from 'react';

import reducer from './reducer';

import {
    SET_START_DATE,
    SET_TASK,
    SET_TASKS,
    SHOW_MODAL,
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
import { tasks } from '../assests/data';

// console.log(tasks);

const initialState = {
    allTasks: tasks,
    task: null,
    isLoading: false,
    error: null,
    startDate: new Date(),
    email: 'smithwills1989@gmail.com',
    password: '123456',
    setShowTaskModal: false,
    loginData: null,
    isLoggedIn: false,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const setTask = (task) => {
        dispatch({
            type: SET_TASK,
            payload: task,
        });
    };
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
    const editTask = (id, edits) => {
        // console.log(id, edits);
        if (id === null) {
            // create new task
            setTask({
                assigned_user: 1,
                // convert startDate to 'YYYY-MM-DD' iso format
                task_date: state.startDate.toISOString().split('T')[0],
                // convert startDate to seconds format
                task_time: state.startDate.getHours() * 3600 + state.startDate.getMinutes() * 60,
                is_completed: 0,
                time_zone: 19800,
                task_msg: '',
            });
            setShowTaskModal(true);
            return;
        };
        // mark task as completed
        let task = state.allTasks.find(task => task.id === id);
        if (edits) {
            let editedTask = { ...task, ...edits };
            task = editedTask;
            setTasks([...state.allTasks.map(task => {
                    if (task.id === id) {
                        return editedTask;
                    }
                    return task;
                })]);
            return;
        }
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
    const saveTask = (e) => {
        e.preventDefault();
        // add new task
        if (!state.task.id) {
            let newTask = {
                ...state.task,
                id: state.allTasks.length + 1,
                user_icon: "http://www.gravatar.com/avatar/cf94b74bd41b466bb185bd4d674f032b?default=https%3A%2F%2Fs3.sloovi.com%2Favatar-default-icon.png"
            };
            setTasks([...state.allTasks, newTask]);
            // reset task
            setTask(null);
            // close modal
            setShowTaskModal(false);
            return;
        }
        // edit existing task
        setTasks([...state.allTasks.map((prevTask) => {
                if (prevTask.id === state.task.id) {
                    return {
                        ...state.task,
                        task_date: state.startDate.toISOString().split('T')[0],
                        task_time: state.startDate.getHours() * 3600 + state.startDate.getMinutes() * 60,
                    };
                }
                return prevTask;
            })]);
        // reset task
        setTask(null);
        // close modal
        setShowTaskModal(false);
    }
    const deleteTask = (id) => {
        setTasks(state.allTasks.filter(task => task.id !== id));
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