import { useEffect } from 'react'
import axios from 'axios';

function Producto() {

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js');
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
        getProduct()
    }, [])


    return (<div></div>)
}
export default Producto;