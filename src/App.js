import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './Contents/mainPage'
import Header from './Header/header'
import { isMobile, isBrowser } from 'react-device-detect';
import Login from './Contents/login'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Footer/footer'
import Header1280 from './Header/header1280';
import Community from './Categoty/community';
import Market from './Categoty/market';
import News from './Categoty/news';
import Product from './Categoty/product';
import Solution from './Categoty/solution';
import Study from './Categoty/study';
import Support from './Categoty/support';
import SignUp from './Contents/signUp'
import Info from './Contents/info'

function App({props}) {
  const [login, setLogin]=useState();
  const [size, setSize] = useState();

  function reSize() {
    if(window.innerWidth <=1280){
      setSize(true);
    }
    else{
      setSize(false);
    }
  }

  function headerSet(){
      // 페이지 사이즈를 바꿧을때
    if (size !== undefined) {
      if (size === true) {
        return <>
          <Header1280 login={login}/>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/Login">
            <Login setLogin={setLogin}/>
          </Route>
          <Route exact path="/Community">
            <Community />
          </Route>
          <Route exact path="/Market">
            <Market />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/Product">
            <Product />
          </Route>
          <Route exact path="/Solution">
            <Solution />
          </Route>
          <Route exact path="/Study">
            <Study />
          </Route>
          <Route exact path="/Support">
            <Support />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Info">
            <Info setLogin={setLogin}/>
          </Route>
        </>
      }
      else {
        return <>
          <Header login={login}/>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/Login">
            <Login setLogin={setLogin}/>
          </Route>
          <Route exact path="/Community">
            <Community />
          </Route>
          <Route exact path="/Market">
            <Market />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/Product">
            <Product />
          </Route>
          <Route exact path="/Solution">
            <Solution />
          </Route>
          <Route exact path="/Study">
            <Study />
          </Route>
          <Route exact path="/Support">
            <Support />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Info">
            <Info setLogin={setLogin}/>
          </Route>
        </>
      }
    }
    // 처음 페이지를 켰을때
    else {
      if (window.innerWidth <= 1280) {
        return <>
        <Header1280 login={login}/>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/Login">
            <Login setLogin={setLogin}/>
          </Route>
          <Route exact path="/Community">
            <Community />
          </Route>
          <Route exact path="/Market">
            <Market />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/Product">
            <Product />
          </Route>
          <Route exact path="/Solution">
            <Solution />
          </Route>
          <Route exact path="/Study">
            <Study />
          </Route>
          <Route exact path="/Support">
            <Support />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Info">
            <Info setLogin={setLogin}/>
          </Route>
        </>
      }
      else {
        return <>
        <Header login={login}/>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/Login">
            <Login setLogin={setLogin}/>
          </Route>
          <Route exact path="/Community">
            <Community />
          </Route>
          <Route exact path="/Market">
            <Market />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/Product">
            <Product />
          </Route>
          <Route exact path="/Solution">
            <Solution />
          </Route>
          <Route exact path="/Study">
            <Study />
          </Route>
          <Route exact path="/Support">
            <Support />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Info">
            <Info setLogin={setLogin}/>
          </Route>
        </>
      }
    }
  }

  useEffect(() => {     // 사이즈가 바뀔때마다 사이즈를 찾는부분
    window.addEventListener('resize', reSize)
    return () => { window.removeEventListener('resize', reSize); }

  }, [reSize]);

  return (
    <div className="App" >
          <BrowserRouter>
            {headerSet()}
            {/* <Header size={size}/> */}
          {/* <Footer /> */}
          </BrowserRouter>
    </div>
  );
}

export default App;