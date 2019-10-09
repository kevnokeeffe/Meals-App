import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CategoriesMealsScreen = props => {
    return (<View style={styles.screen}>
        <Text>The Categories Meals Screen!</Text>
        <Button title='Go to Details' onPress={() => { props.navigation.navigate({ routeName: 'MealScreen' }) }}></Button>
        <Button title='Go Back' onPress={()=>{
            props.navigation.goBack();
        }}></Button>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;