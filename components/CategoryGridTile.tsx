import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = ({onSelect, color, title}) => {
    return(
        <TouchableOpacity
            activeOpacity={0.1}
            style={styles.gridItem}
            onPress={onSelect}>
            <View style={{...styles.container, ...{backgroundColor: color}}}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        shadowOpacity: .26,
        shadowOffset: {width:0,height:2},
        borderRadius: 10,
        shadowRadius: 10,
        elevation: 3
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});
export default CategoryGridTile;