import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {

  window.top.document.title = 'Products | Fixxo.'

  const products = useContext(ProductContext);

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView