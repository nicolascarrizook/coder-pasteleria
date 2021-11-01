import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { productos } from '../data/product_data'

export const Item = ( ) => {

    const { id, name, description, price, currency, thumb, stock } = productos;

    return (
        <div>
            {
                productos.map(producto => (
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {producto.name}
                                </Typography>
                                <Typography component="p">
                                    {producto.description}
                                </Typography>
                                <Typography component="p">
                                    {producto.price}
                                </Typography>
                                <Typography component="p">
                                    {producto.currency}
                                </Typography>
                                <Typography component="p">
                                    {producto.stock}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))
            }
        </div>
    )
}
