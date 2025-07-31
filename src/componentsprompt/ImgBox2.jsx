import './Main.css';

const ImgBox2 = ({ img, width='100%', height='100%' }) => {
    return (
        <div className='c2-imgbox2'>
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