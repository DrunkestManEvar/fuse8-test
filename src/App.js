import { useState, useEffect } from "react";
import { API_URL } from 'data';
import { capitalizeString } from 'utility';
import MainHeading from 'components/general/MainHeading/MainHeading';
import SearchForm from 'components/SearchForm/SearchForm';
import HousesList from 'components/HousesList/HousesList';

const App = () => {
  const [housesList, setHousesList] = useState([]);
  const [shownHouses, setShownHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      const fetchedHouses = data.map((house) => ({...house, title: capitalizeString(house.title), price: +house.price})).filter(house => house.type === 'IndependentLiving' || house.type === 'SupportAvailable');
      setHousesList(fetchedHouses);
      setShownHouses(fetchedHouses);
      return data;
    })()
  }, []);

  const handleSetShownHouses = (shownHouses) => {
    setIsLoading(false);
    setShownHouses(shownHouses)
  }

  return (
    <main className='main'>
      <MainHeading />
      <SearchForm allHouses={housesList} handleIsLoading={setIsLoading} handleSetShownHouses={handleSetShownHouses} />
      <HousesList shownHouses={shownHouses} isLoading={isLoading} />
    </main>
  );
}

export default App;
