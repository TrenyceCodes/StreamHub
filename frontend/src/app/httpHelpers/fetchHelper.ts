import { setCookieToken } from "./cookieHelper";
import { SERVER_URL } from "./serverLink";

export const fetchLoginPost= async (username: string, password: string) => {
    const link = `${SERVER_URL}/users/login`;
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
    
        if (!response.ok) {
            throw new Error("There was an error with login. Please try again");    
        }
        
        const responseData = await response.json();

        if (responseData.message == "Login successful") {
            setCookieToken(responseData.data);
        }

        console.log(responseData.message);
        return responseData.message;
    } catch (error) {
        console.error(error);
        throw new Error("There was an error: " + error);
    }
};

export const fetchRegisterPost = async (username: string, emailaddress: string, password: string) => {
    const link = `${SERVER_URL}/users/register`;
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, emailaddress, password}),
        });

        if (!response.ok) {
            throw new Error("There was an error with registration. Please try again");
        }

        const responseData = await response.json();
        console.log(responseData.message);
        return responseData.message;
    } catch (error) {
        console.log(error);
        throw new Error("There was an error: " + error); 
    }
}