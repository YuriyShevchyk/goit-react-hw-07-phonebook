
import {DeleteBtn} from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';

export default function PhoneBookList({ items }) {
  const dispatch = useDispatch();
  const onRemoveContact = id => {
    const action = removeContact(id);
    dispatch(action);
  }

  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
        <DeleteBtn type="submit" onClick={() => onRemoveContact(id)}>
          Delete
        </DeleteBtn>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}

