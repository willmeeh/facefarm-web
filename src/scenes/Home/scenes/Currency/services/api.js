import { fetchApi } from 'services/api';

const endPoints = {
	getCurrency: '/currency',
};


export const getCurrency = (base = {base: 'BRL'}) => {
  console.log('defaultCurrency', base)
	return fetchApi(endPoints.getCurrency, base, 'post', { "Content-Type": "application/json" })
	.then((response) => {
		console.log('response', response)
		return response;
	})
	.catch((error) => {
		console.log('error', error)
	});
};


// export const get = (defaultCurrency) => {
//   return fetch('http://localhost:4000/currency', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       'x-auth': sessionStorage.getItem('token')
//     },
//     body: JSON.stringify(defaultCurrency)

//   }).then(response => {
//     return response.json();

//   }).catch(error => {
//     return error;

//   });
// }

    