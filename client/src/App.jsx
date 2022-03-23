import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DataTable from './DataTable'
import Form from './Form'
import './App.css'

const App = () => {
    return (
        <>
            {/* <Form /> */}

            <Router>
                <Routes>
                <Route exact path='/' element={<Form />} />
                <Route exact path='/table' element={<DataTable />} />
                </Routes>
            </Router>

        </>
    )
}

export default App
