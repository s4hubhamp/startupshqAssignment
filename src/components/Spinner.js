import './Spinner.css';

const Spinner = () => {
  return (
    <div className='spinner'>
      <div className='lds-facebook'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
