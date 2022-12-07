import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../resorce/color';
import { keyExtractor } from '../../resorce/function';
import { width } from '../../resorce/normalize';
import { size } from '../../resorce/size';

const TemplatesList = ({ navigation, route }) => {
    const { template } = route.params


    const renderFolder = ({ item }) => {
        const { children } = item.children
        return <TouchableOpacity onPress={() => navigation.navigate('Detail', { template: children })} style={styles.listStyle}>
            <Text style={styles.listText}>{item.name}</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={keyExtractor}
                data={template}
                renderItem={renderFolder}
            />
        </View>
    );
}

export default TemplatesList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listText: {
        padding: 10,
        fontSize: size.header
    },
    listStyle: {
        width: width - 24,
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 12
    },
})