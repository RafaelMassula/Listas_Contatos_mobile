//deixou ser utilizado -- novo Header
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*Stetefull*/
const Header = (props) =>
{
    return (
        <View style={style.conteiner}>
            <Text>Pessoas</Text>
        </View>
    )
};

/* styleSheet */
const style = StyleSheet.create({

    conteiner: {
        marginTop: 25,
        backgroundColor: '#34AD9F',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 50,
        color: '#FFF'
    }
});

export default Header;

