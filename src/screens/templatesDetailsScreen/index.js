import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { RadioTemplate } from '../../components/RadioTemplate';
import { colors } from '../../resorce/color';
import { handleTemplate } from '../../resorce/function';

const TemplatesDetails = ({ route }) => {
    const [mainRadio, setMainRadio] = useState(null)
    const { children } = route.params

    const renderItem = ({ item }) => {
        return handleTemplate(item)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={children}
                renderItem={renderItem}
            />
        </View>
    );
}

export default TemplatesDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionStyle: {
        backgroundColor: colors.white,
        marginTop: 10
    },
    booleanStyle: {
        backgroundColor: colors.white,
        marginTop: 10
    }
})