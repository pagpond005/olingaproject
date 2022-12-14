import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useState } from 'react';

import RadioForm from 'react-native-simple-radio-button';
import { width } from "../resorce/normalize";
import { colors } from "../resorce/color";
import { handleTemplate } from "../resorce/function";
import { size } from "../resorce/size";

export const RadioTemplate = ({ radio_props, item }) => {
    const [radioValue, setValue] = useState(null)

    const renderItem = ({ item }) => {
        return (
            handleTemplate(item)
        )
    }

    let newChild = item.children.filter(e => e.condition === `is equal: [${radioValue}]`)
    if (newChild.length > 0) {
        newChild = newChild[0].children
    }
    return (
        <View style={styles.bigcontainer}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.styleText}>{item.text}</Text>
                    {!!item.compulsory && <Text style={{ ...styles.styleText, color: colors.blue }}>{'*Required*'}</Text>}
                </View>

                <RadioForm
                    radio_props={radio_props}
                    initial={null}
                    onPress={(value) => setValue(value)}
                />

            </View>

            {item.children.length > 0 &&
                <FlatList
                    data={newChild}
                    renderItem={renderItem}
                />}

        </View>
    )
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
    styleText: {
        paddingBottom: 20,
        fontWeight: '400',
        fontSize: size.big16
    },
    headerContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    }
})