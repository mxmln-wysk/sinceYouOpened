import { createSignal } from "solid-js";
import { useLang } from "../langContext";

const LangSwitch = () => {
    // @ts-ignore
    const [lang, { updateLang }] = useLang();
    const [open, setOpen] = createSignal<boolean>(false)
    const handleLangChange = (lang: string) => {
        if (!open()) {
            setOpen(true);
        }
        else {
            updateLang(lang);
            setOpen(false);
        }
    }


    return (
        <div class="langSwitchContainer">
            <ul class={open() ? "open langSwitch" : "langSwitch"}>
                <li onClick={() => handleLangChange('de')} class={lang() === "de" ? "active" : ''}>🇩🇪</li>
                <li onClick={() => handleLangChange('en')} class={lang() === "en" ? "active" : ''}>🇬🇧</li>
            </ul>
        </div>
    )
}

export default LangSwitch;
