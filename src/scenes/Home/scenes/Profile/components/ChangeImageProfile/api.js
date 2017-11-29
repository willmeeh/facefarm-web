import { fetchApi } from 'services/api';

const endPoints = {
	changeProfilePicture: '/users/me/changeProfilePicture',
};

export const changeProfilePicture = (image) => {
	var formData = new FormData();
	formData.append('image', image)

	return fetchApi(
		endPoints.changeProfilePicture,
		formData,
		'post',
		{}
	);
};


