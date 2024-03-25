import React, { useMemo, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import { TextInput, colors, Card, CardHeader, CardTitle, Button } from 'components';

import styles from './styles';

import data from 'libs/data';

import { SearchProps, RenderItemsProps } from './types';
import { InfoData } from 'types/types';
import { useDataContext } from 'context';

const Search: React.FC<SearchProps> = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    const { foundResult, setFoundResult } = useDataContext();

    const filterdEng = useMemo(
        () => data.Tbl_BaganMapInfoData.filter(value => value.PagodaEngName.includes(inputValue)),
        [inputValue],
    );

    const filterdMM = useMemo(
        () => data.Tbl_BaganMapInfoData.filter(value => value.PagodaMmName.includes(inputValue)),
        [inputValue],
    );

    const onChangeHandler = (value: string) => {
        setInputValue(value);
        setIsSelected(false);
    };

    const selectHandler = (value: string, pagoda: InfoData) => {
        setInputValue(value);
        setIsSelected(true);
        setFoundResult(pagoda);
    };

    const navigateHandler = () => {
        navigation.navigate('Drawer', { data: foundResult });
    };

    const renderItem = ({ data: renderData, lang }: RenderItemsProps) => (
        <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>
            <View style={styles.resultContainer}>
                {renderData.map(pagoda => (
                    <Card
                        key={pagoda.Id}
                        onPress={() => {
                            if (lang === 'en') {
                                selectHandler(pagoda.PagodaEngName, pagoda);
                            } else {
                                selectHandler(pagoda.PagodaMmName, pagoda);
                            }
                        }}
                        style={styles.cardContainer}
                    >
                        <CardHeader>
                            <CardTitle style={styles.cardTitle}>
                                {lang === 'en' ? pagoda.PagodaEngName : pagoda.PagodaMmName}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </View>
        </ScrollView>
    );

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TextInput
                        label={'ဘုရားစေတီများ ရှာရန်'}
                        labelStyle={styles.labelStyle}
                        value={inputValue}
                        onChangeText={text => onChangeHandler(text)}
                        placeholder={'စာသားရိုက်ထည့်ရန်...'}
                        placeholderTextColor={colors.white}
                    />

                    <View style={styles.buttonContainer}>
                        <Button
                            label={'Search'}
                            labelStyle={styles.buttonLableStyle}
                            style={styles.buttonStyle}
                            onPress={() => navigateHandler()}
                        />
                    </View>

                    {inputValue.length > 0 && (
                        <View style={styles.resultContainer}>
                            {!isSelected && filterdEng.length > 0 && renderItem({ data: filterdEng, lang: 'en' })}

                            {!isSelected && filterdMM.length > 0 && renderItem({ data: filterdMM, lang: 'mm' })}
                        </View>
                    )}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Search;
