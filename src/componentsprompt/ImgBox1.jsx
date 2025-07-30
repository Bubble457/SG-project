import '../css/Main.css';

const ImgBox1 = ({ img, x, y, width, height }) => {
    return (
        <div className='imgbox1' style={{
            top: y,
            left: x,
            width: width,
            height: height
        }}>
            <img
            src={img.src}
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