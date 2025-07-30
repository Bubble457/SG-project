import '../css/Main.css';

const Label1 = ({ title, hat, img }) => {
  return (
    <div className='label1'>
      <div
        className='hat1'
        style={{
          top: -46,
          left: 60+img.img_size
        }}
      >
        <p>{hat}</p>
      </div>
      <img 
        src={img.img_src}
        style={{
          width: img.img_size,
          height: img.img_size,
          verticalAlign: 'middle',
          padding: 40
        }}
      />
      <p style={{
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