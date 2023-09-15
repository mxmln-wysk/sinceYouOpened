import { useLang } from "../langContext";
import LangSwitch from "./LangSwitch";

const Header = () => {
   // @ts-ignore
   const [lang, {updateLang}] = useLang();
	
	return(
		<header class="header container-fluid">
			<div class="row">
				<div class="col text-center h1">
					Since you opened ...
				</div>
				<LangSwitch />
			</div>
		</header>
	)
}

export default Header;
