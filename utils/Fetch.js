export async function fetchData(cat){
    try{
        const res = await fetch(`http://localhost:3000/api/getproducts?cat=${cat}`, {cache: "no-store"}).then((a) => a.json());
        return res;
    } catch(e){
        console.log(e);
    }
}

export async function fetchProduct(slug){
    const res = await fetch(`http://localhost:3000/api/getproduct?slug=${slug}`, {cache: "no-store"}).then((a) => a.json());
    return res;
}

export async function fetchOrders(){
    try {
        const res = await fetch(`http://localhost:3000/api/getOrders`, {cache: "no-store"}).then((a) => a.json());
        return {res, status: 200};
    } catch (error) {
        console.log(error);
        return {status: 500}
    }
}