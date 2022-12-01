import React from 'react'
import supportImg from '../assets/images/support.png'
import secureImg from '../assets/images/secure.png'
import deliveryImg from '../assets/images/deliver.png'
import returImg from '../assets/images/retur.png'

const SupportSectionBottom = () => {
  return (
    <section className="supportAndDelivery">
      <img className="support" src={supportImg} alt="Support" />
      <img className="secure" src={secureImg} alt="Secure payments" />
      <img className="delivery" src={deliveryImg} alt="Fast deliveries" />
      <img className="retur" src={returImg} alt="Easy returns" />
    </section>
  )
}

export default SupportSectionBottom