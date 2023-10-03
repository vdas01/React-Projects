const createSlice = require("@reduxjs/toolkit").createSlice
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
const axios = require("axios");

const initialState = {
   loading:false,
   users:[],
   error:'',
}


//generates pending, fulfiled and rejected action types
const fetchusers = createAsyncThunk('users/fetchUsers',()=>{
   return axios.get('https://jsonplaceholder.typicode.com/users').then((response) => response.data.map((user) => user.id))
})

const userSlice = createSlice({
    name:"user",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchusers.pending,state => {
            state.loading = true
        })
        builder.addCase(fetchusers.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchusers.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchusers = fetchusers