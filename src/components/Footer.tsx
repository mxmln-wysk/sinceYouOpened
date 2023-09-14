import {useLocation, useNavigate} from "@solidjs/router";
import NAV_ITEMS from "../data/navItems";
import top from "../helper/top";
const Footer = () => {
	const scrollTop = (path:string) => {
		navigate(path)
		const page = NAV_ITEMS.indexOf(path.slice(1));
		console.log(page)
		setTimeout(() => {
			const element = document.querySelector(".pageContainer"+page);
			console.log( 'page in Footer changes',element)
			element && element.scrollIntoView({behavior:'smooth'});
		},10)
	}
	const navigate = useNavigate();
	const location = useLocation();

	return(
		<section class="container-fluid">
			<footer>
				<div class="container">
					<div class="row">
						<div class="col">
							<h2>Navigation</h2>
							<ul>
								<li>
									<h3>
										<a onClick={() => scrollTop('/')} >Home</a>
									</h3>
								</li>
								<li>
									<h3>
										<a onClick={() => scrollTop('/environment')}>Environment</a>
									</h3>
								</li>
								<li>
									<h3>
										<a onClick={() => scrollTop('/death-and-life')}>Death and Life</a>
									</h3>
								</li>
								<li>
									<h3>
										<a onClick={() => scrollTop('/contact')}>Contact</a>
									</h3>
								</li>
								<li>
									<h3>
										<a onClick={() => scrollTop('/about')} >About</a>
									</h3>
								</li>
							</ul>
						</div>
						<div class="col">
							<h3>
								<li>
									<a onClick={() => top()}>
										To the Top
									</a>
								</li>
							</h3>
						</div>
					</div>
				</div>
			</footer>
		</section>
	)
}

export default Footer;