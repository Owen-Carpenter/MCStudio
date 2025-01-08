import "../styles/ServiceCard.css"

function ServiceCard({ title, one, two, three, imageURL }: { title: string; one: string; two: string; three: string; imageURL: string }) {
    return(<>
        <div className="service-card">
            <img src={imageURL} alt="" className="icon" />
            <h1 className="title">{title}</h1>
            <ul className="list">
                <li>{one}</li>
                <li>{two}</li>
                <li>{three}</li>
            </ul>
        </div>
    </>)
}

export default ServiceCard;