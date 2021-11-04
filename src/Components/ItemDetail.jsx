import React, { useEffect, useState } from 'react'
import { productos } from '../product_data';

export const ItemDetail = () => {

    const [producto, setProducto] = useState('');

    const getItem = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[0]);
            console.log(productos[0]);
        }, 2000);
    });

    useEffect(() => {
        getItem
        .then(res => {
            setProducto(res);
        })
        .then(() => {
            console.log(producto);
        })
    }, [])

    return (
        <div>
            <h1>Desde itemDetails</h1>
            <h1>{producto.name}</h1>
            <h1>{producto.description}</h1>
            <h1>{producto.price}</h1>
        </div>
    )
}
