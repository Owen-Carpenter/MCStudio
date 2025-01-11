import '../styles/HomeSchedule.css';
import HoursCard from './HoursCard';

function HomeSchedule(){
    return(<>
        <section className="schedule-container">
            <div className="hours-slide">
                <HoursCard 
                    day="SUN"
                    hours="CLOSED"
                />
                <HoursCard 
                    day="MON"
                    hours="6AM - 8PM"
                />
                <HoursCard 
                    day="TUE"
                    hours="6AM - 8PM"
                />
                <HoursCard 
                    day="WED"
                    hours="6AM - 8PM"
                />
                <HoursCard 
                    day="THU"
                    hours="6AM - 8PM"
                />
                <HoursCard 
                    day="FRI"
                    hours="6AM - 3PM"
                />
                <HoursCard 
                    day="SAT"
                    hours="6AM - 2PM"
                />
            </div>
            <div className="hours-slide">
                <HoursCard 
                    day="SUN"
                    hours="CLOSED"
                />
                <HoursCard 
                    day="MON"
                    hours="6AM - 8PM"
                />
                <HoursCard 
                    day="TUE"
                    hours="6AM - 8PM"
                />
                <HoursCard 
                    day="WED"
                    hours="6AM - 8PM"
                />
                <HoursCard 
                    day="THU"
                    hours="6AM - 8PM"
                />
                <HoursCard 
                    day="FRI"
                    hours="6AM - 3PM"
                />
                <HoursCard 
                    day="SAT"
                    hours="6AM - 2PM"
                />
            </div>
        </section>
    </>);
}

export default HomeSchedule;