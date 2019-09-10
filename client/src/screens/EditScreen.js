import React, {useContext} from 'react';

import Form from '../components/Form';
import {Context} from '../context/NotesContext';

const EditScreen = ({navigation}) => {
    const {state: notes, editNote} = useContext(Context);
    const id = navigation.getParam('id');
    const note = notes.find(note => note.id === id);

    return (
        <Form 
            initialValues={{title: note.title, content: note.content}}
            onSubmit={(title, content) => editNote(id, title, content, () => navigation.pop())}/>
    );
};

EditScreen.navigationOptions = () => {
    return  {
        title: 'Edit note',
        headerStyle: {
            backgroundColor: 'rgb(248, 0, 98)'
        },
        headerTintColor: 'white'
    };
};

export default EditScreen;