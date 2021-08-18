import ChevronRight from 'svg/ChevronRight';

const Button = ({ text, type }) => {
  return (
    <button className={`button button--${type}`}>
      {text}
      {type === 'see-more' && <ChevronRight />}
    </button>
  );
};

export default Button;