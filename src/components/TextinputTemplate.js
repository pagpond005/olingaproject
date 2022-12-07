import { FlatList, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from 'react';
import { colors } from "../resorce/color";
import { width } from "../resorce/normalize";
import { handleTemplate } from "../resorce/function";

export const TextinputTemplate = ({ item }) => {
    const [text, onChangeText] = useState("");

    return <View style={styles.container}>
        <Text>{item.text}</Text>

        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="useless placeholder"
        />
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
    input: {
        height: 40,
        borderWidth: 1,
        marginTop: 10,
    },
})