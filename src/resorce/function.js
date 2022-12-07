import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { RadioTemplate } from '../components/RadioTemplate';
import { colors } from '../../resorce/color';
import { SectionTemplate } from '../components/SectionTemplate';
import { BooleanTemplate } from '../components/BooleanTemplate';
import { TextinputTemplate } from '../components/TextinputTemplate';
import { PhotoTemplate } from '../components/PhotoTemplate';

export const keyExtractor = (item, index) => {
    return item + index
}

export const handleTemplate = (item) => {
    if (item.type === 'question') {
        switch (item.question_type) {
            case 'radio': {
                let radio_props = []
                item.question_options.forEach(e => radio_props.push({ label: e.label, value: e.label }))
                return (
                    <View>
                        <RadioTemplate item={item} radio_props={radio_props} />
                    </View>
                )
            }
            case 'boolean': {
                return (
                    <View>
                        <BooleanTemplate item={item} />
                    </View>
                )
            }
            case 'input_text': {
                return (
                    <View>
                        <TextinputTemplate item={item} />
                    </View>
                )
            }
            case 'image': {
                return (
                    <View>
                        <PhotoTemplate item={item} />
                    </View>
                )
            }
            default: {
                return <Text>asdasdas</Text>
            }
        }
    }

    else if (item.type === 'section') {
        return <View>
            <SectionTemplate item={item} />
        </View>
    }

    return <Text>asdasdas</Text>
}
