import { useState, useEffect, useCallback, useRef } from 'react';
import Wrapper from 'components/general/Wrapper/Wrapper';
import Input from 'components/general/Input/Input';

const SearchForm = ({ allHouses, handleIsLoading, handleSetShownHouses }) => {
  const [houseTitleQuery, setHouseTitleQuery] = useState('');
  const [lastHouseTitleQuery, setLastHouseTitleQuery] = useState('');
  const inputValue = useRef(null);

  const handleInputChange = e => setHouseTitleQuery(e.target.value);

  const handleSubmitForm = e => {
    e.preventDefault();
    setHouseTitleQuery(inputValue.current.value);
    setLastHouseTitleQuery(inputValue.current.value);
    updateShownHouses();
  };

  const updateShownHouses = useCallback(() => {
    setLastHouseTitleQuery(inputValue.current.value)
    handleIsLoading(true);
    const shownHouses = allHouses.filter(house => house.title.toLowerCase().includes(inputValue.current.value.toLowerCase()));
    handleSetShownHouses(shownHouses);
  }, [allHouses, handleSetShownHouses, handleIsLoading]);

  useEffect(() => {
    const searchBookTimeout = setTimeout(() => {
      if (
        houseTitleQuery.length >= 3 &&
        houseTitleQuery === inputValue.current.value &&
        houseTitleQuery !== lastHouseTitleQuery
      ) updateShownHouses();

      if (!houseTitleQuery.length) {
        handleSetShownHouses(allHouses);
      }
    }, 1000);

    return () => clearTimeout(searchBookTimeout);
  }, [allHouses, houseTitleQuery, lastHouseTitleQuery, inputValue, updateShownHouses, handleSetShownHouses]);

  return (
    <Wrapper>
      <form className='search-form' onSubmit={handleSubmitForm}>
        <label htmlFor='filter' className='search-form__label'>Filter</label>
        <Input inputValue={houseTitleQuery} handleChange={handleInputChange} ref={inputValue} />
      </form>
    </Wrapper>
  )
};

export default SearchForm;