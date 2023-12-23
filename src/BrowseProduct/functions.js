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

async function searchProducts(){

}

export {getProducts};
