import React from 'react';
import { View } from 'react-native';
import { RadioTemplate } from '../components/RadioTemplate';
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
                    <RadioTemplate item={item} radio_props={radio_props} />
                )
            }
            case 'boolean': {
                return (
                    <BooleanTemplate item={item} />
                )
            }
            case 'input_text': {
                return (
                    <TextinputTemplate item={item} />
                )
            }
            case 'image': {
                return (
                    <PhotoTemplate item={item} />
                )
            }
            default: {
                return <View></View>
            }
        }
    }

    else if (item.type === 'section') {
        return <View>
            <SectionTemplate item={item} />
        </View>
    }

    return <View></View>
}
