import './Main.css';
import bulb from '../assets2/Icon/bookbulb.png'

const Label3 = ({ text }) => {
  return (
    <div className='c2-label3'>
      <p style={{
        fontSize: 29,
        marginTop: 'auto',
        marginBottom: 'auto'
      }}
      >
        {text}
      </p>
      <img 
        src={bulb}
        style={{
          width: 50,
          height: 50,
          padding: 10
        }}
      />
    </div>
  );
};

export default Label3;