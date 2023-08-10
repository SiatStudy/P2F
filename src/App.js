import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainPage} from "./pages/mainPage/MainPage";
import {LocationPage} from "./pages/mainPage/LocationPage";
import {SearchPage} from "./pages/mainPage/SearchPage";
import {StayInfoPage} from "./pages/mainPage/StayInfoPage";
import {StayPage} from "./pages/mainPage/StayPage";

import {MyPage} from "./pages/userPage/MyPage";
import {PaymentPage} from "./pages/userPage/PaymentPage";
import {UserInfoPage} from "./pages/userPage/UserInfoPage";

import {FindDataPage} from "./pages/userDataPage/FindDataPage";
import {LoginPage} from "./pages/userDataPage/LoginPage";
import {SignupPage} from "./pages/userDataPage/SignupPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/mainpage"} element={<MainPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/users/signup"} element={<SignupPage />} />
                <Route path={"/login/search/:userData"} element={<FindDataPage />} />
                <Route path={"/stay/:stayData"} element={<StayPage />} />
                <Route path={"/location/:locationData"} element={<LocationPage />} />
                <Route path={"/search/:searchData"} element={<SearchPage />} />
                <Route path={"/user/info"} element={<UserInfoPage />} />
                <Route path={"/payment/:productId/:amount"} element={<PaymentPage />} />
                <Route path={"/mypage"} element={<MyPage />} />
                <Route path={"/product/:productId"} element={<StayInfoPage />} />
            </Routes>
        </div>
    );
}

export default App;
