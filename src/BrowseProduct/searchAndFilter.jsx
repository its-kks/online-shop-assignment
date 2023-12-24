import './ProductsPage.css'
import filter from '../assets/filter.png'
import { useState } from 'react';
import { searchProducts,sortItems} from './functions';


function SearchAndFilter({products,setProducts}){
    const [searchQuerry,setSearchQuerry] = useState('');
    const [showFilter,setShowFilter] = useState(false);
    const [sort,setSort] = useState('none');

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
                <button 
                    className='buttonFilterSearch'
                    onClick={()=>{setShowFilter(!showFilter)}}
                >➕
                </button>
                {showFilter ? (<div className='filterList'>
                    <div style={{marginRight:'1vw'}}>
                        <input 
                            type="radio" 
                            name="sort" 
                            id="sortAsc" 
                            value='asc'
                            onChange={()=>{
                                setSort('asc');
                                sortItems('asc',products,setProducts);
                            }}
                        />
                        <p style={{display:'inline'}}>Ascending</p><br/>
                        <input 
                            type="radio" 
                            name="sort" 
                            id="sortDesc" 
                            value='desc'
                            onChange={()=>{
                                setSort('desc');
                                sortItems('desc',products,setProducts);
                            }}
                            />
                        <p style={{display:'inline'}}>Descending</p>
                    </div>
                    <div>
                        <button
                            style={{background:'none',border:0,fontWeight:'bolder'}}
                            onClick={()=>{
                                setSort('none');
                                const radio1 = document.querySelector('#sortAsc');
                                const radio2 = document.querySelector('#sortDesc');
                                radio1.checked = false;
                                radio2.checked = false;
                                sortItems('none',products,setProducts);
                            }}
                            >❌
                        </button>
                    </div>
                </div>) : null}
            </div>
        </>
    )
}

export default SearchAndFilter;