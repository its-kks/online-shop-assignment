import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductsPage.css'

function ProductsPage() {
    const location = useLocation();
    const userData = location.state;

    const image = userData.image;

    useEffect(()=>{},[]);

    return (
    <div className='divColCentre'> 
        <nav className='navigation'>
            <img src={image} className='logo'/>
        </nav>
        <div className='productContainer'>
            <div>
                {/* //products */}
            </div>
            <div>
                {/* //cart */}
            </div>
        </div>
    </div>
    );
}

export default ProductsPage;
