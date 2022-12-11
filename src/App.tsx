import type { Component } from 'solid-js';

import { lazy } from "solid-js";
import Home from "./pages/home";
import {Routes, Route} from "@solidjs/router";
import Nav from "./components/nav";
import {useTime} from "./context";
import TimeBar from "./components/TimeBar";
import Header from "./components/Header";
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const App: Component = () => {
  // @ts-ignore
  const [Time, {updateTime}] = useTime();
  const startTime = new Date().getTime();
  window.setInterval(() => {
    const currentTime = new Date().getTime();
      updateTime((currentTime - startTime)/1000);
  },250)
  return (
      <div >
        <Header />
        <main style={{
          margin: "100px 0 0 0",
          padding:0
        }}>
        <Nav />
          <Routes>
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
            <Route path="/about" element={About} />
          </Routes>
        </main>
        <TimeBar currentTime={Time()} />
      </div>
  )
};

export default App;
