
import { useState } from 'react';
import { connect } from 'react-redux';
import * as Actions from 'Helpers/Action_Creators/Counter_Actions';
import { bindActionCreators } from 'redux';

function Test(props) {

    const [count, setCount] = useState(0);
    
    const increment = () => {
        props.actions.INCREMENT();
    }

    const decrement = () => {
        props.actions.DECREMENT();
    }

    return (
        <div style={{ height: 'calc(80vh - 60px)' }}>
            <div style={{ margin: 'auto', width: '50%', marginTop: '20vh', textAlign: 'center'}}>
                <p>redux state: {props.counter.count}</p>
                <button onClick={increment}>Add</button>
                <button onClick={decrement}>Subtract</button>
                <div style={{height: 20}} />
                <p>local state: {count}</p>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
                <button onClick={() => setCount(prevCount => prevCount === 0 ? prevCount : prevCount - 1)}>Subtract</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);