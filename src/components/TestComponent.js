import { useSelector, useDispatch } from 'react-redux'

import { mySliceActions } from '../store/index'

const TestComponent = (props) => {
    const dispatch = useDispatch()
    const returnVal = useSelector((state) => state.someStateVal)
    
    const someHandler = () => {
        dispatch(mySliceActions.someAction())
    }

    const someHandlerWithPayload = () => {
        dispatch(mySliceActions.someActionWithPayload('this is always stored on payload property'))
    }

    const clearState = () => {
        dispatch(mySliceActions.clearState())
    }
    
    return (
        <div>
            <h3>{returnVal}</h3>
            <button onClick={someHandler}>someHandler</button><br />
            <button onClick={someHandlerWithPayload}>someHandlerWithPayload</button><br />
            <button onClick={clearState}>clearStateHandler</button><br />
        </div>
    )
};

export default TestComponent;

