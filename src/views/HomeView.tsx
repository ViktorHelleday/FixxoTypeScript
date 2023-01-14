import React, { useEffect } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import ProductGridSection from '../sections/ProductGridSection';
import ShowcaseSection from '../sections/ShowcaseSection';
import InspoSection from '../sections/InspoSection';
import LeftDealSection from '../sections/LeftDealSection';
import FooterSection from '../sections/FooterSection';
import RightDealSection from '../sections/RightDealSection';
import SupportSectionBottom from '../sections/SupportSectionBottom';
import { ProductContextType, useProductContext } from '../contexts/contexts';


const HomeView: React.FC = () => {

  const {featuredProducts, getFeaturedProducts, dealProducts, getDealProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(4)
  }, [])

  useEffect(() => {
    getDealProducts(8)
  }, [])

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