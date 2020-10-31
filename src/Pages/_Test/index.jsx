
import { useState } from 'react';
import { connect } from 'react-redux';
import * as Actions from 'Helpers/actions_creator';
import { bindActionCreators } from 'redux'

function Test(props) {

    const [count, setCount] = useState(0);
    
    const increment = () => {
        const newCount = {
            count: props.counter.count + 1
        };
        props.actions.INCREMENT('COUNTER', newCount);
    }

    return (
        <div style={{ height: 'calc(80vh - 60px)' }}>
            <div style={{ margin: 'auto', width: '50%', marginTop: '20vh', textAlign: 'center'}}>
                <p>redux state: {props.counter.count}</p>
                <button onClick={increment}>Add</button>
                <div style={{height: 20}} />
                <p>local state: {count}</p>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
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