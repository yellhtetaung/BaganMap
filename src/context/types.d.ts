import React from 'react';
import { InfoData } from 'types/types';

export interface FoundResult {
    start?: InfoData;
    end?: InfoData;
}

export interface AppContextProps {
    foundResult: FoundResult | null;
    setFoundResult: Function;
}

export interface AppContextProviderProps {
    children: React.ReactNode;
}
