import React, { useLayoutEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';

import { DetailsProps } from './types';
import data from 'libs/data';
import styles from './styles';

const { Tbl_BaganMapInfoDetailData: infoDetail, Tbl_BaganMapInfoData: baganMapInfo } = data;

const Details: React.FC<DetailsProps> = ({ route, navigation }) => {
    const { id } = route.params;

    const pagoda = baganMapInfo.find(bagan => bagan.Id === id);

    const findDetail = infoDetail.find(detail => detail.Id === pagoda?.Id);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: pagoda?.PagodaMmName,
        });
    }, [navigation, pagoda?.PagodaMmName]);

    if (findDetail?.Description === null) {
        return (
            <View style={styles.fullContainer}>
                <Text style={styles.title}>No Data</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.text}>{findDetail?.Description}</Text>
        </ScrollView>
    );
};

export default Details;
