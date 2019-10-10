import React from 'react';
import { Text, View, StyleSheet, Button,Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (<View style={styles.screen}>
        <Text>The Categories Meals Screen!</Text>
        <Text>{selectedCategory.title}</Text>
        <Button
            title='Go to Details'
            onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealScreen'
                })
            }}>

        </Button>
        <Button
            title='Go Back'
            onPress={() => {
                props.navigation.goBack();
            }}>

        </Button>
    </View>
    );
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    console.log(navigationData);

    return{
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;