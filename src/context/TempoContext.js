import React, { createContext, useState } from 'react';

export const TempoContext = createContext(60);

export const TempoProvider = ({ children }) => {
    const [tempo, setTempo] = useState(60);

    return (
        <TempoContext.Provider value={{ tempo, setTempo }}>
            {children}
        </TempoContext.Provider>
    );
};