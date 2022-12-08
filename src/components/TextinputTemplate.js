import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from 'react';
import { colors } from "../resorce/color";
import { width } from "../resorce/normalize";
import { size } from "../resorce/size";

export const TextinputTemplate = ({ item }) => {
    const [text, onChangeText] = useState("");

    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.styleText}>{item.text}</Text>
            {!!item.compulsory && <Text style={{ ...styles.styleText, color: colors.blue }}>{'*Required*'}</Text>}
        </View>

        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="please provide the issues"
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
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    styleText: {
        fontWeight: '400',
        fontSize: size.big16
    },
})