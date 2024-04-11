export const registerFetch = async (text: any[]) => {
    const link = `http://localhost:3001/users/register`;
    const response = await fetch(link, {
        method: 'POST',
        body: JSON.stringify({
            text,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response.json());
}


export const fetchUpdateFunction = () => {

}

export const fetchDeleteFunction = () => {

}