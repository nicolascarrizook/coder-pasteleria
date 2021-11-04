import React, { useState, useEffect } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import { productos } from '../product_data';
import { ItemDetailContainer } from './ItemDetailContainer';

export const ItemListContainer = ({ greeting }) => {

        return (
        <>
            {/* <h1>{greeting}</h1> */}
            {/* <ItemCount initialState={0} stock={5} onAdd={handleAdd} /> */}
            <ItemList/>
        </>
    )
}

