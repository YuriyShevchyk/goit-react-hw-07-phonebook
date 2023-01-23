import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://63ce785bfdfe2764c72318f5.mockapi.io/contacts/contact-list',
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instanceContacts.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instanceContacts.delete(`/${id}`);
  return data;
};