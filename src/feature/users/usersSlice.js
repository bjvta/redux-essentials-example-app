import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Brandon Valle'},
    {id: '1', name: 'Nikole Caballero'},
    {id: '2', name: 'Pedro Perez'},
    {id: '3', name: 'Pedro Perez'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer