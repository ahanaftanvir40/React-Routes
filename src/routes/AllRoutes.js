import { Routes, Route, Navigate } from 'react-router-dom'
import { Admin, Home, PageNotFound, ProductDetail, ProductList } from '../pages';
import { Contact, ContactIn, ContactUs, ContactBd, ContactOther } from '../pages';
export const AllRoutes = ({ user }) => {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products' element={<ProductList />}></Route>
                <Route path='/products/:id' element={<ProductDetail />}></Route>
                <Route path='/contact' element={<Contact />}>
                    <Route path='In' element={<ContactIn />}></Route>
                    <Route path='US' element={<ContactUs />}></Route>
                    <Route path='bd' element={<ContactBd />}></Route>
                    <Route path='*' element={<ContactOther />}></Route>
                </Route>
                <Route path='/admin' element={user ? <Admin /> : <Navigate to='/' />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </div>
    )
}
