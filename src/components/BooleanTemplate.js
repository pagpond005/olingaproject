import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from 'react';
import { handleTemplate } from "../resorce/function";
import { width } from "../resorce/normalize";
import { colors } from "../resorce/color";
import { image } from "../resorce/image";

export const BooleanTemplate = ({ item }) => {
    const [booleanValue, setValue] = useState(null)

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

            <View style={styles.imgContainer}>
                <TouchableOpacity onPress={() => setValue('Yes')}>
                    <Image style={{ ...styles.imgStyle, tintColor: booleanValue === 'Yes' ? colors.blue : colors.black }} source={image.yes} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setValue('No')}>
                    <Image style={{ ...styles.imgStyle, tintColor: booleanValue === 'No' ? colors.blue : colors.black }} source={image.no} />
                </TouchableOpacity>
            </View>
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
    },
    imgStyle: {
        width: 40,
        height: 40,
    },
    imgContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    }
})