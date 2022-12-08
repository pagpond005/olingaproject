import React from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { EmptyFooter } from '../../components/Footer';
import { colors } from '../../resorce/color';
import { handleTemplate } from '../../resorce/function';

const TemplatesDetails = ({ route }) => {
    const { children } = route.params

    const renderItem = ({ item }) => {
        return handleTemplate(item)
    }

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={100}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <FlatList
                data={children}
                renderItem={renderItem}
                ListFooterComponent={<EmptyFooter />}
            />
        </KeyboardAvoidingView>
    );
}

export default TemplatesDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionStyle: {
        backgroundColor: colors.white,
        marginTop: 10
    },
    booleanStyle: {
        backgroundColor: colors.white,
        marginTop: 10
    }
})