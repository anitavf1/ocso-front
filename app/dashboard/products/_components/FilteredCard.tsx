'Use client';
import {Product, Provider} from "@/entities";
import Link from "next/link";
import ProductCard from "../../providers/[id]/_components/ProductCard";
import { useState, useEffect} from "react";
import {Input, Select, SelectItem} from "@nextui-org/react"


export default function FilteredCards({products, providers}: {products: Product[], providers: Provider[]}){
    const [filtered, setFiltered]= useState<string>("");
    const [provider, setProvider] =useState<string>();
    const [show, setShow]= useState(false);
    const [productList, setProductsList]= useState<Product[]>(products);
    useEffect(()=>{
        const filteredProducts= products.filter((product)=>{
            if(product.productName.toLocaleLowerCase().includes(filtered.toLowerCase())
                && provider? product.provider.providerId === provider:true ){
                return true
            } else return false;
        })
        setProductsList(filteredProducts);
        setShow(true);
    }, [filtered, provider, products]);
    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-4 border-r-orange-400 border-r-2 px-10 pt-10">
        <Select label="Proveedor" onChange={(e)=>{
            setProvider(e.target.value);
        }}>
            {providers.map((provider)=>(
            <SelectItem key={provider.providerId}>
                {provider.providerName}
            </SelectItem>))}
        </Select>
        <Input 
            onChange={(e)=>
            setFiltered(e.target.value)
        }}
        label="Nombre del producto "
        />
        {show && setProductsList
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
