import type { Component } from 'solid-js';
import {createEffect, createSignal, onMount} from "solid-js";
import {useTime} from "./context";

import Home from "./pages/home";
import TimeBar from "./components/TimeBar";
import Header from "./components/Header";
import Environment from "./pages/environment";
import {useLocation, useNavigate} from "@solidjs/router";
import Contact from "./pages/contact";
import About from "./pages/about";
import DeathAndLife from "./pages/death-and-life";

export const navItems = ["", "environment", "death-and-life", "contact", "about"]
const App: Component = () => {
  const location = useLocation();
  const navigate = useNavigate();

  onMount(() => {
    if (window.innerWidth < 1000){
      const innerHeight = window.innerHeight * 0.77;
      const root = document.querySelector(':root')
      root && root.style.setProperty('--pageHeight', innerHeight + "px");
    }

    setTimeout(() => {
      setPage(navItems.indexOf(location.pathname.slice(1)));
      console.log('navChanged',location.pathname )
    },500)
  })
  //time Logic
  // @ts-ignore
  const [Time, {updateTime}] = useTime();
  const startTime = new Date().getTime();
  window.setInterval(() => {
    const currentTime = new Date().getTime();
      updateTime((currentTime - startTime)/1000);
  },50)

  let main: HTMLElement;
  const [page, setPage] = createSignal<number>(0 );

  const scrollTest = (number:number) => {
    if (number < 0 && page() == 0) return
      setPage(number)
      navigate('/' + navItems[number])
  }

  createEffect(() => {
    setTimeout(() => {

    },100)
  })

  createEffect(() => {
    console.log(page(), 'page changes', page() * window.innerWidth, navItems.length)
    main.scrollTo({
      left:page() * window.innerWidth,
      top: 0,
      behavior: "smooth"
    })
  })
  const handleScroll = () => {
    const position = main.scrollLeft;
    if((position/window.innerWidth - Math.floor(position/window.innerWidth)) < 0.01){
      setTimeout(() => {
        console.log('scroll', main.scrollLeft, position)
        if (main.scrollLeft !== position) return
        setPage(Math.floor(position/window.innerWidth))
        console.log(main.scrollLeft / window.innerWidth, 'scroll')
      },100)
    }
  };

  createEffect(() => {
    main.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      main.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div >
        <Header />
        <main id={"main"} ref={main}>
          <div class={"mainContainer"}>
            <Home time={page() == 0 ? Time() : 0} page={0}/>
            <Environment time={page() == 1 ? Time() : 0} page={1}/>
            <DeathAndLife time={page() == 2 ? Time() : 0} page={2} />
            <Contact time={1} page={3}/>
            <About time={1} page={4}/>
          </div>
        </main>y
        <div class="pageBTN">
          <button class="arrow left" disabled={page() == 0}  onClick={() => scrollTest(page() -1)}>
            <svg width="60px" height="80px" viewBox="0 0 50 80">
              <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
            </svg>
          </button>
        </div>
        <div class="pageBTN next">
          <button class="arrow right" disabled={navItems.length - 1 == page()} onClick={() => scrollTest(page() + 1)} >
            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="80px" viewBox="0 0 50 80">
              <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
            </svg>
          </button>
        </div>
        <TimeBar currentTime={Time()} />
      </div>
  )
};

export default App;
