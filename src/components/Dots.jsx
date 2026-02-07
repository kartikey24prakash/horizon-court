import './Dots.css'
const LevelRow = ({ label, value, count, total = 10 }) => {
  return (
    <div className="row">
      <span className="label">{label}</span>

      <div className="dots">
        {[...Array(total)].map((_, i) => (
          <span
            key={i}
            className={`dot ${i < value ? "active" : ""}`}
          ></span>
        ))}
      </div>

      <span className="count">{count}</span>
    </div>
  );
};

export default LevelRow;
