// import "@/styles/globals.css";
import Myintro from "./MyIntro";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Myintro/>
      <Component {...pageProps}/>
    </>
  )
  
}
