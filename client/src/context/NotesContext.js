import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer.js';

const reducer = (state, action) => {
    switch (action.type) {
        case 'get_notes':
            return action.payload;
        case 'edit_note':
            return state.map(note => {
                return note.id === action.payload.id
                ? action.payload
                : note;
            });
        case 'delete_note':
            return state.filter(note => note.id !== action.payload);
        default:
            return state;
    }
};

const getNotes = dispatch => async () => {
    const response = await jsonServer.get('/notes');
    dispatch({type: 'get_notes', payload: response.data});
};

const addNote = () => async (title, content, callback) => {
    await jsonServer.post('/notes', {title, content});
    if (callback) {
        callback();
    }   
};

const editNote = dispatch => async (id, title, content, callback) => {
    await jsonServer.put(`/notes/${id}`, {title, content});
    dispatch({type: 'edit_note', payload: {id, title, content}});
    if (callback) {
        callback();
    } 
};

const deleteNote = dispatch => async id => {
    await jsonServer.delete(`/notes/${id}`);
    dispatch({type: 'delete_note', payload: id});
};

export const {Context, Provider} = createDataContext(reducer, {addNote, editNote, deleteNote, getNotes}, []);