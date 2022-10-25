import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    const modeValue = { dark, setDark };

    return (
        <DarkModeContext.Provider value={modeValue}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;