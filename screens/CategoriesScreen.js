import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoriesMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}>
                <View>
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };


    console.log(props);
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}></FlatList>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;