import { Card } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { Item } from './Item';

export const ItemList = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFetch = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    })

    const handleAdd = (value) => {
        alert(`${value} elementos fueron agregados al carrito`)
    }

    useEffect(() => {
        getFetch
            .then(resolve => {
                // console.log(resolve);
                setProductos(resolve);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <>
            {
                loading ? <h1>Cargando...</h1> :
                    <Item />
            }

        </>
    )
}
