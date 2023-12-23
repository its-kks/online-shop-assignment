import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductsPage.css'
import { getProducts } from './functions';
import Product from './Product'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CartItem from './CartItem'
import cartDown from '../assets/cartDown.png'
import cartUp from '../assets/cartUp.png'

function ProductsPage() {
    const location = useLocation();
    const userData = location.state;

    const image = userData.image;

    // State to store the list of products
    const [products, setProducts] = useState([]);
    const [cartItems,setCartItems] = useState({});
    const [showCart,setShowCart] = useState(false);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsList = await getProducts();
                setProducts(productsList.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);


    return (
    <div className='divColCentre'> 
        <nav className='navigation'>
            <img src={image} className='logo'/>
            <img src={showCart ?cartUp : cartDown}
                className='cartLogo'
                onClick={()=>{
                let curr = showCart;
                setShowCart(!curr);
            }}/>
        </nav>
        <div className='body'>
            <div className='productContainer'>
                <SimpleBar className='productContainer'>
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            thumbnail={product.thumbnail}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            rating={product.rating}
                            discount={product.discountPercentage}
                            category={product.category}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    ))}
                </SimpleBar>
            </div>
            {showCart ?<div className='cartContainer'>
                <SimpleBar className='productContainer'>
                    {Object.keys(cartItems).map((key) => (
                        <CartItem
                            key={key}
                            title={key}
                            quantity={cartItems[key].quantity}
                            price={cartItems[key].price}
                            thumbnail={cartItems[key].image}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    ))}
                </SimpleBar>
            </div> : null}
        </div>
    </div>
    );
}

export default ProductsPage;
