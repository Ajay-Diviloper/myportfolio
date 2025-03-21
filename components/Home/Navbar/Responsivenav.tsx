"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Responsivenav = () => {
  const [shownav, setshownav] = useState(false);

  const shownavhandler = () => setshownav(true);
  const closenavhandler = () => setshownav(false);

  return (
    <>
      <Nav opennav={shownavhandler} />
      <MobileNav shownav={shownav} closenav={closenavhandler} />
    </>
  );
};

export default Responsivenav;
