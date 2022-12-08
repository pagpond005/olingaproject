import { StyleSheet, View } from "react-native"
import React from 'react';
import { width } from "../resorce/normalize";

export const EmptyFooter = () => {
    return <View style={styles.footer}></View>
}

const styles = StyleSheet.create({
    footer: {
        height: 40,
        width: width
    }
})