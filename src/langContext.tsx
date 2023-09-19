import {createContext, createSignal, useContext} from "solid-js";
import { useSearchParams } from "@solidjs/router";
import { setLocalStorage } from "./helper/localStorage";
export const LangContext = createContext();

export function LangProvider(props:any) {

    const localStorageLang = localStorage.getItem('lang');
    const [lang, setLang] = createSignal<string>(localStorageLang ? localStorageLang : "en");
    const store = [
        lang,
        {
            updateLang(newLang:string) {
                setLang( () => newLang);
                setLocalStorage(newLang)
            },
        },
    ];

    return (
        <LangContext.Provider value={store}>
            {props.children}
        </LangContext.Provider>
    );
}

export function useLang() { return useContext(LangContext);}