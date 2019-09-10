import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const Form = ({initialValues, onSubmit}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <View style={styles.container}>
            <TextInput 
                value={title} 
                onChangeText={setTitle}
                placeholder="Enter title"
                style={styles.input}/>
            <TextInput 
                value={content} 
                onChangeText={setContent} 
                multiline={true}
                numberOfLines={4}
                placeholder="Enter content"
                style={styles.input}/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TouchableOpacity 
                onPress={() => {
                    if (!title.trim().length || !content.trim().length) {
                        setErrorMessage('Title and content are required fields.');
                    } else {
                        onSubmit(title.trim(), content.trim()); 
                    }
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
        </View>
    );
};

Form.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 30
    },
    input: {
        fontSize: 18,
        backgroundColor: 'rgba(248, 0, 98, 0.1)',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
        maxHeight: 120
    },
    errorMessage: {
        padding: 20, 
        color: 'red', 
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    button: {
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'rgb(248, 0, 98)',
        height: 60, 
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white', 
        fontSize: 20, 
        textAlign: 'center', 
        fontWeight: 'bold'
    }
});

export default Form;