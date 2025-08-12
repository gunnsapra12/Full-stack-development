import Header1 from "./Header1";
import Footer from "./Footer"
import Homepage from "./Homepage";
import CreateAccountPage from './CreateAccountPage';
import LoginPage from "./LoginPage";
import Header2 from "./Header2";
import BankDetailPage from "./BankDetailPage";
import TransactionPage from "./TransactionPage";
import TransferPage from "./TransferPage";
import LogoutPage from "./LogoutPage";
import { useState } from "react";
function App() {
  let[isLogin, setIsLogin]=useState(false)

  return (

    <div>
      
      {isLogin===false? <Header1/>: <Header2/>}
      
      
      
      <Homepage/>
      
      <CreateAccountPage isLogin={isLogin} setIsLogin={setIsLogin}/>
      <LoginPage isLogin={isLogin} setIsLogin={setIsLogin}/>
      
      <BankDetailPage/>
      
      <TransferPage/>
      <TransactionPage/>
      <LogoutPage isLogin={isLogin} setIsLogin={setIsLogin}/>

      <Footer/>
      
    </div>
  );
}

export default App;