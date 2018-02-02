// export class LibraryActions {
//     SELECT_LIBRARY = 'select_library';
//     static selectLibrary(libraryId) {
        
//     }
// }

export function selectLibrary(libraryId) {
    return {
        type: 'select_library',
        payload: libraryId
    };
}
