import axios from "axios";

const rolesUrl = "http://localhost:3002/roles";

export const getRole = async (id) => {
    return await axios.get(`${rolesUrl}/${id}`);
}

export const getRoles = async () => {
    return await axios.get(`${rolesUrl}/`);
}

export const addRole = async (role) => {
    return await axios.post(`${rolesUrl}/`, role);
}

export const deleteRole = async (id) => {
    return await axios.delete(`${rolesUrl}/${id}`);
}

export const editRole = async (role) => {
    return await axios.put(`${rolesUrl}/${role._id}`, role);
}