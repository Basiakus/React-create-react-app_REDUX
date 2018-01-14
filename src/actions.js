import uuid from 'uuid';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

//kreatory akcji
export function addComment(text) { // kreator akcji dodawania komentarza
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

export function removeComment(id) { // kreator akcji usuwania komentarza
	return {
		type: REMOVE_COMMENT,
		id
	};
}

export function editComment(id, text) { // kreator funkcji edycji
	return {
		type: EDIT_COMMENT,
		text,
		id
	};
}

export function thumbUpComment(votes, idComment) { //kreator funkcji +1
	return {
		type: THUMB_UP_COMMENT,
		votes,
		id: idComment
	};
}

export function thumbDownComment(votes, idComment) { //kreator funkcji -1
	return {
		type: THUMB_DOWN_COMMENT,
		votes,
		id: idComment
	};
}
