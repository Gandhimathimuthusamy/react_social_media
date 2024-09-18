import React from 'react'
import Header from './Header'
import Missing from './Missing'
import About from './About'
import Footer from './Footer'
import NewPost from './NewPost'
import Nav from './Nav'
import PostPage from './PostPage'
import Home from './Home'
import { Routes,Route } from 'react-router-dom'
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';

function  App() {
 
 

  return (
    <div className='App'>
      <DataProvider>
          
            <Header title="Dev Social Media" />
            <Nav/>
            <Routes>
                <Route path="/"element={<Home
                  
                
                />} />
            
                
                  <Route path="post" >
                    <Route index element={<NewPost/> }  />
                
                  <Route path=":id" element={<PostPage/>} />  
                </Route>
                <Route path="/edit/:id"  element={<EditPost  />}  />
                <Route path="about" element={<About/>} /> 
                <Route path="*" element={<Missing/>}/>
            </Routes> 
            <Footer/>
        </DataProvider>
      
      </div>
  )
}

export default App;