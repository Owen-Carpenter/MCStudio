import "../styles/ServiceCard.css"

function ServiceCard({ title, one, two, three, imageURL }: { title: string; one: string; two: string; three: string; imageURL: string }) {
    return(<>
        <div className="service-card-wrapper">
            <div className="service-card">
                <div className="icon-container">
                    <img src={imageURL} alt="" className="icon" />
                </div>
                <h1 className="title">{title}</h1>
                <ul className="list">
                    <li>{one}</li>
                    <li>{two}</li>
                    <li>{three}</li>
                </ul>
            </div>
            <div className="btn-container">
                    <button className="book-btn">
                        BOOK NOW
                    </button>
            </div>
        </div>
    </>)
}

export default ServiceCard;