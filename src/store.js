import { createStore } from 'redux';
import reducer from './reducer.js';
const store = createStore(reducer);

store.subscribe(() => console.log('zmiana w stanie')); //nasłuchiwanie na zmiany w stanie aplikacji

var unsubscibe = store.subscribe(() => console.log('zmiana w stanie'));
unsubscribe(); // wyłączenie nasłuchiwania na stan aplikacji

store.subscribe(() => console.log(store.getState()));// zwracanie stanu aplikacji

// pseudokod wykorzystuje tworzenie elementów, które renderują stan aplikacji
store.subscribe(() => {
    const comments = store.getState().comments;
    ReactDOM.render(<CommentsList comments={comments} />)
});
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));