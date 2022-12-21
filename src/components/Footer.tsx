import {A, useNavigate} from "@solidjs/router";
const navItems = ["", "environment", "contact", "about"]

const Footer = () => {
	const scrollTop = (path:string) => {
		navigate(path)
		const page = navItems.indexOf(path.slice(1));
		setTimeout(() => {
			const element = document.querySelector(".pageContainer"+page);
			console.log( 'page in Footer changes',element)
			element && element.scrollIntoView({behavior:'smooth'});
		},10)
	}
	const navigate = useNavigate();

	return(
		<section class="container-fluid">
			<footer>
				<div class="container">
					<div class="row row-cols-2">
						<div class="col">
							<ul>
								<li>
									<a onClick={() => scrollTop('/')} >Home</a>
								</li>
								<li>
									<a onClick={() => scrollTop('/environment')}>Environment</a>
								</li>
								<li>
									<a onClick={() => scrollTop('/contact')}>Contact</a>
								</li>
								<li>
									<a onClick={() => scrollTop('/about')} >About</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</section>
	)
}

export default Footer;