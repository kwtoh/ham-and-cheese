import React, { Component } from 'react';
import './AppRight.css'

class AppRight extends Component {

	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
		this.rightRef = React.createRef();
		this.dirY = 0;
	}

	componentDidMount() {
		console.log('mounted');
		window.addEventListener('wheel', this.handleScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('wheel', this.handleScroll);
	};

	handleScroll(event) {
		const { deltaY } = event;
		console.log("right", this.dirY)
		const computedDeltaY = (this.dirY + deltaY) * -1;
		this.rightRef.current.style.transform = `translateY(${computedDeltaY}px)`;		
		this.dirY = this.dirY + deltaY;
	};

	render() {
		return (
			<div className="App-Right">
				<div className="Right-Feed" ref={this.rightRef}>
					<h1>LO.</h1>
				</div>
			</div>	
		);
	}

}

export default AppRight;