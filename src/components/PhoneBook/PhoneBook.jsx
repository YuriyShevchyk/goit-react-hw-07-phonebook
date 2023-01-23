import FormAddContacts from './Form/Form';
import PhoneBookList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './PhoneBook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getFilteredContacts, getState } from 'redux/ItemSelector';
import { getFilter } from 'redux/filterSlice';
import { useEffect } from 'react';

export default function PhoneBook() {
  const contacts = useSelector(getFilteredContacts);
  const { isLoading, error } = useSelector(getState);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className="block">
        <h1>PhoneBook</h1>
        <FormAddContacts />
      </div>
      <div className="block">
        <h2>Contacts</h2>
        <Filter filter={filter} />
        {!isLoading && contacts.length > 0 && (
          <PhoneBookList items={contacts} />
        )}
        {isLoading && <p>...loading</p>}
        {error && <p>oops, something went wrong</p>}
      </div>
    </Container>
  );
}