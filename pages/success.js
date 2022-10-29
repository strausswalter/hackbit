import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Obrigado pelo seu pedido!</h2>
        <p className="email-msg">
          A sua Nota Fiscal foi enviada para o seu e-mail.
        </p>
        <p className="description">
          Se você tiver alguma dúvida, por favor, envie um e-mail
          <a className="email" href="mailto:strausswalter@gmail.com">
            strausswalter@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Volte às compras
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
