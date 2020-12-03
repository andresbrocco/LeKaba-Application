export default interface IPlace {
	id: number;
	name: string;
	city_id: string;
	activity_ids: number|string;
	address: string;
	association_ids: string;
	avg_rating: number;
	equipment_ids: number|string;
	images: string;
	latitude: number;
	longitude: number;
	nb_ratings: number;
	owner_type: string;
	phone_number?: string|number;
	schedule_openings: string;
	website?: string;
}

