import '../css/Main.css';

const ImgBox2 = ({ img, width='100%', height='100%' }) => {
    return (
        <div className='imgbox1'>
            <img
            src={img.src}
            style={{
                width: width,
                height: height,
                objectFit: 'cover'
            }}
            />
        </div>
    );
};

export default ImgBox2;