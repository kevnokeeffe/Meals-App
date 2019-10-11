import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View styles={styles.mealRow}>
                    <Text>{itemData.item.title}</Text>
                </View>
                <View styles={styles.mealRow}></View>
            </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StylesSheet.create({
mealItem:{
    height:200,
    width:'100%',
    backgroundColor:'#ccc'
},
mealRow:{
    flexDirection:'row'
}
});

export default MealItem;