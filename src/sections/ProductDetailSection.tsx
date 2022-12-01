import React from 'react'
import { ProductItem } from '../models/ProductModels'



interface ProductDetailsType {
    product: ProductItem
}

const ProductDetailSection: React.FC<ProductDetailsType> = ({ product }) => {
    return (
        <div>
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <img src={product.imageName} alt="" />
        </div>
    )
}

export default ProductDetailSection
