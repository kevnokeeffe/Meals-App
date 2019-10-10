import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
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
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}></FlatList>
    );
};

CategoriesScreen.navigationOptions = {
    //headerTitle: 'Meal Categories',
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