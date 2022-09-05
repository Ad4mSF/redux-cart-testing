import { createStore } from 'redux'

const myReducer = ((state = { someStateVal: 'this is initial state. '}, action) => {
    if (action.type === 'someAction') {
        return {
            someStateVal: state.someStateVal.concat('It has been changed by someAction. ')
        }
    }
    if (action.type === 'someActionWithPayload') {
        return {
            someStateVal: state.someStateVal.concat(action.samplePropertyFromADispatch)
        }
    }
    if (action.type === 'someActionWithPayloadFromProps') {
        return {
            someStateVal: state.someStateVal.concat(action.someValuePassedDown)
        }
    }
    if (action.type === 'clearState') {
        return {
            someStateVal: ''
        }
    }

    return state;
})

const store = createStore(myReducer);

export default store;