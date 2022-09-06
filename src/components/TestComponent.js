import { useSelector, useDispatch } from 'react-redux'

const TestComponent = (props) => {
    const dispatch = useDispatch()
    const returnVal = useSelector((state) => state.someStateVal)
    
    const someHandler = () => {
        dispatch({ type: 'someAction'})
    }

    const someHandlerWithSamepleProperty = () => {
        dispatch({ type: 'someActionWithPayload', samplePropertyFromADispatch: 'AND A SAMPLE PROPERTY ON DISPATCH!!!' })
    }

    const someHandlerWithSameplePropertyFromProps = () => {
        dispatch({ type: 'someActionWithPayloadFromProps', samplePropertyFromADispatch: props.sampleProperty })
    }
    const clearState = () => {
        dispatch({ type: 'clearState'})
    }
    
    return (
        <div>
            <h3>{returnVal}</h3>
            <button onClick={someHandler}>someHandler</button><br />
            <button onClick={someHandlerWithSamepleProperty}>someHandlerWithSamplePropertyOnDispatch</button><br />
            <button onClick={someHandlerWithSameplePropertyFromProps}>someHandlerWithPayloadFromProps</button><br />
            <button onClick={clearState}>clearStateHandler</button><br />
        </div>
    )
};

export default TestComponent;

