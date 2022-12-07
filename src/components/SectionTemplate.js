import { FlatList, StyleSheet, Text, View } from "react-native"
import React from 'react';
import { colors } from "../resorce/color";
import { width } from "../resorce/normalize";
import { handleTemplate } from "../resorce/function";

export const SectionTemplate = ({ item }) => {
    const renderItem = ({ item }) => {
        return (
            handleTemplate(item)
        )
    }

    return <View style={styles.container}>
        <Text>{item.name}</Text>

        {item.children.length > 0 &&
            <FlatList
                data={item.children}
                renderItem={renderItem}
            />}
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