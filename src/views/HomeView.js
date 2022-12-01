import React, { useContext } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import ProductGridSection from '../sections/ProductGridSection';
import ShowcaseSection from '../sections/ShowcaseSection';
import InspoSection from '../sections/InspoSection';
import LeftDealSection from '../sections/LeftDealSection';
import FooterSection from '../sections/FooterSection';
import { DealProductsContext, FeaturedProductsContext, ProductContext } from '../contexts/contexts';
import RightDealSection from '../sections/RightDealSection';
import SupportSectionBottom from '../sections/SupportSectionBottom';



const HomeView = () => {

  window.top.document.title = 'Fixxo.'
  
  const featuredProducts = useContext(FeaturedProductsContext)
  const dealProducts = useContext(DealProductsContext)

  return (
    <>

      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <ProductGridSection title="Featured Products" items={featuredProducts} />
      <InspoSection />
      <LeftDealSection items={dealProducts} />
      <RightDealSection items={dealProducts} />
      <SupportSectionBottom />
      <FooterSection />
    </>
  )
}
 
export default HomeView 