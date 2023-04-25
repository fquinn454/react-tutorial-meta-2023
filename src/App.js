import './App.css';
import avatar from "./images/avatar-logo.png"
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Btn from "./components/Btn";
import ModeToggler from './components/ModeToggler';
import Child from './components/Child'

function Logo(){
  const altText = "James Cameron's Avatar Logo";
  const userPic = <img src={avatar} alt={altText} />;
  return userPic;
}

const sale = {
  percentReduction:'85% off everything today',
  callToAction:"Don't miss out, buy now!"
}

function App(title) {
  return (
    <div>
      <Header name='Fiona' color='purple' />
      <Main name='Fiona' />
      <Btn />
      <Sidebar name='FiFi' />
      <Logo />
      <ModeToggler />
      <Child saleDetails = {sale} />
  
    </div>
  );
}

export default App;
