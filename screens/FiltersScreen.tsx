import React, { useState, useEffect, useCallback } from 'react';
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
                    trackColor={{true: colors.accentColor, false: ''}}
                    value={props.state}
                    onValueChange={props.onChange} />
            </View>
    );
}

const FiltersScreen = props => {
    //создает стейт
    const [isGlutenFree, setGlutenFree] = useState(false);
    //достаем обьект навигации и передаем в useEffect, для отслеживания иземнений только в обьекте navigation
    const { navigation } = props;

    //создает функцию, только при изменение определенного стэйта, переданного в зависимости
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree
        };

        console.log(appliedFilters);
    }, [isGlutenFree]);
    //вызывает функцию при изменении стэйта
    useEffect(() => {
        navigation.setParams({save: saveFilters})
    }, [
        saveFilters
    ]);

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
        headerRight:() =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                color="red"
                title="Save"
                iconName="ios-save"
                //navData.navigation.getParam('save') - указатель на функцию
                onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>,
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