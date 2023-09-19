import LangSwitch from "./LangSwitch";

const Header = () => {
	
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
