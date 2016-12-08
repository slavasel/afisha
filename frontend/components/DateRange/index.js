import 'rc-calendar/assets/index.css';
import React from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DatePicker from 'rc-calendar/lib/Picker';

import ruRu from 'rc-calendar/lib/locale/ru_Ru';

import moment from 'moment';
import 'moment/locale/ru';

const format = 'YYYY-MM-DD';

const fullFormat = 'YYYY-MM-DD dddd';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
now.locale('ru-ru').utcOffset(0);

const Picker = React.createClass({
	render() {
		const props = this.props;
		const { showValue } = props;
		const calendar = (
			<RangeCalendar
				type={this.props.type}
				locale={ruRu}
				defaultValue={now}
				format={format}
				onChange={props.onChange}
				disabledDate={props.disabledDate}
			/>);
		return (
			<DatePicker
				open={this.props.open}
				onOpenChange={this.props.onOpenChange}
				calendar={calendar}
				value={props.value}
			>
				{
					() => {
						return (
							<span>
                <input
	                placeholder={this.props.placeholder}
	                readOnly
	                value={showValue && showValue.format(fullFormat) || ''}
                />
                </span>
						);
					}
				}
			</DatePicker>);
	},
});

const DateRange = React.createClass({
	getInitialState() {
		return {
			startValue: null,
			endValue: null,
			startOpen: false,
			endOpen: false,
		};
	},

	onStartOpenChange(startOpen) {
		this.setState({
			startOpen,
		});
	},

	onEndOpenChange(endOpen) {
		this.setState({
			endOpen,
		});
	},

	onStartChange(value) {
		this.setState({
			startValue: value[0],
			startOpen: false,
			endOpen: true,
		});
	},

	onEndChange(value) {
		this.setState({
			endValue: value[1],
		});
	},

	disabledStartDate(endValue) {
		if (!endValue) {
			return false;
		}
		const startValue = this.state.startValue;
		if (!startValue) {
			return false;
		}
		return endValue.diff(startValue, 'days') < 0;
	},

	render() {
		const state = this.state;
		return (
			<div className="AppDatePicker">
				<p className="AppDatePicker-Input">
					<Picker
						onOpenChange={this.onStartOpenChange}
						type="start"
						showValue={state.startValue}
						open={this.state.startOpen}
						value={[state.startValue, state.endValue]}
						onChange={this.onStartChange}
					    placeholder="С даты"
					/>
				</p>

				<p className="AppDatePicker-Input">
					<Picker
						onOpenChange={this.onEndOpenChange}
						open={this.state.endOpen}
						type="end"
						showValue={state.endValue}
						disabledDate={this.disabledStartDate}
						value={[state.startValue, state.endValue]}
						onChange={this.onEndChange}
						placeholder="По дату"
					/>
				</p>
			</div>);
	},
});

module.exports = DateRange;