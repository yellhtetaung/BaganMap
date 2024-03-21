import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { TextInput } from 'components';
import { colors } from 'components';
import styles from './styles';

interface SearchProps {
    route: any;
    navigation: any;
}

const Search: React.FC<SearchProps> = () => {
    const [inputValue, setInputValue] = useState({
        start: '',
        end: '',
    });

    return (
        <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput
                    label={'From'}
                    value={inputValue.start}
                    onChangeText={text => setInputValue(prevState => ({ ...prevState, start: text }))}
                    placeholder={'Where are you heading from?'}
                    placeholderTextColor={colors.white}
                />

                <TextInput
                    label={'to'}
                    value={inputValue.end}
                    onChangeText={text => setInputValue(prevState => ({ ...prevState, end: text }))}
                    placeholder={'Where are you going to?'}
                    placeholderTextColor={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Search;
