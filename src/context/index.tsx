import React, { createContext, useContext, useState } from 'react';
import { AppContextProps, AppContextProviderProps, FoundResult } from './types';

const AppContext = createContext<AppContextProps>({
    foundResult: null,
    setFoundResult: () => {},
});

const useData = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('Context does not exist');
    }

    return context;
};

export const useDataContext = () => {
    const { foundResult, setFoundResult } = useData();

    return { foundResult, setFoundResult };
};

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [result, setResult] = useState<FoundResult>({
        start: undefined,
        end: undefined,
    });

    const changeFoundedResult = (data: FoundResult) => {
        setResult(data);
    };

    const value = { foundResult: result, setFoundResult: changeFoundedResult };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
