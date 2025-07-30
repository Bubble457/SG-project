import '../css/Main.css';

const img = {
    img_src: "../asests2/Misc/back.png",
    img_size: 40
};

const Back = ({ page }) => {
return (
    <a href={`/back/${page}`} className="back">
    <img 
        src={img.img_src}
        alt="back.png"
        style={{
        width: img.img_size,
        height: img.img_size,
        verticalAlign: 'middle'
        }}
    />
    <span 
        style={{
        margin: 8,
        fontSize: 20
        }}
    >
        ย้อนกลับ
    </span>
    </a>
    );
};

export default Back;