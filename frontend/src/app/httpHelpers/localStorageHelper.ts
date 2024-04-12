export function setLocalStorageItem(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getLocalStorageIdItem(): string | null {
    // Retrieve the item from local storage
    const data = localStorage.getItem("user");

    if (data) {
        const parsedData = JSON.parse(data as string);
        const userId = parsedData.data.user.id || null;
        return userId;
    }

    return null;
}
