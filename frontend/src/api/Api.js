import axios from "axios";

const BASE_URL = "http://localhost:8081"

const http = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
        'Content-type': 'application-json'
    }
});

export const getRoom = async (id) => {
    const rawResponse = await http.get(`${BASE_URL}/rooms/${id}`);
    return rawResponse.data;
}

export const getJournal = async () => {
    const rawResponse = await axios.get(`${BASE_URL}/journal_entries`);
    return rawResponse.data;
}

export const getNewEntry = async () => {
    const rawResponse = await axios.get(`${BASE_URL}/journal_entries/new`);
    return rawResponse.data;
}

export const updateNewEntry = async (id) => {
    const rawResponse = await axios.put(`${BASE_URL}/journal_entries/${id}`);
    return rawResponse.data;
}