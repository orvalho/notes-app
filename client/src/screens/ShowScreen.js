import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

import {Context} from '../context/NotesContext';

const ShowScreen = ({navigation}) => {
    const {state: notes} = useContext(Context);
    const note = notes.find(note => note.id === navigation.getParam('id'));
    
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/bg.jpg')} 
                style={styles.imageBackground}/>
            <View style={styles.overly}/>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{note.title}</Text>
                <ScrollView>
                    <Text style={styles.content}>{note.content}</Text>
                </ScrollView>
            </View>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity 
                onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <AntDesign name="edit" size={35} style={styles.editIcon}/>
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: 'rgb(248, 0, 98)',
        },
        headerTintColor: 'white',
        title: 'Read note'
    };
};

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    imageBackground: {
        height: '100%'
    },
    overly: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(248, 0, 98, 0.7)',
        padding: 40
    },
    wrapper: {
        position: 'absolute',
        top: 20,
        backgroundColor: 'rgba(255,255 , 255, 0.85)',
        height: '93%',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5
    },
    title: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderColor: 'rgb(248, 0, 98)'
    },
    content: {
        fontSize: 17,
        padding: 10
    },
    editIcon: {
        color: 'white', 
        marginRight: 15
    }
});

export default ShowScreen;