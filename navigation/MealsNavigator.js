import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeals: {
            screen: CategoriesMealsScreen
    },
    MealScreen: MealDetailScreen
});

export default createAppContainer(MealsNavigator);