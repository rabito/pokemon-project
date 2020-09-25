import {put, call, takeLatest} from 'redux-saga/effects';

import { START_GET_POKEMONS } from '../actions/pokemons';
import { SUCCESS_GET_POKEMONS } from '../actions/pokemons';
import apiCall from '../api';

function* getPokemons({payload}) {
    try {
        const result = yield call(apiCall, 'GET', 'https://pokeapi.co/api/v2/pokemon')
        console.log(result);
        yield put({tupe:SUCCESS_GET_POKEMONS, result});
    } catch (err) {
        
    }
}

export default function* pokemons() {
    yield takeLatest(START_GET_POKEMONS, getPokemons);
}