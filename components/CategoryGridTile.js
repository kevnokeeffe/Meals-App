import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Platform,TouchableNativeFeedback} from 'react-native';
//import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                style={styles.touchCmp}
                onPress={props.onSelect}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title}
                        numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'raleway-bold',
        fontSize: 20,
        textAlign: 'right'
    },
    touchCmp:{
        flex:1
    }
});

export default CategoryGridTile;
