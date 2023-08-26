import axios from "axios";
import { NINJA_KEY } from "../ignoreItems/apiKeys";



export const getSix = async () => {
    const config = {
        headers:{
          'X-Api-Key': NINJA_KEY
        },
        params: {
            max_distance_light_year: 50,
            offset: 6,
            min_distance_light_year: 4

        }
      };

    const URL = "https://api.api-ninjas.com/v1/stars";

    const res = await axios.get(URL, config);
    console.log("Fetching Stars...")
    const stars = res.data
        .filter(item=>item.distance_light_year>0)
        .filter(item=>item.spectral_class.length>0)
        .filter((item, idx)=> {
        return idx < 6
    })

    return stars;
}

export const getBySearch = async (maxLightyear=null, name=null, ) => {
    const config = {
        headers:{
          'X-Api-Key': NINJA_KEY
        },
        params: {
            max_distance_light_year: maxLightyear,
            name: name,
            min_distance_light_year: 4

        }
      };

    const URL = "https://api.api-ninjas.com/v1/stars";

    const res = await axios.get(URL, config);
    console.log("Fetching Stars...")
    const stars = res.data
        .filter(item=>item.distance_light_year>0)
        .filter(item=>item.spectral_class.length>0)
        .filter((item, idx)=> {
        return idx < 6
    })

    return stars;
}