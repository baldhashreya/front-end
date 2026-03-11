import "./Main.css";
export default function Main() {
    return (
        <div className="main-session">
            <div className="main-session__content">
                <div className="current-weather">
                    <div className="current-weather__header">
                        <h2>city-name, country-name </h2>
                        <p>Monday, 20 May 2024</p>
                    </div>
                    <div className="current-weather__icon">
                        <img src="../assets/sunny.png" alt="Sunny" />
                    </div>
                    <div className="current-weather__details">
                        <p className="temperature">25°C</p>
                        <p className="description">Sunny</p>    
                    </div>
                </div>
            </div>
            <div className="main-session__sidebar">

            </div>
        </div>
    );
}