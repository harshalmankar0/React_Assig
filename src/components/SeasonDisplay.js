const seasonConfig = {
  winter: {
    text: "Burr, It's chilly",
    iconName: "snowflake"
  },
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth);
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`} />
    </div>
  );
}
export default SeasonDisplay;
