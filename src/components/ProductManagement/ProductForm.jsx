import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('');
    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // Validation
        if (name.length === 0) {
            setError('Please provide a Product Name!');
            return;
        } else if (price.length === 0) {
            setError('Please provide a Product Price!');
            return;
        } else if (price < 0) {
            setError('Product Price cannot be Negetive!');
            return;
        } else if (quantity.length === 0) {
            setError('Please provide a Product Quantity!');
            return;
        } else if (quantity < 0) {
            setError('Product Quantity cannot be Negetive!');
            return;
        } else {
            setError('');
        }

        const newProductData = {
            name,
            price,
            quantity
        }
        handleAddProduct(newProductData);
    }
    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ProductForm;