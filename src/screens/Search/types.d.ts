import { InfoData } from 'types/types';

export interface SearchProps {
    route: any;
    navigation: any;
}

export interface RenderItemsProps {
    data: InfoData[];
    lang: 'en' | 'mm';
}
