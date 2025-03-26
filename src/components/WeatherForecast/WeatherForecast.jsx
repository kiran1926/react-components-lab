import "./WeatherForecast.css";

const WeatherForecast = (props) => {
    const { day, img, imgAlt, conditions, time } = props;
    return (
        <div className="card">
            <h2 className="day-header">{day}</h2>
            <img className="img-class" src={img} alt={imgAlt} aria-label={`weather icon for ${conditions}`}></img>
            <p className="conditions"> Conditions: {conditions} </p>
            <p>Time: {time}</p>
        </div>
    );
};

export default WeatherForecast;