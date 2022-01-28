import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import BlogPostCreation from './Pages/Dashboard/BlogPostCreation.js'
import BlogPage from './Pages/BlogPage.js'
import Header from './Components/Header.js'
import Login from './Pages/Login.js'
import TopReads from './Pages/Blog/TopReads.js'
import ShowerThoughts from './Pages/Blog/ShowerThoughts.js'
import ResearchBible from'./Pages/Blog/ResearchBible.js'
import Dashboard from './Pages/Dashboard/Dashboard.js'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<App/>} />
        <Route path="/blog/recentreads" element={<BlogPage/>}/>
        <Route path="/blog/topreads" element={<TopReads/>}/>
        <Route path="/blog/showerthoughts" element={<ShowerThoughts/>}/>
        <Route path="/blog/researchbible" element={<ResearchBible/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard/*" element={<Dashboard/>}/>
        <Route path="/dashboard/create/recentreads" element={<BlogPostCreation/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
