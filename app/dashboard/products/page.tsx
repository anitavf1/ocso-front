import {API_URL} from "@/constants";
import {Product} from "@/entities"
import { authHeaders } from "@/helpers/authHeaders";
import { Link } from "@nextui-org/react";
import ProductCard from "../providers/[id]/_components/ProductCard";

const ProductsPage = () =>{
    const response = await fetch(`${API_URL}/products`, {
        headers:{
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:products"],
        },
    });
    const products: Product[]= await response.json()
    return (<div>
        
    </div>)
}

export default ProductsPage;