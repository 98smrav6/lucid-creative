import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'NASA', description: 'Shirt.', price: '$25', image: 'https://img.ltwebstatic.com/images3_pi/2021/01/26/161162724167ad2689110fee16c0808f7da81f10f1_thumbnail_900x.webp'},
    { id: 2, name: 'ROBOTIC', description: 'Shirt.', price: '$28', image: 'https://img.ltwebstatic.com/images3_pi/2021/03/30/1617086828fc7fc2ea6c6e3c67d373c0a552788938_thumbnail_900x.webp' },
];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )    
}

export default Products;