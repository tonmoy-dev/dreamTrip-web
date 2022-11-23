import img1 from '../assets/images/holidays/holiday_1.jpg';
import img2 from '../assets/images/holidays/holiday_2.jpg';
import img3 from '../assets/images/holidays/holiday_3.jpg';
import img4 from '../assets/images/holidays/holiday_4.jpg';
import Place from './Place';

const places = [
	{
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img1,
		place_rating: 5,

	},
		{
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img2,
		place_rating: 5,

	},
		{
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img3,
		place_rating: 5,

	},
		{
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img4,
		place_rating: 5,

	},
	{
		place_name:'Spain',
		place_value: 900,
		place_thumbnail: img4,
		place_rating: 5,

	},
	{
		place_name:'Spain',
		place_value: 600,
		place_thumbnail: img3,
		place_rating: 5,

	},
	{
		place_name:'Spain',
		place_value: 1000,
		place_thumbnail: img2,
		place_rating: 5,

	},
	{
		place_name:'Spain',
		place_value: 1200,
		place_thumbnail: img1,
		place_rating: 5,

	}
]

const ChooseHoliday = () => {
	return (
		<div className="py-12 container mx-auto text-center">
			<div className="flex flex-col gap-4 w-1/2 mx-auto">
				<span className="subtitle text-xl">Choose Your</span>
				<p className="text-5xl font-semibold">Perfect Holiday</p>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula
					eget dolor. Aenean massa. Cum sociis the</p>
			</div>
			<div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{
					places.map((place, index) => (
						<Place key={index} place={place} />
					))
				}
			</div>
		</div>
	);
};


export default ChooseHoliday;