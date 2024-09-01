import User from "../models/User"

// eslint-disable-next-line no-undef
const BASE_URL = `${URL_API}/user`

const URL_USER = id => `${BASE_URL}/${id}`

const get = (url, model) => fetch(url).then(res => res.json()).then(data => model(data.data))

export const getUserByUserId = id => get(URL_USER(id), data => new User(data))
