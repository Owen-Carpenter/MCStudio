import '../styles/HomeGallery.css';

function HomeGallery(){

    const spans = Array.from({ length: 15 }, (_, i) => (
        <span key={i} style={{ "--i": Math.floor(Math.random() * 15) + 1 } as React.CSSProperties}></span>
    ));
    
    return(<>
        <section className="gallery-container">
            <div className="bubbles">
                {spans}
                {spans}
                {spans}
            </div>
            <div className="gallery-text">
                <h1>Gallery</h1>
            </div>
            <div className="gallery-content">

            </div>
            <button className="gallery-btn">
                View Gallery
            </button>
        </section>
    </>);
}
export default HomeGallery;