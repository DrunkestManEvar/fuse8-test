import house1 from 'images/house-1.jpg';
import house2 from 'images/house-2.jpg';
import house3 from 'images/house-3.jpg';
import house4 from 'images/house-4.jpg';
import house5 from 'images/house-5.jpg';
import house6 from 'images/house-6.jpg';

const HouseListItem = ({ title, address, price, type }) => {
  const pickAnImage = () => {
    const images = [house1, house2, house3, house4, house5, house6];
    const pickedImage = images[Math.floor(Math.random() * images.length)];
    return pickedImage;
  }

  const getTypeToDisplay = () => {
    const charIndexToSplitBy = type === 'IndependentLiving' ? type.indexOf('L') : type.indexOf('A');
    const charToSplitBy = type[charIndexToSplitBy];
    let typeToDisplay = type.split(type[charIndexToSplitBy]).join(` ${charToSplitBy.toLowerCase()}`);

    if (type === 'SupportAvailable') {
      typeToDisplay = `Restaurant & ${typeToDisplay}`
    }

    return typeToDisplay;
  }

  const typeToDisplay = getTypeToDisplay();

  const getPriceToDisplay = () => {
    const numOfThousands = price / 1000;
    const priceToDisplay = `${numOfThousands},000`;
    return priceToDisplay;
  }

 const priceToDisplay = getPriceToDisplay()

  return (
    <article className='house-list-item'>
      <a className='house-list-item__link' href='#'>
        <div className='house-list-item__img'>
          <img src={pickAnImage()} alt={title} />
          <div className={`house-list-item__type house-list-item__type--${type === 'IndependentLiving' ? 'aqua' : 'orange'}`}>{typeToDisplay}</div>
        </div>
        <div className='house-list-item__info'>
          <h3 className='house-list-item__title'>{title}</h3>
          <p className='house-list-item__address'>{address}</p>
          <p className='house-list-item__price-info'>New Properties for Sale from <span className='house-list-item__price'>£{priceToDisplay}</span></p>
          <p className='house-list-item__ownership-options'>Shared Ownership Available</p>
        </div>
      </a>
    </article>
  )
};

export default HouseListItem;