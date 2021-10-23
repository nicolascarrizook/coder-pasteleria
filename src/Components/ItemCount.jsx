import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const ItemCount = ({initialCount, stock}) => {

    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const message = count > stock ? 'Fuera de stock' : 'En stock';
    
    return (
        <div>
            <button onClick={increment} disabled = {count > stock}>+</button>
            <span>{count}</span>
            <button onClick={decrement} disabled = {count < 1}>-</button>
            <p>{message}</p>
        </div>  
    )
}

ItemCount.propTypes = {
    initialCount: PropTypes.number,
    stock: PropTypes.number
}