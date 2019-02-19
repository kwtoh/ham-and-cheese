import React, { Component } from 'react';
import './AppLeft.css'

class AppLeft extends Component {

	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
		this.leftRef = React.createRef();
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
		console.log("left", this.dirY)
		const computedDeltaY = this.dirY + deltaY;
		this.leftRef.current.style.transform = `translateY(${computedDeltaY}px)`;		
		this.dirY = computedDeltaY;
	};

	render() {
		return (
			<div className="App-Left">
				<div className="Left-Feed" ref={this.leftRef}>
					<h1>HEL</h1>
				</div>
			</div>	
		);
	}

}

export default AppLeft;