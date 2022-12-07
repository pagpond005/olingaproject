import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from 'react';
import { colors } from "../resorce/color";
import { width } from "../resorce/normalize";
import { launchImageLibrary } from 'react-native-image-picker';

export const PhotoTemplate = ({ item }) => {
    const [picture, setPicture] = useState([])

    const openGallerry = async () => {
        const result = await launchImageLibrary();
        if (picture.length > 4) {
            setPicture([result.assets[0].uri, ...picture].filter((e, index) => index < 5))
        }
        else {
            setPicture([result.assets[0].uri, ...picture])
        }
    }

    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.styleText}>{item.text}</Text>
            {!!item.compulsory && <Text style={{ ...styles.styleText, color: colors.blue }}>{'*Required*'}</Text>}
        </View>

        <TouchableOpacity onPress={() => openGallerry()} ><Text>Open Gallerry</Text></TouchableOpacity>

        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={picture}
            renderItem={({ item }) => <Image source={{ uri: item }} style={styles.img} />}
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
    headerContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    img: {
        width: 100,
        height: 100,
        margin: 10
    }
})