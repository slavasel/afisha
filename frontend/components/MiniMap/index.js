import React from "react";
import Helmet from "react-helmet";

import {
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
	<GoogleMap
		ref={props.onMapLoad}
		defaultZoom={8}
		defaultCenter={{ lat: 50, lng: 30 }}
		onClick={props.onMapClick}
	    options={{scrollwheel: false}}
	>
		{props.markers.map(marker => (
			<Marker
				key={marker.key}
				{...marker}
				onRightClick={() => props.onMarkerRightClick(marker)}
			/>
		))}
	</GoogleMap>
));

const transformResultToMarker = (result) => {
	const commonMarkerImage = '../../../static/images/icon-green.png';
	const selectedMarkerImage = '../../../static/images/icon-pink.png';
	const image = {
		url: result.hovered ? selectedMarkerImage : commonMarkerImage,
		size: new google.maps.Size(40, 40),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 0)
	};

	let marker = {
		position: result.coords,
		key: result._id,
		defaultAnimation: 2,
		//label: handleLable(result.name),
		icon: image,
		hovered: false
	};
	return marker;
}

const handleLable = (text) => {
	return text.split('').splice(0, 1).join();
}

class MiniMap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			markers: [],
			hoveredElementId: false
		};

		this.handleMapLoad = this.handleMapLoad.bind(this);
		this.handleMapClick = this.handleMapClick.bind(this);
		this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	let hoverStateChanged = false;
	// 	Object.keys(nextProps.results).map(idx => {
	// 		let markerHoverState = _.result(_.find(nextState.markers, function(obj) {
	// 			return obj.key === idx;
	// 		}), 'hovered');
		//
		// 	if (markerHoverState != nextProps.results[idx].hovered) {
		// 		hoverStateChanged = nextProps.results[idx]._id;
		// 		return false;
		// 	}
		// });
		// this.state.hoveredElementId = hoverStateChanged;
		// //console.log(this.state.hoveredElementId);
		//
		// return Object.keys(nextProps.results).length !== nextState.markers.length || this.state.hoveredElementId;
	//}

	componentWillReceiveProps(nextProps) {
		// exit if no map rendered
		if (!this._mapComponent) {
			return false;
		}

		// create marker objects
		let newMarkers = [];
		Object.keys(nextProps.results).map((idx) => {
			newMarkers.push(transformResultToMarker(nextProps.results[idx]));
		});

		// fit bounds on initial load
		if (Object.keys(nextProps.results).length > this.state.markers.length) {
			this.fitBounds(newMarkers);
		}

		this.state.markers = newMarkers;
	}

	fitBounds(newMarkers) {
		const bounds = new google.maps.LatLngBounds();
		newMarkers.map(marker => {
			bounds.extend(marker.position);
		});
		this._mapComponent.fitBounds(bounds);
	}

	handleMapLoad(map) {
		this._mapComponent = map;
		if (map) {
			console.log('Map loaded. Zoom: ' + map.getZoom());
		}
	}

	/*
	 * This is called when you click on the map.
	 * Go and try click now.
	 */
	handleMapClick(event) {
		// const nextMarkers = [
		// 	...this.state.markers,
		// 	{
		// 		position: event.latLng,
		// 		defaultAnimation: 2,
		// 		key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
		// 	},
		// ];
		// this.setState({
		// 	markers: nextMarkers,
		// });
		//
		// if (nextMarkers.length === 3) {
		// 	this.props.toast(
		// 		`Right click on the marker to remove it`,
		// 		`Also check the code!`
		// 	);
		// }
	}

	handleMarkerRightClick(targetMarker) {
		/*
		 * All you modify is data, and the view is driven by data.
		 * This is so called data-driven-development. (And yes, it's now in
		 * web front end and even with google maps API.)
		 */
		// const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
		// this.setState({
		// 	markers: nextMarkers,
		// });
	}

	render() {
		return (
			<div style={{height: `100%`}}>
				<Helmet
					title="Getting Started"
				/>
				<GettingStartedGoogleMap
					containerElement={
						<div style={{ height: `500px`, width: '100%' }} />
					}
					mapElement={
						<div style={{ height: `500px`, width: '100%' }} />
					}
					onMapLoad={this.handleMapLoad}
					onMapClick={this.handleMapClick}
					markers={this.state.markers}
					onMarkerRightClick={this.handleMarkerRightClick}
				/>
			</div>
		);
	}
}

module.exports = MiniMap;