import { Routes, Route, Navigate } from "react-router-dom"

import Articles from "../pages/Articles"
import Category from "../components/categories/Category"
import Layout from "../components/Layout"
import LoginLayout from "../pages/LoginLayout"
import LoginForm from '../components/forms/LoginForm'
import PrivateRoute from "../components/PrivateRoute"
import RegistrationForm from '../components/forms/RegistrationForm'
import Trending from '../pages/Trending'
import User from "../pages/User"

const RoutesComp = () => {
    return (
        <Routes>
            <Route path="/" element={
                <PrivateRoute>
                    <Navigate to="/menu" />
                </PrivateRoute>
            } />

            <Route element={<LoginLayout />}>
                <Route path="/register" element={<RegistrationForm />}/>
                <Route path="/login" element={<LoginForm />}/>
            </Route>
            <Route element={<Layout />}>
                <Route path="/menu/" element={<Category title='All Items' />}/> 
                <Route path="menu">
                    <Route path="burger" element={<Category title='Burger' />}/>
                    <Route path="pizza" element={<Category title='Pizza' />}/>
                    <Route path="salads" element={<Category title='Salads' />}/>
                    <Route path="donuts" element={<Category title='Donuts' />}/>
                    <Route path="drinks" element={<Category title='Drinks' />}/>
                </Route>
                <Route path="/articles" element={<Articles />}/>
                <Route path="/trending" element={<Trending />}/>
                <Route path="/user" element={<User />}/> 
            </Route>
            <Route path="*" element={<Navigate to="/menu" />}/>
        </Routes>
    )
}

export default RoutesComp
