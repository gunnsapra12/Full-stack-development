import Header from './Header'
import HomePage from './HomePage'
import Footer from './Footer'
import ProfilePage from './ProfilePage'
import FriendsPage from './FriendsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/*BrowserRouter component used to define routing*/}
      
        {/*Routes component used to group route*/}
        <Routes>
          {/*Route component define path with our page component*/}
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/friends' element={<FriendsPage />} />
        </Routes>
     



      <Footer />
       </BrowserRouter>

  )
}

export default App;