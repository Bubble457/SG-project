import './Main.css';
import { Link } from 'react-router-dom';

const Next = ({ page, style={} }) => {
  return (
    <Link to={`/${page}`} style={style} className="c2-next">
      <span
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 5,
          marginBottom: 5,
          fontSize: 30
        }}
      >
        ต่อไป &gt;&gt;
      </span>
    </Link>
  );
}

export default Next;