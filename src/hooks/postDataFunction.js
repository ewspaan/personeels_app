import axios from "axios";

async function postDataFunction(url, data ) {

    const token = localStorage.getItem('token');
    const urlPost = `http://localhost:8080/api/${url}`;

    try {
        const result = await axios.post(urlPost,
            data, {headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }}
        )
        if (result.status === 200){
            return result;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}
export default postDataFunction;
