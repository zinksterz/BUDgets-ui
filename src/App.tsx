import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import History from './pages/History';

const App: React.FC = () =>{
  return(
    <Router>
      <div>
        <Header />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/chat' element={<Chat />}/>
            <Route path='/history' element={<History />}/>
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
