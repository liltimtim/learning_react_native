import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
// libraries assigned to special key
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});