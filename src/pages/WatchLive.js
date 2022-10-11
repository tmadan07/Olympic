import React, { Component } from 'react';
class GoLive extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (

			<div class="page-wrapper">

                <br></br>
                <br></br>
				<br></br>
                <br></br>
				<br></br>
                <br></br>

                <div class="col-md-12 text-center">
                <div class="embed-responsive embed-responsive-14by7">
               
                      
                    <h2><iframe width="1500" height="600" src="https://www.youtube.com/embed/F81hH5uP2M8"
						title="YouTube video player" frameborder="0"
			 			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe></h2>

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/F81hH5uP2M8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  
                </div>
                </div>

            </div>


		);
	}
}

export default GoLive;
