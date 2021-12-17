import React from 'react'
import './Shop-Window.less';
import { products } from '../../../data/products/products';
import Img from '../img/Img';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

export default function ProductList(props) {
    return (
        <>
        <Carousel responsive={responsive} showDots={true}>
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
            </Carousel>    
        </>
        
    )
}