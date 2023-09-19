

export const setLocalStorage = (lang:string) => {
    localStorage.setItem("lang", lang);
}

export const getLocalStorage = () => {
    return localStorage.getItem("lang");
}

export const clearLocalStorage = () => {
    localStorage.clear();
}