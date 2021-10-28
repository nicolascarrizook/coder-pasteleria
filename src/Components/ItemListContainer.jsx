import React,{useState, useEffect} from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'

export const ItemListContainer = ({greeting}) => {

    const handleAdd = (value) => {
        alert(`${value} elementos fueron agregados al carrito`)
    }

    const [items, setItems] = useState([])

    const productos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dataItems = await response.json();
        setItems(dataItems)
    }

    useEffect(() => {
        setTimeout(() => {
            productos();
        }, 3000);
    }, []);

    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount initialState={0} stock={5} onAdd = {handleAdd}/>
            <ItemList items={items} />
        </>
    )
}

