import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../App.css";
import Footer from "./footer";
import Header from "./navbar";
import PricingContent from "./pricingcontent";
import Head from "./head";

export default function Pricing() {
  return (
    <>
      <Head />
      <PricingContent />
    </>
  );
}
