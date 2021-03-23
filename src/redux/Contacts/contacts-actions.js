import {
  CONTACTS_FILTER_OUT,
  CONTACT_DELETE,
  CONTACT_ADD,
} from './contacts-types';

const addContact = contact => ({
  type: CONTACT_ADD,
  payload: contact,
});

const deleteContact = id => ({
  type: CONTACT_DELETE,
  payload: id,
});

const filterOutContacts = value => ({
  type: CONTACTS_FILTER_OUT,
  payload: value,
});
export { addContact, deleteContact, filterOutContacts };
