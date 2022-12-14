import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModels'

export interface RightDealSectionType {
    items: ProductItem[]
}

const RightDealSection: React.FC<RightDealSectionType> = ({items = []}) => {
  return (
    <section className="dealSection container">
        <div className="row row-cols-2 row-cols-md-2 g-4 leftDealCards">
            {
                items.map(product => <ProductCard key={product.articleNumber} item={product} />)
            }
        </div>
        <div className="offerBox">
            <h1>2 FOR USD $49</h1>
            <button type="button" className="btn-Con">
                <div className="corner-left"></div>
                FLASH SALE
                <div className="corner-right"></div>
            </button>
        </div>
    </section>
  )
}

export default RightDealSection