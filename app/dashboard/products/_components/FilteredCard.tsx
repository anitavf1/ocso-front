'Use client';
import {Product} from "@/entities";
import Link from "next/link";
import ProductCard from "../../providers/[id]/_components/ProductCard";
import { useState, useEffect} from "react";



export default function FilteredCards({products}: {products: Product[]}){
    const [filtered, setFiltered]= useState<string>("");
    const []
    useEffect(()=>{
        const filteredProducts= products.filter((product)=>{
            if(product.productName.toLocaleLowerCase().includes(filtered.toLowerCase())){
                return true
            } else return false;
        })
        setProductsList(filteredProducts);

    }, [filtered])
    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-8 border-r-orange-400 border-r-2 px-10 pt-10">
        <Input 
            onChange={(e)=>
            setFiltered(e.target.value)
        }}
        label="Nombre del producto "
        />
        {setProductsList
            .map((product)=>{
                return(
                    <Link
                    className="hover:scale-100 transition-transform"
                    key={product.productId}
                    href={{pathname: `/dashboard/products/${product.productId}`}}
                    >
                        <ProductCard product={product}/>
                    </Link>
                );
        })}
        <div/>
    );
    
}

function setProductsList(filteredProducts: Product[]) {
    throw new Error("Function not implemented.");
}
