async function getProducts(){
    const head = {
        method: 'GET',
    }
    const url = 'https://dummyjson.com/products'
    try {
        const response = await fetch(url,head);
        if(response.status===200){
            const data = await response.json();
            return data;
        }
        else{
            throw new Error('Failed to get data');
        }
    } catch(err) {
        console.log(err.message);
        return null;
    }
}

async function searchProducts(querry){
    const head = {
        method: 'GET',
    }
    const url = `https://dummyjson.com/products/search?q=${querry}`
    try {
        const response = await fetch(url,head);
        if(response.status===200){
            const data = await response.json();
            return data;
        }
        else{
            throw new Error('Failed to get data');
        }
    } catch(err) {
        console.log(err.message);
        return null;
    }

}
function sortItems(order, products, setProducts) {
    let sortedProducts;

    if (order === 'none') {
        sortedProducts = [...products].sort((a, b) => a.id - b.id);
    } 
    else if (order === 'asc') {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } 
    else if (order === 'desc') {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
    }
    setProducts([...sortedProducts]);
}

export {getProducts,searchProducts,sortItems};
