import './App.scss'
import { Routes, Route } from 'react-router-dom'
import LazyLoad from './LazyLoad'
import Navbar from '@components/Navbars/Navbar'


function App() {
  return (
    <div className="App">
      <div className='app_container'>
        <Navbar></Navbar>
        {/* Content Router */}
        <Routes>
          <Route path="/" element={LazyLoad(() => import("@pages/Homes/Home"))()} />
          <Route path="register" element={LazyLoad(() => import("@pages/Registers/Register"))()} />
          <Route path="login" element={LazyLoad(() => import("@pages/Logins/Login"))()} />
          {/* <Route path="test" element={LazyLoad(() => import("@pages/test/test"))()} />
          <Route path="test" element={LazyLoad(() => import("@pages/test/test2"))()} /> */}
          <Route path="/shop" element={LazyLoad(() => import("@pages/Shops/Shop"))()} />
          <Route path="shop/:type" element={LazyLoad(() => import("@pages/Shops/Shop"))()} />
          <Route path="detail/:id" element={LazyLoad(() => import("@pages/DetailItems/DetailItem"))()} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
