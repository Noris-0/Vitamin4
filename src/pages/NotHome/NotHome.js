import React, { useState, useEffect } from "react";


const NotHome = () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (counter >5) {
            setMessage('You passes 5!');
        } else {
            setMessage('');
        }
    }, [counter]);

    const handleIncrease = () => {
        setCounter(counter + 1);
    };

    const handleDecrease = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h1>NotHomepage</h1>
            <p>Counter: {counter}</p>
            {message && <p>{message}</p>}
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default NotHome;