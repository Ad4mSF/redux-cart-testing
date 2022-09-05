// import { createStore } from 'redux' COULD ALSO USE combineReducers here
import { createSlice, configureStore } from '@reduxjs/toolkit';

const someInitialState = {
    someStateVal: 'this is initial state',
    someOtherStateVal: '',
    andAnotherStateVal: ''
}

const mySlice = createSlice({
    name: 'sampleSliceForStateManagement',
    initialState: someInitialState,
    reducers: {
        someAction(state) {
            // behind the scenes, you could actually drop the left hand side of the statement
            state.someStateVal = state.someStateVal.concat(' someStateVal altered. ')
        },
        // make sure to include an action parameter when using slice and exporting the actions
        someActionWithPayload(state, action) {
            state.someStateVal = state.someStateVal.concat(action.payload)
            //when using slices, and exporting slice actions to be used with dispatch... 
            // the property name is always payload.
            // see TestComponent.js, line 14 for example
        },
        clearState(state) {
            state.someStateVal = ''
        },
    }
})

const store = configureStore({
    reducer: mySlice.reducer
});

/**
 * For above... if using more than one reducer, you'd do like so:
 * reducer: { mySlice: mySlice.reducer, myOtherSlice: myOtherSlice.reducer}
 * 
 */
export const mySliceActions  = mySlice.actions;

export default store;