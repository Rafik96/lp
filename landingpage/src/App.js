// src/App.js
import Navbar from './components/Navbar';
import Section from './components/Section';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer'
import Widget from './components/Widget';
import './App.css';
import { sectionsData } from './sectionsData';


function App() {
    

   

    return (
        
        <div className="App">
            
            <Navbar />
            <Header />
            <ImageContainer
                imageSrc="https://i.postimg.cc/4NZTfgD8/Anna-Maguder-2.jpg"
                altText="Anna Maguder"
                caption="mgr Anna Maguder"
            />
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
                    <Widget/>
                </div>
            </main>
        </div>
    );
}

export default App;