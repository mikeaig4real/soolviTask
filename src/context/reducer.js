import {
    CREATE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    GET_TASKS,
    GET_SINGLE_TASK,
    SET_START_DATE,
    SET_TASK,
    SET_TASKS,
    SHOW_MODAL,
    SET_TOKEN,
    SET_USER_ID,
    SET_COMPANY_ID,
    SET_LOADING,
} from './actions';

// import { initialState } from './appContext';


const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TASK:
            return {
                ...state,
                // isLoading: true,
                allTasks: [...state.tasks, payload],
            };
        case DELETE_TASK:
            return {
                ...state,
                // isLoading: true,
                allTasks: state.tasks.filter(task => task.id !== payload),
            };
        case UPDATE_TASK:
            return {
                ...state,
                // isLoading: true,
                allTasks: state.tasks.map(task => {
                    if (task.id === payload.id) {
                        return payload;
                    }
                    return task;
                }
                ),
            };
        case GET_TASKS:
            return {
                ...state,
                // isLoading: true,
                allTasks: payload,
            };
        case GET_SINGLE_TASK:
            return {
                ...state,
                // isLoading: true,
                task: payload,
            };
        case SET_START_DATE:
            return {
                ...state,
                // isLoading: true,
                startDate: payload,
            };
        case SET_TASK:
            // console.log('SET_TASK', payload);
            return {
                ...state,
                // isLoading: true,
                task: payload,
            };
        case SET_TASKS:
            return {
                ...state,
                // isLoading: true,
                allTasks: payload,
            };
        case SHOW_MODAL:
            // console.log('SHOW_MODAL', payload);
            return {
                ...state,
                // isLoading: true,
                showTaskModal: payload,
            };
        case SET_TOKEN:
            return {
                ...state,
                // isLoading: true,
                accessToken: payload,
            };
        case SET_USER_ID:
            return {
                ...state,
                // isLoading: true,
                userId: payload,
            };
        case SET_COMPANY_ID:
            return {
                ...state,
                // isLoading: true,
                companyId: payload,
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: payload,
            };
        default:
            return state;
    }
};

export default reducer;