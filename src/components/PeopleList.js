import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PeopleItem from './PeopleItem';

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    return (
        <FlatList
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (< PeopleItem
                people={item}
                navigateToPeopleDetail={onPressItem} />
            )} 
            keyExtractor={item => item.name.first} />
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#65C9BE'
    },

});

export default PeopleList;