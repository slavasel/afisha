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
	let marker = { position: result.coords, key: result._id, defaultAnimation: 2 };
	return marker;
}

class MiniMap extends React.Component {
	constructor() {
		super();

		this.state = {
			markers: []
		};

		this.handleMapLoad = this.handleMapLoad.bind(this);
		this.handleMapClick = this.handleMapClick.bind(this);
		this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.results.length;
	}

	componentDidUpdate() {
		if (!this.state.markers.length) {
			let newMarkers = [];
			this.props.results.map((result) => {
				newMarkers.push(transformResultToMarker(result));
			});
			this.setState({markers: newMarkers});
			this.fitBounds(newMarkers);
		}
	}

	fitBounds(newMarkers) {
		const bounds = new google.maps.LatLngBounds();
		newMarkers.map((marker) => {
			bounds.extend(marker.position);
		});
		console.log(this.state.markers);
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
						<div style={{ height: `500px`, width: '250px' }} />
					}
					mapElement={
						<div style={{ height: `500px`, width: '250px' }} />
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