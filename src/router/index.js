// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FolderList from '../screens/folderScreen';
import TemplatesList from '../screens/templatesListScreen';
import TemplatesDetails from '../screens/templatesDetailsScreen';

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Folder" component={FolderList} />
                <Stack.Screen name="List" component={TemplatesList} />
                <Stack.Screen name="Detail" component={TemplatesDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;