import './App.css'
import About from './components/About';
import Articles from './components/Articles';
import BoardMembers from './components/BoardMembers';
import Footer from './components/Footer';
import Header from "./components/Header";
import Hero from './components/Hero';
import JoinUs from './components/JoinUs';
import JournalSection from './components/JournalSection';
import NewBooks from './components/NewBooks';

function App() {
   return (
        <div 
         className='overflow-x-hidden'>
          <Header />
          <Hero />
          <JournalSection />
          <NewBooks />
          <Articles />
          <About />
          <JoinUs />
          <BoardMembers />
          <Footer />
        </div>
      )
}

export default App;


