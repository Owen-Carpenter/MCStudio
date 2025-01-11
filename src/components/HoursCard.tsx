import '../styles/HoursCard.css'

function HoursCard({ day, hours}: { day: string; hours: string}){
    return(<>
        <div className="hours-card">
            <h1>{day}</h1>
            <h2>{hours}</h2>
        </div>
    </>);
}

export default HoursCard;