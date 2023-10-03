const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numofCakes:10
}

//createSlice creates actions and reducers
const cakeSlice = createSlice({
    name:'cake',
    initialState: initialState,
    reducers:{
        ordered: (state) =>{
            state.numofCakes--;
        },
        restocked: (state,action) =>{
            state.numofCakes += action.payload
        },

    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions