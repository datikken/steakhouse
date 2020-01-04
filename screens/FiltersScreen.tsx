import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";

const FilterSwitch = props => {
    return (
            <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch
                    thumbColor={colors.white}
                    trackColor={{true: colors.accentColor}}
                    value={props.state}
                    onValueChange={props.onChange} />
            </View>
    );
}

const FiltersScreen = props => {
    const [isGlutenFree, setGlutenFree] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Filters</Text>
            <FilterSwitch
                label="Gluten free"
                state={isGlutenFree}
                onChange={val => setGlutenFree(val)} />
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    color="red"
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {console.log(navData.navigation.toggleDrawer())}} />
            </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'meat',
        color: 'red',
        fontSize: 40,
        marginBottom: 20
    },
    screen: {
        flex: 1,
        alignItems: 'flex-start',
        margin: 20
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    }
});

export default FiltersScreen;