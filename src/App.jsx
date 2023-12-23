import Login from './LoginPage/Login'
import ProductsPage from './BrowseProduct/ProductsPage'
import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/shop" element={
                    <ProtectedRoute>
                        <ProductsPage/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </Router>
    )
}

export default App;