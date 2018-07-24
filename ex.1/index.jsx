import React from 'react';
import ReactDom from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
    field: () => ({ value: 'Opa'})
});

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <h1>Teste</h1>
    </Provider>
    , document.getElementById('app')
);