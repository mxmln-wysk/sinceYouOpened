import {ParentComponent} from "solid-js/types/server/rendering";

const TitleSection:ParentComponent = (props) => {
  return(
		<section class="container-fluid">
			{props.children}
			<button class="scrollDown" disabled={true}>
				<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80">
					<polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
				</svg>
			</button>
		</section>
	)
}

export default TitleSection;