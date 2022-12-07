import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from 'react';
import { handleTemplate } from "../resorce/function";
import { width } from "../resorce/normalize";
import { colors } from "../resorce/color";

export const BooleanTemplate = ({ item }) => {
    const [booleanValue, setValue] = useState('No')

    const renderItem = ({ item }) => {
        return (
            handleTemplate(item)
        )
    }

    let newChild = item.children.filter(e => e.condition === `is equal: [${booleanValue}]`)
    if (newChild.length > 0) {
        newChild = newChild[0].children
    }
    return <View style={styles.bigcontainer}>
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.styleText}>{item.text}</Text>
                {!!item.compulsory && <Text style={{ ...styles.styleText, color: colors.blue }}>{'*Required*'}</Text>}
            </View>

            <TouchableOpacity onPress={() => setValue('Yes')}><Text>yes</Text></TouchableOpacity>

            <TouchableOpacity onPress={() => setValue('No')}><Text>no</Text></TouchableOpacity>
        </View>

        {item.children.length > 0 &&
            <FlatList
                data={newChild}
                renderItem={renderItem}
            />}
    </View>
}

const styles = StyleSheet.create({
    bigcontainer: {
        width: width - 32,
        alignSelf: 'center',
    },
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