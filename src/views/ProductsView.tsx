import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContextType, useProductContext } from '../contexts/contexts'


const ProductsView: React.FC = () => {

  const {allProducts, getAllProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={allProducts} />
      <FooterSection />
    </>
  )
}

export default ProductsView