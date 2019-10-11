import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoriesMealsScreen = props => {
    const renderMealItem = itemData => {
        return (<View><Text>{itemData.item.title}</Text></View>);
    };
    const catId = props.navigation.getParam('categoryId');

    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (<View style={styles.screen}>
        <FlatList
            data={displayedMeals}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}>
        </FlatList>
    </View>
    );
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    //console.log(navigationData);

    return {
        headerTitle: selectedCategory.title
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