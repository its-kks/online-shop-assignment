import './ProductsPage.css'
import filter from '../assets/filter.png'
import { useState } from 'react';
import { searchProducts } from './functions';

function SearchAndFilter({products,setProducts}){
    const [searchQuerry,setSearchQuerry] = useState('');

    return (
        <>
            <div className='searchFilterDiv'>
                <input 
                    type="text" 
                    name="serach" 
                    id="search" 
                    className='searchInput'
                    onChange={(event)=>{
                        const val = event.target.value;
                        setSearchQuerry(val);
                    }}
                    value={searchQuerry}
                />
                <button 
                    className='buttonFilterSearch'
                    onClick={() => {
                        const querry = searchQuerry;
                        const fetchProducts = async () => {
                            try {
                                const productsList = await searchProducts(querry);
                                setProducts(productsList.products);
                            } catch (error) {
                                console.error('Error fetching products:', error);
                            }
                        };
                        fetchProducts();
                        setSearchQuerry('');
                    }}
                    >🔍
                </button>
                <button className='buttonFilterSearch'>➕</button>
            </div>
        </>
    )
}

export default SearchAndFilter;