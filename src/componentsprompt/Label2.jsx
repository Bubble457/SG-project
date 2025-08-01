import './Main.css';

const Label2 = ({ text, bg='#fff', color='black' }) => {
  return (
    <div className='c2-label2' style={{backgroundColor:bg, color:color}}>
      <p style={{
        fontSize: 33,
        fontWeight: 'bold'
      }}
      >
        {text}
      </p>
    </div>
  );
};

export default Label2;