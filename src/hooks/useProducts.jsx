import axios from "axios";
import { useEffect, useState } from "react";


export default function useProducts() {
    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState("");

    let getProducts = async (search) => {
        let res = await axios.get('/api/products?name=' + search);
        setProducts(res.data.products)
    }

    useEffect(() => {
        getProducts(search);

    }, [search])

    return {
        products,
        search,
        setSearch
    }
}

