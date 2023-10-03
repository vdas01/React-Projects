const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions
const fetchusers= require("./features/user/userSlice").fetchusers

console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('Updated State ',store.getState());
})

store.dispatch(fetchusers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

// unsubscribe();

