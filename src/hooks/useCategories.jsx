import axios from "axios";
import { useEffect, useState } from "react";

export default function useCategories() {

    let [categories, setCategories] = useState([]);

    let getCategories = async () => {
        let res = await axios.get('/api/categories');
        setCategories(res.data.categories)
    }

    useEffect(() => {
        getCategories();
    }, [])

    return {
        categories
    }
}
