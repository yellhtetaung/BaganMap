import { InfoData } from 'types/types';

export interface SearchProps {
    route: any;
    navigation: any;
}

export interface RenderItemsProps {
    data: InfoData[];
    lang: 'en' | 'mm';
    key: 'start' | 'end';
}

export interface Result {
    start?: InfoData;
    end?: InfoData;
}
