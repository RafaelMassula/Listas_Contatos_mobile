import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { CapitalizeFirstLetter } from '../util';

const PeopleItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { title, first, last } = people.name;
    return (
        <TouchableOpacity onPress={() => {
            navigateToPeopleDetail({ people });
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
                <Text style={styles.lineText}>
                    {`${
                        CapitalizeFirstLetter(title)
                        }  ${
                        CapitalizeFirstLetter(first)
                        } ${
                        CapitalizeFirstLetter(last)}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#519e96',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 25
    }
});

export default PeopleItem;