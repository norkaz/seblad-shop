import React from 'react'
import './Shop-Window.less';
import { products } from '../../../data/products/products';



export default function ShopWindow(props) {
    return (
        <>
        {props.header && <h3>{props.header}</h3>}
        <div className={props.type ? 'article-list ' + props.type  : 'article-list'}>
            {products.map((data, key) => {
                const savingPrice = Math.round(data.price * (data.discountPercent/100))

                return (
                <div key={key} className="item">
                    <a href={'/article/' + data.name}>
                        <div className="border-wrapper">
                            <div className="image" style={{
                                backgroundImage: "url(` + `/img/products/articlenumbers/` + data.artNr + `.jpg` + `)"}}>
                                {savingPrice ? <span className="badge">{data.discountPercent} %</span>: ''}
                                <img src={'/img/products/articlenumbers/' + data.artNr + '.jpg'} alt={data.name} width="400" height="400"/>
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
        </div>
        </>
    )
}
