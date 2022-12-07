import { FlatList, StyleSheet, Text, View } from "react-native"
import React from 'react';
import { colors } from "../resorce/color";
import { width } from "../resorce/normalize";
import { handleTemplate } from "../resorce/function";

export const PhotoTemplate = ({ item }) => {
    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.styleText}>{item.text}</Text>
            {!!item.compulsory && <Text style={{ ...styles.styleText, color: colors.blue }}>{'*Required*'}</Text>}
        </View>
    </View>
}

const styles = StyleSheet.create({

    container: {
        width: width - 32,
        backgroundColor: colors.white,
        alignSelf: 'center',
        marginTop: 20,
        padding: 10
    },
    headerContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    }
})