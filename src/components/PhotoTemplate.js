import { FlatList, StyleSheet, Text, View } from "react-native"
import React from 'react';
import { colors } from "../resorce/color";
import { width } from "../resorce/normalize";
import { handleTemplate } from "../resorce/function";

export const PhotoTemplate = ({ item }) => {
    return <View style={styles.container}>
        <Text>{item.text}</Text>
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
})