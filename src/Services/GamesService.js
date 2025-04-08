import axios from "axios";
import { API_URL } from "../Config/url";

const getAllGames = () => {
    return axios.get(API_URL+"games")
}

export default {
    getAllGames
}