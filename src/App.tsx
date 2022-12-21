import type { Component } from 'solid-js';
import {createEffect, createSignal, lazy, onMount} from "solid-js";
import {useTime} from "./context";

import Home from "./pages/home";
import TimeBar from "./components/TimeBar";
import Header from "./components/Header";
import Environment from "./pages/environment";
import {useLocation} from "@solidjs/router";
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));

const navItems = ["", "environment", "contact", "about"]
const App: Component = () => {
  const location = useLocation();

  onMount(() => {
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
  }

  createEffect(() => {
    setTimeout(() => {

    },100)
  })

  createEffect(() => {
    console.log(page(), 'page changes', page() * window.innerWidth)
    main.scrollTo({
      left:page() * window.innerWidth,
      top: 0,
      behavior: "smooth"
    })
  })
  const handleScroll = () => {
    const position = main.scrollLeft;

    if(position/window.innerWidth % 1 == 0){
      setTimeout(() => {
        console.log('scroll', main.scrollLeft, position)
        if (main.scrollLeft !== position) return
        setPage(position/window.innerWidth)
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
            <Home time={page() == 0 ? Time() : 0} />
            <Environment time={page() == 1 ? Time() : 0} />
            <Contact/>
            <About />
          </div>
        </main>
        <div class="pageBTN" onClick={() => scrollTest(page() -1)}>
          prev
        </div>
        <div class="pageBTN next"  onClick={() => scrollTest(page() + 1)} >
          next
        </div>
        <TimeBar currentTime={Time()} />
      </div>
  )
};

export default App;
