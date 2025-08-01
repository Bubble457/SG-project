import './Main.css';

const Label1 = ({ title, hat, img }) => {
  return (
    <div className='c2-label1'>
      <div
        className='c2-hat1'
        style={{
          top: '-21%',
          right: '10%'
        }}
      >
        <p>{hat}</p>
      </div>
      <img 
        src={img}
        style={{
          width: 100,
          height: 100,
          verticalAlign: 'middle',
          margin: 20
        }}
      />
      <p style={{
        paddingLeft: 20,
        paddingRight: 80,
        fontWeight: 600,
        fontSize: 30
      }}
      >
        {title}
      </p>
    </div>
  );
};

export default Label1;