import s from '../Styles.module.css';
import { useContacts } from './Hooks/hooks';

export const Filter = () => {
  const { filter, setFilter } = useContacts();
  return (
    <div className={s.cont__container}>
      <h2 className={s.home__title}>Find contact by name</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Name of your friend"
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};
