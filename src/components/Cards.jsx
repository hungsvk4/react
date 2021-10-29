import './Cards.css'
import Card from './card'
export default function Cards(){
    return(
        <div className="grid wide container">
            <div className="row">
                <div className="col l-12 c-12 m12 top">
                    <h1>Top place to visit</h1>
                    <p>Waters make fish every without firmament saw had. Morning air subdue.<br/> Our. Air very one. Whales grass is fish whales winged.</p>
                </div>
            </div>
            <div className="row">
                <div className="col l-6 m-6 c-12">
                    <Card url='./img/1.jpg'/>
                </div>
                <div className="col l-6 m-6 c-12">
                    <Card url='./img/2.jpg'/>
                </div>
                <div className="col l-6 m-6 c-12">
                    <Card url='./img/3.jpg'/>
                </div>
                <div className="col l-6 m-6 c-12">
                    <Card url='./img/4.jpg'/>
                </div>
            </div>
            <div className="row">
                <div className="col l-12 m-12 c-12 q" style={{display:'flex'}}>
                    <button>Discover More</button>
                </div>
            </div>
        </div>
    )
}