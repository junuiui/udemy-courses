import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';
import { counterActions } from '../store/index'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment(1));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const increaseByFive = () => {
    dispatch(counterActions.increment(5));
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseByFive}>+ 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
