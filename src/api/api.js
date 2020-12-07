import axios from 'axios'

export const Loginapi = () =>{
	return axios.post('/Login').then(res => res)
}
export const gkapi = () => {
	return axios.post('/gk').then(res => res)
}
export const Homeapi = () => {
	return axios.post('/List').then(res => res)
}
export const Per = () => {
	return axios.post('/Per').then(res => res)
}