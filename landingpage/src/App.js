// src/App.js
import Nav from './components/Nav';
import Section from './components/Section';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer'
import Buttons from './components/Buttons';
import './App.css';
import Widget from './components/Widget';
import Contact from './components/Contact';
import { sectionsData } from './sectionsData';

function App() {
    
    return (
        
        <div className="App">
            
            <Nav />
            <header>
                <Header />
            </header>
            <div>
            <ImageContainer
                imageSrc="https://i.postimg.cc/4NZTfgD8/Anna-Maguder-2.jpg"
                altText="Anna Maguder"
                caption="mgr Anna Maguder"
            />
            </div>
            <main className="main-content">
                <div className="container">
                    {sectionsData.map((section, index) => (
                        <Section
                            key={index}
                            id={section.id}
                            title={section.title}
                            content={section.content}
                            imageSrc={section.imageSrc}
                        />
                    ))}
                    <Contact />
                    <Widget />
                    <Buttons />
                </div>
            </main>
        </div>
    );
}


export default App;