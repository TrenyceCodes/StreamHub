import axios from "axios";
import { SERVER_URL } from "./serverLink";
import { setLocalStorageItem } from "./localStorageHelper";

export const axiosRegisterPost = async (username: string, emailaddress: string, password: string) => {
    const link = `${SERVER_URL}/users/register`;
    const results = await axios.post(link, {
        username: username, 
        emailaddress: emailaddress, 
        password: password
    }).then((response) => {
        console.log(response.data.message);
        return response.data.message;
    }).catch((error) => {
        console.log(error);
        throw new Error("There was an error: ", error.message);        
    });

    return results;
}

export const axiosLoginPost = async (username: string, password: string) => {
    const link = `${SERVER_URL}/users/login`;
    const results = await axios.post(link, {
        username: username,
        password: password,
    }).then((response) => {
        if (response.data.message == "Login successful") {
            setLocalStorageItem(response.data);
        }
        console.log(response.data.message);
        return response.data.message;
    }).catch((error) => {   
        console.error(error); // Print the error message
        throw new Error("There was an error: " + error.message);
    })

    return results;
}

export const axiosUpdate = () => {

}

export const axiosDelete = () => {

}