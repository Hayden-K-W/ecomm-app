import React, { useState } from 'react';
import './ProductItem.css';

export default function ProductItem({ product }) {
    const [showForm, setShowForm] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: 'credit'
    });

    const handleBuyNow = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const handleQuantityChange = (e) => {
        setQuantity(Math.max(1, parseInt(e.target.value) || 1));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would process the order here
        alert(`Thank you for your order of ${quantity} ${product.name}(s)!`);
        setShowForm(false);
        setQuantity(1);
        setFormData({
            name: '',
            email: '',
            address: '',
            paymentMethod: 'credit'
        });
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p className="product-description">{product.description}</p>
                <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
            </div>

            {showForm && (
                <div className="purchase-form-overlay">
                    <div className="purchase-form">
                        <button className="close-form-btn" onClick={closeForm}>×</button>
                        <h3>Purchase {product.name}</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Quantity:</label>
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={quantity} 
                                    onChange={handleQuantityChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Total Price:</label>
                                <p className="total-price">${(product.price * quantity).toFixed(2)}</p>
                            </div>
                            <div className="form-group">
                                <label>Full Name:</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Shipping Address:</label>
                                <textarea 
                                    name="address" 
                                    value={formData.address} 
                                    onChange={handleInputChange} 
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Payment Method:</label>
                                <select 
                                    name="paymentMethod" 
                                    value={formData.paymentMethod} 
                                    onChange={handleInputChange}
                                >
                                    <option value="credit">Credit Card</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="bitcoin">Bitcoin</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-order-btn">Complete Purchase</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}