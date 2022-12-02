import React from 'react'
import { ProductItem } from '../models/ProductModels'



interface ProductDetailsType {
    item: ProductItem
}

const ProductDetailSection: React.FC<ProductDetailsType> = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.imageName} alt="Varför visas inte denna del" />
        </div>
    )
}

export default ProductDetailSection
