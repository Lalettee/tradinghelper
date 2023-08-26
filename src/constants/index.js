import {
    mobile,
    backend,
    creator,
    web,
    bitcoin,
    cardano,
    ethereum,
    litecoin,
    xrp,
    twoexchange,
    oneexchange,
    history,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "modes",
      title: "Modes",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Orderbook for Binance and Bitfinex",
      icon: web,
    },
    {
      title: "Orderbook for One Exchange",
      icon: mobile,
    },
    {
      title: "Trades History",
      icon: backend,
    },
    {
      title: "Coming Soon...",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Bitcoin",
      icon: bitcoin,
    },
    {
      name: "Ethereum",
      icon: ethereum,
    },
    {
      name: "Xrp",
      icon: xrp,
    },
    {
      name: "Cardano",
      icon: cardano,
    },
    {
      name: "Litecoin",
      icon: litecoin,
    },
  ];
  
  const projects = [
    {
      name: "Binance + Bitfinex",
      description:
        "Gain a comprehensive view of order books from two exchanges. Analyze buy and sell orders, market depth, and liquidity to make more informed trading decisions.",
      image: twoexchange,
    },
    {
      name: "One Exchange",
      description:
        "Focus on a specific exchange and delve deep into its order book. Track price movements, detect potential trends, and spot opportunities for profitable trades.",
      image: oneexchange,
    },
    {
      name: "Trades History",
      description:
        "Access a comprehensive history of past trades for valuable insights. Analyze historical price data, trading volumes, and market trends to fine-tune your trading strategy.",
      image: history,
    },
  ];
  
  export { services, technologies, projects };