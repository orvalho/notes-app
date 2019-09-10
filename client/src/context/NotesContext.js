import createDataContext from './createDataContext';

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_note':
            return [...state, {id: Math.floor(Math.random() * 9999), ...action.payload}];
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
    
const addNote = dispatch => (title, content, callback) => {
    dispatch({type: 'add_note', payload: {title, content}});
    if (callback) {
        callback();
    }   
};

const editNote = dispatch => (id, title, content, callback) => {
    dispatch({type: 'edit_note', payload: {id, title, content}});
    if (callback) {
        callback();
    } 
};

const deleteNote = dispatch => id => {
    dispatch({type: 'delete_note', payload: id});
};

export const {Context, Provider} = createDataContext(reducer, {addNote, editNote, deleteNote}, []);