import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

import {Context} from '../context/NotesContext';

const IndexScreen = ({navigation}) => {
    const {state: notes, deleteNote} = useContext(Context);

    // in case there are no notes
    if (!notes.length) {
        return (
            <View>
                <ImageBackground 
                    source={require('../../assets/bg.jpg')}
                    style={styles.imageBackground}/>
                <View style={styles.overly}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Create')} 
                        style={styles.headerOuter}>
                        <Text style={styles.header}>let's take some notes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    // in case there are notes
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={note => note.id.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Show', {id: item.id})} 
                            style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity 
                                onPress={() => deleteNote(item.id)} 
                                style={styles.deleteIcon}>
                                <AntDesign name="delete" size={25}/>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <AntDesign name="pluscircleo" size={35} style={styles.plusIcon}/>
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: 'rgb(248, 0, 98)',
        },
        headerTintColor: 'white'
    };
};

const styles = StyleSheet.create({
    imageBackground: {
        height: '100%'
    },
    overly: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(248, 0, 98, 0.7)',
        alignItems: 'center'
    },
    headerOuter: {
        top: '35%', 
        borderWidth: 7,
        borderColor: 'white', 
        padding: 7
    },
    header: {
        borderWidth: 3,
        borderColor: 'white',
        color: 'white',
        fontSize: 26,
        textAlign: 'center',
        padding: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(248, 0, 98, 0.1)',
        borderRadius: 5,
        marginVertical: 7,
        marginHorizontal: 10,
        paddingLeft: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        flexShrink: 1,
        paddingVertical: 5
    },
    deleteIcon: {
        padding: 10
    },
    plusIcon: {
        color: 'white',
        marginRight: 15
    }
});

export default IndexScreen;