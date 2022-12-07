import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useState } from 'react';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { width } from "../resorce/normalize";
import { colors } from "../resorce/color";
import { handleTemplate } from "../resorce/function";

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
                <Text style={styles.styleText}>{item.text}</Text>
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
        paddingBottom: 20
    }
})