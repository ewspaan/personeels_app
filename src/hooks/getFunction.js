import axios from "axios";

async function getFunction(url) {

        const token = localStorage.getItem('token');
        const urlGet = `http://localhost:8080/api/${url}`;
        const config = {headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                    }
                            }
        try {
            const result = await axios.get(
                urlGet,
                config
                );
            console.log("getFunction-->  ", result)
            return result.data;
        } catch (e) {
            console.error(e.message);
            return false;
        }
}

export default getFunction;
