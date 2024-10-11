import {useAppDispatch, useAppSelector} from '../../hooks';
import {setAge, setName, setSurname} from '../../store/userSlice.ts';

import {ChangeEvent} from 'react';

export const UserForm = () => {
  const {name, surname, age} = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleChangeSurname = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSurname(e.target.value));
  };

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(Number(e.target.value)));
  };

  return (
    <form className="Form">
      <label htmlFor="name">Имя</label>
      <input id="name" type="text" value={name} onChange={handleChangeName} />

      <label htmlFor="surname">Фамилия</label>
      <input id="surname" type="text" value={surname} onChange={handleChangeSurname} />

      <label htmlFor="age">Возраст</label>
      <input id="age" type="number" value={age ?? 0} onChange={handleChangeAge} />

      <button type="submit">Отправить</button>
    </form>
  );
};
