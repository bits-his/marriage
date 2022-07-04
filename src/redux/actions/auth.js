import { API_URL } from "."
import { LOGIN } from "./types"

export function initUser (error=f=>f) {
    return dispatch => {
        let userId = localStorage.getItem('dating-site:user')

        if(userId) {
            fetch(`${API_URL}/api/get_user/${userId}`)
            .then(raw => raw.json())
            .then(data => {
                dispatch({type: LOGIN, payload: data.user[0] })
                // navigate("/home")
            })
            .catch(err => {
                console.log(err)
                localStorage.removeItem("dating-site:user")
                error()
            })
        }
    }
}