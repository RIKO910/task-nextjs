// utils/getTokenFromCookies.js
export const getTokenFromCookies = () => {
    if (typeof document !== 'undefined') {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; accessToken=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    return null;
};
