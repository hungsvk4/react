import './Herosection.css'
const HeroSection=()=>{
    return(
        <div className="hero-container">
            <h1>Saintmartine</h1>
            <p>Let’s start your journey with us, your dream will come true</p>
            <button>Discover Now</button>
            <div className="bax row">
                <div className="col c-12 m-6 l-3 sss">
                    <input type="text" placeholder='Start'/>
                </div>
                <div className="col c-12 m-6 l-3 sss">
                    <input type='search'placeholder='Destination' />
                </div>
                <div className="col c-12 m-6 l-3 sss">
                    <input type="date"/>
                </div>
                <div className="col c-12 m-6 l-3 sss">
                     <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection