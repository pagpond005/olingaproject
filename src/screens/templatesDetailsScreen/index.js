import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { colors } from '../../resorce/color';

const TemplatesDetails = ({ route }) => {
    const [mainRadio, setMainRadio] = useState(null)
    const { children } = route.params

    const renderItemChildren1 = ({ item }) => {
        if (item.type === 'section') {
            return <View style={styles.sectionStyle}>
                <Text>sectionnnnn</Text>
                {item.children.map((e) => {
                    return <View>
                        {e.question_type === 'boolean' &&
                            renderBoolean()
                        }

                        {e.question_type === 'radio' &&
                            renderRadio()
                        }
                    </View>
                })}
            </View>
        }
        else {
            if (item.question_type === 'boolean') {
                return <View>
                    {renderBoolean()}
                </View>
            }

            if (item.question_type === 'radio') {
                return <View>
                    <Text>radiooooo</Text>
                </View>
            }

            return <View>
                <Text>asdasd</Text>
            </View>
        }
    }

    const renderChildren1 = (item) => {
        let selectChildren = item.filter(e => e.condition === `is equal: [${mainRadio}]`)
        if (selectChildren.length > 0) {
            return <View>
                <FlatList
                    data={selectChildren[0].children}
                    renderItem={renderItemChildren1}
                />
            </View>
        }
    }

    const renderItem = ({ item }) => {
        if (item.question_type === 'radio') {
            const radioProps = []
            item.question_options.forEach(e => radioProps.push({ label: e.label, value: e.label }))
            return <View>
                {renderRadio(radioProps, item)}
                {item.children.length > 0 && renderChildren1(item.children)}
            </View>
        }
    }

    const renderRadio = (radio_props, item) => {
        return <View>
            <Text>{item.text}</Text>
            <RadioForm
                radio_props={radio_props}
                initial={null}
                formHorizontal={true}
                onPress={(value) => setMainRadio(value)}
            />
        </View>
    }

    const renderBoolean = () => {
        return <View style={styles.booleanStyle}>
            <Text>yesss</Text>

            <Text>nooooo</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={children}
                renderItem={renderItem}
            />
        </View>
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