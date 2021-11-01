import React, { useState, useEffect } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import { productos } from '../data/product_data';

export const ItemListContainer = ({ greeting }) => {

        return (
        <>
            {/* <h1>{greeting}</h1> */}
            {/* <ItemCount initialState={0} stock={5} onAdd={handleAdd} /> */}
            <ItemList/>
        </>
    )
}

