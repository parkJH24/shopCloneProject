
"use client"
import { getCategoryProduct } from "@/api/api";
import CategoryProductList from "@/components/CategoryProductList";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NoProduct from "./NoProduct";
// import { useRouter } from "next/router";


export default function CategoryPage() {
    const pathName = usePathname();

    const slug = pathName.split('/').pop();
    console.log(slug)

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getCategoryProduct(slug).then((product)=>{
            setProducts(product);
        }).catch((error)=>{
            console.error(error)
        })  
    },[slug])
    console.log(products)

    return(
        <Container>
            <h2>{slug}페이지</h2>
            {/* <CategoryProductList slug={slug} products={products}/> */}
            {products.length > 0 ? (
                <CategoryProductList slug={slug} products={products}/>
            ) : (
                <NoProduct/>
            )}
        </Container>
    )
}
const Container = styled.div`
    
`