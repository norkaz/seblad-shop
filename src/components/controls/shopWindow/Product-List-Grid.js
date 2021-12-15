import React from 'react'
import './Shop-Window.less';
import { products } from '../../../data/products/products';
import Img from '../img/Img';


export default function ProductList(props) {
    return (
        <>
            {products.map((data, key) => {                
                const savingPrice = Math.round(data.price * (data.discountPercent/100))

                return (
                <div key={key} className="item">
                    <a href={'/article/' + data.name}>
                        <div className="border-wrapper">
                            <div className="image">
                                {savingPrice ? <span className="badge">{data.discountPercent} %</span>: ''}
                                <Img src={'https://facegram.se/CDNproducts/articlenumbers/' + data.artNr + '.jpg'} alt={data.name} width="400px" height="400px" />
                            </div>
                            <div className="item-info">
                            <div className="name">
                                {data.name}
                            </div>
                            <div className="intro">
                                {data.intro}
                            </div>
                            <div className="price-container">
                            {savingPrice ? 
                            <>
                                <div className="price discount">
                                    {data.price - savingPrice} {data.currency}
                                </div>
                                <div className="regular-price">
                                    {data.price} {data.currency}
                                </div>
                            </> : 
                            <div className="price">
                                {data.price} {data.currency}
                            </div>
                            }
                            </div>
                        </div>
                        </div>
                    </a>
                </div>              
                )
            })}
        </>
    )
}
