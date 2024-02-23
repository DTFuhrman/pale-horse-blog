import React, { useState } from "react";
import { graphql } from "gatsby";
import PisanoCalculator from '../logic/PisanoCalculator';
import Layout from "../components/layout"
import Splash from "../components/splash"

const MathPage = ({ data }) => {
  const [seed1, setSeed1] = useState(0);
  const [seed2, setSeed2] = useState(0);
  const [modulo, setModulo] = useState(1);
  const [result, setResult] = useState([]);

  const siteTitle = data.site.siteMetadata.title;

  const calculatePisanoPeriod = () => {
    const pisanoCalculator = new PisanoCalculator(BigInt(seed1), BigInt(seed2), BigInt(modulo));
    const period = pisanoCalculator.generatePisanoPeriod(BigInt(seed1), BigInt(seed2), BigInt(modulo));
    setResult(period);
  };

  const handleSeed1Change = (event) => {
    if (event.target.value > 500) {
      setSeed1(BigInt(500));
    } else {
        setSeed1(BigInt(event.target.value));
        }
    };

  const handleSeed2Change = (event) => {
    if (event.target.value > 500) {
      setSeed2(BigInt(500));
    } else {
        setSeed2(BigInt(event.target.value));
        }
    };

  const handleModuloChange = (event) => {
    if (event.target.value > 10000) {
      setModulo(BigInt(10000));
    } else {
        setModulo(BigInt(event.target.value));
        }
    };

  return (
    <Layout location={location} title={siteTitle}>
    <Splash />
    <div>
      <h1>Math Page</h1>
      <p>Let's Calculate a Pisano Period.
        Pisano Periods are repeating patterns of remainders whe Fibonacci numbers are divided by a number.
        For the Fibonacci Sequence, use 0 and 1 as your seeds, or 1 and 1.
        For the Lucas Sequence, use 2 and 1 as your seeds.
        Or try something else. I set a maximum of 500 for seed values and 10000 for the modulo to keep the numbers reasonable.
        Also, if you happen to find a pisano period longer than 50000, it will stop calculating and return an empty array 
        instead of burning out your browser. (That's not a real thing, but it would push your processor a bit).
        Enjoy!
      </p>
      <input type="number" value={seed1} onChange={handleSeed1Change} placeholder="Enter seed1" />
      <input type="number" value={seed2} onChange={handleSeed2Change} placeholder="Enter seed2" />
      <input type="number" value={modulo} onChange={handleModuloChange} placeholder="Enter modulo" />
      <button onClick={calculatePisanoPeriod}>Calculate Pisano Period</button>
      <p>Result: |{result.length}| - {result.join(', ')}</p>
    </div>
    </Layout>
  );
};

export default MathPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`