import {
  CONTACTS_FILTER_OUT,
  CONTACT_DELETE,
  CONTACT_ADD,
} from './contacts-types';
import { combineReducers } from 'redux';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = INITIAL_CONTACTS, { type, payload }) => {
  switch (type) {
    case CONTACT_ADD:
      const includedInContacts = state.find(item => item.name === payload.name);

      if (includedInContacts !== undefined) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }
      return [...state, payload];

    case CONTACT_DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CONTACTS_FILTER_OUT:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
