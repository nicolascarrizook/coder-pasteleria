import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { productos } from '../product_data'

export const Item = () => {

    const { id, name, description, price, currency, thumb, stock } = productos;

    return (
        <div className="pt-4">
            <Grid container spacing={2}>
            {
                productos.map((producto, key) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                        <Box key={key}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {producto.name}
                                    </Typography>
                                    <Typography component="p">
                                        {producto.description}
                                    </Typography>
                                    <Typography component="p">
                                    {producto.currency}
                                    {producto.price}
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={producto.thumb}
                                        className="mt-4"
                                    />
                                    <Button variant="outlined" className="mt-4">
                                        Ver más
                                    </Button>
                                    <Typography component="p" className="mt-4">
                                       STOCK DISPONIBLE: {producto.stock}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                ))
            }
            </Grid>

        </div>
    )
}
