function Counter({fruit, count, setCount }) {
    return (
        <div className="counter">
            <button type="button" disabled={count === 0} onClick={() => setCount(fruit, count - 1)}>-</button>
            <span>{count}</span>
            <button type="button" onClick={() => setCount(fruit, count + 1)}>+</button>
        </div>
    );
}

export default Counter;