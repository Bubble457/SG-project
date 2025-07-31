import './Main.css';
import back from "../assets2/Misc/back.png";
import { Link } from 'react-router-dom';

const Back = ({ page }) => {
return (
    <Link to={`/${page}`} className="c2-back">
    <img 
        src={back}
        alt="back.png"
        style={{
        width: 40,
        height: 40,
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
    </Link>
    );
};

export default Back;