import React, {useEffect} from 'react'
import './about.css'
function About() {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('aboutTab').classList.add('active');
    });
    return (
        <div>
            <div className="container">
                <div className="font-oswald headings" style={{ marginTop: "0%" }}> Welcome to <br />Mercado Escolar</div>
                <div style={{ marginLeft: "10%", paddingLeft: "30px;" }}>
                    <p>
                        No more wait times. No more hassle. Do your laundry at ease with Mercado Escolar.<br></br>
                        Your one-stop solution for getting your clothes washed, dried , ironed and delivered at your doorstep
                    </p>
                </div>
            </div>
            <div>
                <h1 className="side-Heading">About Mercado Escolar</h1>
                <div className="about-content">
                    <p>
                        Insta Wash is a start up Laudry Management Company with two branches one in Arlington, Texas and one in Dallas, Texas.
                        We are planning to expand our business to other states in the US.
                        <p>
                            The Main Philosophy of Mercado Escolar is to provide quality service to our customers. At Insta Wash we provide various services to our customers which will help them to do laundry at the comfort of their home. Look into our service page for more information regarding the service provided at Insta Wash.
                        </p>
                        <p>
                            The Equipement used at our Mercado Escolar are state of the art machine. This allows us to provide cutomers the best overall laundry service with customization for each and every item.
                        </p>
                        <b> Our Motto at Mercado Escolar : No task is too difficult, no request too demanding. We rise to the challenge, day by day and year after year. </b>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About