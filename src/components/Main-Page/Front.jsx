import Nav from "./mainpart/Nav";
import Heading from "./mainpart/Heading";
import Searchbars from "./mainpart/Searchbars";
import Cards from "./mainpart/Cards";
import WhatsInMind from "./WhatInMind"
import ViewResort from "./ViewResort";
import DeliveryTypes from "./mainpart/DeliveryTypes";
import Footer from "../Footer";


export default function Front() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="front.png"
          alt="Background-Image"
          className="  h-auto w-full object-cover z-0"
        />


        <div className="absolute top-0 h-full w-full text-center">
          <Nav />
          <Heading/>
          <Searchbars/>
          <Cards/>
        </div>

      </div>

      <WhatsInMind/>
      <ViewResort/>
      <DeliveryTypes/>
      <Footer/>


    </>
  );
}
