import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { BsPinFill } from 'react-icons/bs';
import { MdDateRange, MdOutlinePlace } from 'react-icons/md';

const SearchTrip = () => {
	const [month, setMonth] = useState('');
	const [travelType, setTravelType] = useState('');

	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: 200,
				width: 200,
			},
		},
	};
	const handleMonthChange = (event) => {
		setMonth(event.target.value);
	};

	const handleTypeChange = (event) => {
		setTravelType(event.target.value);
	};

	return (
		<div className="absolute bottom-20 md:bottom-0 translate-y-1/2 bg-transparent w-full">
			<div className="w-3/4 mx-auto">
				<form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_180px] items-center bg-white rounded-sm" action="">
					<div className="py-5 flex items-center gap-2 px-5">
						<MdOutlinePlace className="w-6 h-6 color-dark-gray" />
						<input className="outline-none color-dark-gray" type="text" id="placeName" name="placeName" placeholder="Where to?" />
					</div>
					<FormControl fullWidth className="relative">
						<Select
							style={{ color: '#848484' }}
							className="pl-10"
							displayEmpty
							value={month}
							onChange={handleMonthChange}
							MenuProps={MenuProps}
							inputProps={{ IconComponent: () => null }}
							renderValue={(selected) => {
								if (selected.length === 0) {
									return <span className="color-dark-gray typography-body">Month</span>;
								}
								return selected;
							}}>
							<MenuItem disabled value="">
								<em>Month</em>
							</MenuItem>
							{monthNames.map((name) => (
								<MenuItem
									key={name}
									value={name}
									style={{ color: '#848484' }}>
									{name}
								</MenuItem>
							))}
						</Select>
						<MdDateRange className="absolute color-dark-gray w-5 h-5 -translate-y-1/2 -translate-x-1/2 top-1/2 left-8" />
					</FormControl>
					<FormControl fullWidth className="relative">
						<Select
							style={{ color: '#848484' }}
							className="pl-10"
							displayEmpty
							value={travelType}
							onChange={handleTypeChange}
							MenuProps={MenuProps}
							inputProps={{ IconComponent: () => null }}
							renderValue={(selected) => {
								if (selected.length === 0) {
									return <span className="color-dark-gray typography-body">Travel Type</span>;
								}
								return selected;
							}}>

							<MenuItem disabled value="">
								<em>Travel Type</em>
							</MenuItem>
							{travelTypes.map((name) => (
								<MenuItem
									key={name}
									value={name}
									style={{ color: '#848484' }}>
									{name}
								</MenuItem>
							))}
						</Select>
						<BsPinFill className="absolute color-dark-gray w-5 h-5 -translate-y-1/2 -translate-x-1/2 top-1/2 left-8" />
					</FormControl>
					<input className="w-full py-7 bg-color-main text-white outline-none cursor-pointer rounded-sm font-medium text-base" type="submit" value="Find Now" disabled />
				</form>
			</div>
		</div>
	);
};

export default SearchTrip;

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const travelTypes = ["Latest", "Popular", "Any"]
