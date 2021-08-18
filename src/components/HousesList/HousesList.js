import Wrapper from 'components/general/Wrapper/Wrapper';
import HousesListItem from 'components/HousesListItem/HousesListItem';
import Spinner from 'components/general/Spinner/Spinner';
import Button from 'components/general/Button/Button';

const HousesList = ({ shownHouses, isLoading }) => {
  let content;

  if (isLoading) content = <Spinner />

  if (!shownHouses.length && !isLoading) {
    content = <p>Oops... No houses have been found :( Please try changing search parameters.</p>
  }

  if (shownHouses && shownHouses.length) {
    content = (
      <>
        <ul className='houses-list'>
          {shownHouses.map(({ id, title, address, price, type }) => <HousesListItem key={`house-${id}`} title={title} address={address} price={price} type={type} />)}
        </ul>
        <Button text='See more' type='see-more' />
      </>)
  }

  return (
    <Wrapper>
      {content}
    </Wrapper>
  )
};

export default HousesList;