import React from 'react'
import './Shop-Window.less';
import ProductList from './Product-List-Grid';
import Carousel from '../carousel/Carousel';


export default function ShopWindow(props) {
    return (
        <>
        {props.isCarousel ? 
        <div className="article-list">
            <Carousel>
                <ProductList/>
            </Carousel>
        </div>
        : 
        <div className="article-list">
            <ProductList/>
        </div> 
        }            
        </>
    )
}
