import styled from "styled-components"
import Image from "next/image"
import { formatCurrency } from "@/utils/formatCurrency"


export default function ProductItem({product}){
    console.log(product)
    return(
        <DetailItem>
            <Image src={product.image} width={'300'} height={'450'} layout="responsive" alt={product.title}/>
            <TextWrap>
                <h3 className="itemTitle">{product.title}</h3>
                <div className="itemFlex">
                    <p className="itemPrice">{formatCurrency(product.price)}원</p>
                    <p className="itemOpt">{product.option}</p>
                </div>
                <div className="itemColor">
                    {product.colors && product.colors.map((color,index)=>(
                        <div key={index} style={{backgroundColor : color}}/>
                    ))}
                </div>
            </TextWrap>
        </DetailItem>
    )
}
//Image 컴포넌트를 사용할때에는 허용된 이미지 소스 도메인만 사용할 수 있다.
const DetailItem= styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    .itemTitle{
        font-size: 20px;
        font-weight: bold;
        transition: 500ms;
        color : rgba(255,255,255,0.7);
        &:hover{
            color: rgba(255,255,255,1);
        }
    }
    .itemFlex{
        display: flex;
        justify-content: space-between;
    }
    .itemColor{
        display: flex;
        height: 20px;
        gap: 4px;
        div{
            width: 20px;
            height: 20px;
            border: solid 1px rgba(255,255,255,0.5);
        }
    }
`