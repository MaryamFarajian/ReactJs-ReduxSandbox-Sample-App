import{increment,decrement,reset} from "../redux/counter/counterAction"
import { connect } from "react-redux"
const Counter=(props)=>{
    return(
<>
<h1>count:{props.count}</h1>
<button onClick={props.increment} >Increment</button>
<button onClick={props.decrement}>Decrement</button>
<button onClick={props.reset}>Reset</button>
</>
    )
}

const mapStateProps = (state) => {
    return {
        count: state.count.count
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        rest: () => dispatch(reset()),
    }
}

export default connect(mapStateProps, mapDispatchProps)(Counter);