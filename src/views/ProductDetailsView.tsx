import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection';
import MainMenuSection from '../sections/MainMenuSection';
import ProductDetailSection from '../sections/ProductDetailSection';
import { useParams } from 'react-router-dom';
import { ProductContextType, useProductContext } from '../contexts/contexts';

const ProductDetailsView: React.FC = () => {
    const {id} = useParams<string>();
    const ProductContext = useProductContext() as ProductContextType

    useEffect (() => {
      ProductContext.getProduct(id)
    }, [])

  return (
    <>
    <MainMenuSection />
    <ProductDetailSection item={ProductContext.product} />
    <FooterSection />
    </>
  )
}

export default ProductDetailsView