import React from 'react';
import { InfoData } from 'types/types';

export interface AppContextProps {
    foundResult: InfoData | null;
    setFoundResult: Function;
}

export interface AppContextProviderProps {
    children: React.ReactNode;
}
