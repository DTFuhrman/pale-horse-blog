import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import SoundPlayer from '../logic/SoundPlayer'
import Layout from "../components/layout"
import Splash from "../components/splash"

const RadioPage = ({ data }) => {
    const [key, setKey] = useState('F#m');
    const [keyInput, setKeyInput] = useState('F#m');
    const [tempo, setTempo] = useState(60);
    const [tempoInput, setTempoInput] = useState(85);
    const [seed1, setSeed1] = useState(1);
    const [seed1Input, setSeed1Input] = useState(1);
    const [seed2, setSeed2] = useState(1);
    const [seed2Input, setSeed2Input] = useState(1);
    const soundPlayer = new SoundPlayer(seed1, seed2, key, tempo);

    const siteTitle = data.site.siteMetadata.title;

    const handleTempoChange = () => {
        const newTempo = tempoInput;
        if (!isNaN(newTempo)) {
            setTempo(newTempo);
            soundPlayer.setTempo(tempo);
        }
    }

    const handleTempoInputChange = (event) => {
        setTempoInput(Number(event.target.value));
    }

    const handleKeyChange = () => {
        const newKey = keyInput;
        setKey(newKey);
        soundPlayer.setKey(key);
    }

    const handleKeyInputChange = (event) => {
        setKeyInput(event.target.value);
    }

    const handleSeed1Change = () => {
        const newSeed1 = seed1Input;
        if (!isNaN(newSeed1) && newSeed1 >= 0 && newSeed1 <= 500) {
            setSeed1(newSeed1);
            soundPlayer.setSeed1(newSeed1);
        } else {
            console.log('Invalid seed1 value:', newSeed1);
            setSeed1(1);
            soundPlayer.setSeed1(1);
        }
    }

    const handleSeed1InputChange = (event) => {
        setSeed1Input(Number(event.target.value));
    }

    const handleSeed2Change = () => {
        const newSeed2 = seed2Input;
        if (!isNaN(newSeed2) && newSeed2 >= 0 && newSeed2 <= 500) {
            setSeed2(newSeed2);
            soundPlayer.setSeed2(newSeed2);
        } else {
            console.log('Invalid seed2 value:', newSeed2);
            setSeed2(1);
            soundPlayer.setSeed2(1);
        }
    }

    const handleSeed2InputChange = (event) => {
        setSeed2Input(Number(event.target.value));
    }

    return (
        <Layout location={location} title={siteTitle}>
        <Splash />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                <label>Tempo: </label>
                <input type="number" value={tempoInput} onChange={handleTempoInputChange}/>
                <button onClick={handleTempoChange}>Set Tempo</button>
            </div>
            <div>
                <label>Seed1: </label>
                <input type="number" value={seed1Input} onChange={handleSeed1InputChange}/>
                <button onClick={(handleSeed1Change)}>Set Seed1</button>
            </div>
            <div>
                <label>Seed2: </label>
                <input type="number" value={seed2Input} onChange={handleSeed2InputChange}/>
                <button onClick={(handleSeed2Change)}>Set Seed2</button>
            </div>
            <div>
                <label>Key: </label>
                <select value={keyInput} onChange={handleKeyInputChange}>
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="D">D</option>
                    <option value="D#">D#</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="F#">F#</option>
                    <option value="G">G</option>
                    <option value="G#">G#</option>
                    <option value="A">A</option>
                    <option value="A#">A#</option>
                    <option value="B">B</option>
                    <option value="Cm">Cm</option>
                    <option value="C#m">C#m</option>
                    <option value="Dm">Dm</option>
                    <option value="D#m">D#m</option>
                    <option value="Em">Em</option>
                    <option value="Fm">Fm</option>
                    <option value="F#m">F#m</option>
                    <option value="Gm">Gm</option>
                    <option value="G#m">G#m</option>
                    <option value="Am">Am</option>
                    <option value="A#m">A#m</option>
                    <option value="Bm">Bm</option>
                </select>
                <button onClick={(handleKeyChange)}>Log Key</button>
            </div>
            <button onClick={() => soundPlayer.playSound(tempo, key)}>Play Sound</button>
            <button onClick={() => soundPlayer.stopSound()}>Stop Sound</button>
            <Link to="/">Go back to the homepage</Link>
        </div>
        </Layout>
    )
}

export default RadioPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`