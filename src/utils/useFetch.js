const API_ENDPOINT = 'https://stage.api.sloovi.com';

export const loginReqUrlOpts = async (email, password) => {
    const url = `${API_ENDPOINT}/login`;
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const assignedUserReqUrlOpts = async (company_id) => {
    const url = `${API_ENDPOINT}/team?product=outreach&company_id=${company_id}`;
    const options = {
        method: 'GET',
        body: JSON.stringify({
            company_id,
        }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const addTaskReqUrlOpts = async (access_token, company_id, user_id, task_date, task_time, is_completed, time_zone, task_msg) => {
    const url = `${API_ENDPOINT}/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`;
    const options = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            assigned_user: user_id,
            task_date,
            task_time,
            is_completed,
            time_zone,
            task_msg,
        }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const getAllTaskReqUrlOpts = async (access_token, company_id) => {
    const url = `${API_ENDPOINT}/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const getSingleTaskReqUrlOpts = async (access_token, company_id, task_id) => {
    const url = `${API_ENDPOINT}/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const updateTaskReqUrlOpts = async (access_token, company_id, task_id, user_id, task_date, task_time, is_completed, time_zone, task_msg) => {
    const url = `${API_ENDPOINT}/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            assigned_user: user_id,
            task_date,
            task_time,
            is_completed,
            time_zone,
            task_msg,
        }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

export const deleteTaskReqUrlOpts = async (access_token, company_id, task_id) => {
    const url = `${API_ENDPOINT}/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

