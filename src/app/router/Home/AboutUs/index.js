import React from 'react';

class AboutUs extends React.Component {

	state = {
		
	};

	render () {
		return (
            <section id="about">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        <h2 className="h1">About CityLife </h2>
                        <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto"></div>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-lg-5 text-center wow animated fadeInLeft">
                        <img className="wow fadeInLeft" src="https://placeimg.com/572/722/tech" alt=""/>
                    </div>

                    <div className="col-lg-6 ml-auto wow animated fadeInRight">
                        <p className="mb-5">
                        The cost-of-living index, attributed to Russian economist A. A. Konüs, is a theoretical price index that measures the relative cost of living over time (or regions). The COF index has been widely used to show the difference in living between cities and is the basis for this application.
                        </p>
                        <h4 className="mb-3">Cost Of Living Data</h4>
                        <p className="mb-5">
                        The  2019 cost of living indices were obtained from the largest database of user contributed data about cities and countries worldwide Numbeo

Further data with regards to income/ living costs were obtained through Teleport's  Public API's and cross referenced with up to date currency conversions from the  Open Exchange Rates  API.
                        </p>
                        
                        </div> 
                    </div> 
                </div>
            </section>
		)
	}
}

export default AboutUs;