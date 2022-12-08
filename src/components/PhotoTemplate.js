import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from 'react';
import { colors } from "../resorce/color";
import { width } from "../resorce/normalize";
import { launchImageLibrary } from 'react-native-image-picker';
import { image } from "../resorce/image";
import { size } from "../resorce/size";

export const PhotoTemplate = ({ item }) => {
    const [picture, setPicture] = useState([])

    const openGallerry = async () => {
        const result = await launchImageLibrary();
        setPicture([result.assets[0].uri, ...picture])
    }

    const renderClose = (delIndex) => {
        return (
            <TouchableOpacity onPress={() => setPicture(picture.filter((e, index) => index != delIndex))} style={styles.closeContainer}>
                <Text style={styles.textClose}>X</Text>
            </TouchableOpacity>
        )
    }
    const renderAttachImg = ({ item, index }) => {
        return (
            <View style={styles.containerRenderImg}>
                <Image source={{ uri: item }} style={styles.img} />
                {renderClose(index)}
            </View>
        )
    }

    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.styleText}>{item.text}</Text>
            {!!item.compulsory && <Text style={{ ...styles.styleText, color: colors.blue }}>{'*Required*'}</Text>}
        </View>

        {picture.length < 5 && <TouchableOpacity style={styles.cameraContainer} onPress={() => openGallerry()}>
            <Image style={styles.cameraImg} source={image.camera} />
            <Text>Select Photo</Text>
        </TouchableOpacity>}

        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={picture}
            renderItem={renderAttachImg}
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
    },
    cameraImg: {
        width: 50,
        height: 50
    },
    cameraContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 30
    },
    styleText: {
        fontWeight: '400',
        fontSize: size.big16
    },
    closeContainer: {
        width: 20,
        height: 20,
        borderRadius: 20,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textClose: {
        color: colors.white
    },
    containerRenderImg: {
        marginTop: 10
    }
})