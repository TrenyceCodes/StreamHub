import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

export async function setCookieToken(user: any) {
    //we want to encrypt user information
    await setCookie('user', JSON.stringify(user), { expires: 7});
}

export async function getCookieToken() {
    await getCookie('user');
}

export async function deleteCookieToken() {
    await removeCookie('user');
}