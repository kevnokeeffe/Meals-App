import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoriesMealsScreen = props => {
    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            image = {itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}

            onSelectMeal={() => { }}
        />
    };
    const catId = props.navigation.getParam('categoryId');

    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (<View style={styles.screen}>
        <FlatList
            data={displayedMeals}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
                style={{width:'100%'}}>
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
        alignItems: 'center',
        margin:5,
    }
});

export default CategoriesMealsScreen;