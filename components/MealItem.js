import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                        <Text style={styles.title}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration} minutes</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        minWidth: '90%',
        backgroundColor: '#ccc',
        //paddingVertical: 10,
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    title:{
        fontFamily:'raleway-bold',
        fontSize:22,
        color:'white'

    }

});

export default MealItem;