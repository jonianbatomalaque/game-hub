import axios from "axios";

export default axios.create(
    {
        baseURL:"https://api.rawg.io/api",
        params:{
            key:"dc7b1ebd46f24c7d9d4c7e5a7d1ae1c8"
        }
    }
)