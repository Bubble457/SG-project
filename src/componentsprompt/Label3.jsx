import '../css/Main.css';

const bulb = {
  img_src: require('../asests2/Icon/bookbulb.png'),
  img_size: 50
};

const Label3 = ({ text }) => {
  return (
    <div className='label3'>
      <p style={{
        fontSize: 29
      }}
      >
        {text}
      </p>
      <img 
        src={bulb.img_src}
        style={{
          width: bulb.img_size,
          height: bulb.img_size,
          padding: 20
        }}
      />
    </div>
  );
};

export default Label3;