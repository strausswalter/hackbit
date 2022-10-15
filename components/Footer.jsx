import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>©Todos os direitos reservados. | Site Seguro | Desenvolvido por {<a href="https://strausswalter.com.br" target="_blank">Strauss Walter</a>}</p>
      <p className='icons'>
        <AiFillFacebook/>
        <AiFillInstagram/>
        <AiFillMail/>
        <FaWhatsappSquare/>
      </p>
    </div>
  )
}

export default Footer