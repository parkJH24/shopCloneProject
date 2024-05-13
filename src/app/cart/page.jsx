
"use client"
import CartItem from "@/components/CartIItem";
import useCart from "@/service/useCart";
import styled from "styled-components";


export default function CartPage(){
    const {cartInfo : {data : products}} = useCart();
    const isItem = products && products.length > 0;
    return(
        <Container>
            <h2 className="itemTitle">장바구니 리스트</h2>
            {!isItem && <p>장바구니에 상품이 없습니다.</p>}

            {isItem&&(
                <CartList>
                    {products && products.map((el, index)=>(
                        <CartItem key={el.id} product={el} index={index}/>
                    ))}
                </CartList>
            )}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
    padding: 100px 0px;
     .itemTitle{
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 12px;
     }

`
const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top: solid 1px rgba(255,255,255,0.2);
    padding: 24px 0px;
    li{
        display: flex;
        align-items: center;
        border-bottom: solid 1px rgba(255,255,255,0.2);
        padding: 12px 0px;
        gap: 12px;
        img{
            width: 100px;
            display: block;
        }
    }
`