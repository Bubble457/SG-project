import './Main.css';
import { Link } from 'react-router-dom';

const Start = ({ page }) => {
  return (
    <Link to={`/${page}`} className="c2-start">
      <span
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 5,
          marginBottom: 5,
          fontSize: 30
        }}
      >
        เริ่ม
      </span>
    </Link>
  );
};

export default Start;