import './card.css'
export default function Card({url}){
    return(
        <div className="card">
            <div className="info">
                    <button>Travel</button>
                    <h1>Saintmartine Iceland</h1>
                    <p>Technaf, Bangladesh</p>
            </div>
            <div className="img-container">
                <img src={url} alt="" />
            </div>
        </div>
    )
}