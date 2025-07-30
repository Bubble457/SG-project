import '../css/Main.css';

const Start = ({ page }) => {
  return (
    <a href={`/page/${page}`} className="start">
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
    </a>
  );
};

export default Start;