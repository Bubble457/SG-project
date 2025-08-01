import './Main.css';

const ImgBox1 = ({ img, x, y, width, height }) => {
    return (
        <div className='c2-imgbox1' style={{
            top: y,
            left: x,
            width: width,
            height: height
        }}>
            <img
            src={img}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
            />
        </div>
    );
};

export default ImgBox1;