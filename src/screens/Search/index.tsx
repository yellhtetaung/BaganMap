import React, { useMemo, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import { TextInput, colors, Card, CardHeader, CardTitle, Button } from 'components';

import styles from './styles';

import data from 'libs/data';

import { SearchProps, RenderItemsProps } from './types';
import { InfoData } from 'types/types';
import { useDataContext } from 'context';

const Search: React.FC<SearchProps> = ({ navigation }) => {
    const [inputValue, setInputValue] = useState({
        start: '',
        end: '',
    });
    const [isSelected, setIsSelected] = useState({
        start: false,
        end: false,
    });

    const { foundResult, setFoundResult } = useDataContext();

    const filterdEngStart = useMemo(
        () => data.Tbl_BaganMapInfoData.filter(value => value.PagodaEngName.includes(inputValue.start)),
        [inputValue.start],
    );

    const filterdMMStart = useMemo(
        () => data.Tbl_BaganMapInfoData.filter(value => value.PagodaMmName.includes(inputValue.start)),
        [inputValue.start],
    );

    const filterdEngEnd = useMemo(
        () => data.Tbl_BaganMapInfoData.filter(value => value.PagodaEngName.includes(inputValue.end)),
        [inputValue.end],
    );

    const filterdMMEnd = useMemo(
        () => data.Tbl_BaganMapInfoData.filter(value => value.PagodaMmName.includes(inputValue.end)),
        [inputValue.end],
    );

    const onChangeHandler = (value: string, key: string) => {
        setIsSelected(prevState => ({ ...prevState, [key]: false }));
        setInputValue(prevState => ({ ...prevState, [key]: value }));
        setFoundResult({ ...foundResult, [key]: undefined });
    };

    const selectHandler = (value: string, selectData: InfoData, key: string) => {
        setInputValue(prevState => ({ ...prevState, [key]: value }));
        setFoundResult({ ...foundResult, [key]: selectData });
        setIsSelected(prevState => ({ ...prevState, [key]: true }));
    };

    const navigateHandler = () => {
        navigation.navigate('Drawer', { data: foundResult });
    };

    const renderItem = ({ data: renderData, lang, key }: RenderItemsProps) => (
        <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>
            <View style={styles.resultContainer}>
                {renderData.map(pagoda => (
                    <Card
                        key={pagoda.Id}
                        onPress={() => {
                            if (lang === 'en') {
                                selectHandler(pagoda.PagodaEngName, pagoda, key);
                            } else {
                                selectHandler(pagoda.PagodaMmName, pagoda, key);
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
                        label={'From'}
                        value={inputValue.start}
                        onChangeText={text => onChangeHandler(text, 'start')}
                        placeholder={'Where are you heading from?'}
                        placeholderTextColor={colors.white}
                    />

                    <TextInput
                        label={'To'}
                        value={inputValue.end}
                        onChangeText={text => onChangeHandler(text, 'end')}
                        placeholder={'Where are you going to?'}
                        placeholderTextColor={colors.white}
                    />

                    <View style={styles.buttonContainer}>
                        <Button
                            label={'Search'}
                            labelStyle={styles.buttonLableStyle}
                            style={styles.buttonStyle}
                            onPress={() => navigateHandler()}
                            disabled={foundResult?.start && foundResult?.end ? false : true}
                        />
                    </View>

                    <View style={styles.innerContainer}>
                        {!isSelected.start &&
                            filterdEngStart.length > 0 &&
                            inputValue.start &&
                            renderItem({ data: filterdEngStart, lang: 'en', key: 'start' })}

                        {!isSelected.start &&
                            filterdMMStart.length > 0 &&
                            inputValue.start &&
                            renderItem({ data: filterdMMStart, lang: 'mm', key: 'start' })}

                        {!isSelected.end &&
                            filterdEngEnd.length > 0 &&
                            inputValue.end &&
                            renderItem({ data: filterdEngEnd, lang: 'en', key: 'end' })}

                        {!isSelected.end &&
                            filterdMMEnd.length > 0 &&
                            inputValue.end &&
                            renderItem({ data: filterdMMEnd, lang: 'mm', key: 'end' })}
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Search;
