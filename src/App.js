import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom' ;



function App() {
  return (
   
<div style={{height: '800px', position: 'relative'}} >
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}><strong>Dank Football  |</strong> </span><strong>Outside The Box</strong></span>}>
            <Navigation>
                <Link to="/feed">Feed</Link>
                <Link to="/profile">Profile</Link>
                
            </Navigation>
        </Header>
        
     
        <div className="page-content" /> 
       
        <Main/>
        <Content />
        
    </Layout>
    
</div>   
  );
}



export default App;
