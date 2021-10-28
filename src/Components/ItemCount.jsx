import { Button } from '@mui/material'
import React,{useState} from 'react'

export const ItemCount = ({initialState, stock, onAdd}) => {

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const handleRemove = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <Button onClick={handleAdd} disabled={count >= 5}> + </Button>
            <span> {count} </span>
            <Button onClick={handleRemove}> - </Button>
            <hr />
            <Button onClick={() => onAdd(count)}> Agregar al carrito </Button>
        </div>
    )
}
