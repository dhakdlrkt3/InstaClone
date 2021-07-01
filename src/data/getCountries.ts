import { IContry } from './IContry'

export const getCountries = () :Promise<IContry[]> => new Promise((resolve, reject)=> {
	fetch('https://restcountries.eu/rest/v2/all')
		.then((res) => res.json())
		.then((result: any[]) => {
			const countries = result.map((data: any) => {
				const { region, subregion, name, capital, population } = data
				return { region, subregion, name, capital, population } as IContry
			})
			resolve(countries)
		})
		.catch(reject)
})