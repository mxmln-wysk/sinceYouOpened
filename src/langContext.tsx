import {createContext, createSignal, useContext} from "solid-js";
import { useSearchParams } from "@solidjs/router";
export const LangContext = createContext();

export function LangProvider(props:any) {
    const [searchParams, setSearchParams] = useSearchParams();

    const [lang, setLang] = createSignal<string>("en");
    const store = [
        lang,
        {
            updateLang(newLang:string) {
                setLang( () => newLang);
                setSearchParams( {lang:newLang});
            },
            updateLangParam() {
                setSearchParams( {lang:lang()});
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