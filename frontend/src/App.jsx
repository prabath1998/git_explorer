import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  // ! const { authUser, loading } = useAuthContext();
  const authUser = true;
  // return (
  return (
		<div className='flex'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
					<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
					<Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
					<Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to={"/login"} />} />
				</Routes>
				<Toaster />
			</div>
		</div>
	);
}

export default App;
