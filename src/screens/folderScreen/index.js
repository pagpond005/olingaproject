import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../resorce/color';
import { constant } from '../../resorce/constant';
import { keyExtractor } from '../../resorce/function';
import { width } from '../../resorce/normalize';
import { size } from '../../resorce/size';

const FolderList = ({ navigation }) => {
    const data = constant.template.data

    const renderFolder = ({ item }) => {
        const template = item.attributes.templates

        return <TouchableOpacity onPress={() => navigation.navigate('List', { template: template })} style={styles.folderStyle}>
            <Text style={styles.folderText}>{item.attributes.name}</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderFolder}
            />
        </View>
    );
}

export default FolderList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    folderStyle: {
        width: width - 24,
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 12
    },
    folderText: {
        padding: 10,
        fontSize: size.header
    }
})