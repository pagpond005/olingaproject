import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TemplatesDetails = () => {
    return (
        <View style={styles.container}>
            <Text>Hello, I am your cat!</Text>
        </View>
    );
}

export default TemplatesDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})