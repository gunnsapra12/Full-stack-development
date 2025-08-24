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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  let [isLogin, setIsLogin] = useState(false)
  let [account, setAccount] = useState([])
  return (
    <BrowserRouter>
      {isLogin === false 
  ? <Header1 isLogin={isLogin} setIsLogin={setIsLogin} /> 
  : <Header2 isLogin={isLogin} setIsLogin={setIsLogin} />}

      <Routes>

        <Route path="/" element={<Homepage />} />

        <Route path="/create-account"element={<CreateAccountPage account={account} setAccount={setAccount }/>}/>
        <Route path="/login" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}/>
        <Route path="/bank-detail" element={<BankDetailPage account={account} setAccount={setAccount} />} />
        <Route path="/transfer" element={<TransferPage account={account}setAccount={setAccount} />} />
        <Route path="/transaction" element={<TransactionPage account={account}setAccount={setAccount} />} />
        <Route path="/logout" element={<LogoutPage  isLogin={isLogin} setIsLogin={setIsLogin} />}/>

      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;