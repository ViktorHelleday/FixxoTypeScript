import React from 'react'
import ProductCard from '../components/ProductCard'

const LeftDealSection = ({items = []}) => {
  return (
    <section className="dealSection container">
        <div className="offerBox">
            <h1>2 FOR USD $29</h1>
            <button type="button" className="btn-Con">
                <div className="corner-left"></div>
                FLASH SALE
                <div className="corner-right"></div>
            </button>
        </div>
        <div className="row row-cols-2 row-cols-md-2 g-4 leftDealCards">
            {
                items.map(product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
    </section>
  )
}

export default LeftDealSection