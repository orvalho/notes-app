import React, {useContext} from 'react';

import Form from '../components/Form';
import {Context} from '../context/NotesContext';

const CreateScreen = ({navigation}) => {
    const {addNote} = useContext(Context);

    return <Form onSubmit={(title, content) => addNote(title, content, () => navigation.navigate('Index'))}/>;
};

CreateScreen.navigationOptions = () => {
    return {
        title: 'Create note',
        headerStyle: {
            backgroundColor: 'rgb(248, 0, 98)'
        },
        headerTintColor: 'white'
    };
};

export default CreateScreen;