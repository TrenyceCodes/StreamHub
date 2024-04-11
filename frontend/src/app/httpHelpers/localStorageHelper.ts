export function setLocalStorageItem(user: any) {
    localStorage.setItem(`${process.env.LOCAL_STORAGE_ITEM_NAME!}`, JSON.stringify(user));
}

