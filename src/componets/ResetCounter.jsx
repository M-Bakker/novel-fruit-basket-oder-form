function ResetCounter({ fruitCounts, setCount }) {
    const handleResetAll = () => {
        Object.keys(fruitCounts).forEach(fruit => {
            setCount(fruit, 0);
        });
    };

    return (
        <div className="reset-counter">
            <button
                onClick={handleResetAll}>
                Reset Alle Fruitsoorten
            </button>
        </div>
    );
}

export default ResetCounter;