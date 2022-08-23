import Main from './components/Main'
import './index.css'
import Questions from './components/Questions'
import Footer from './components/Footer'
import { createContext, useState} from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'

const languages = [
  {
  code : 'en',
  name : 'English',
  country_code : 'gb',
  img :"https://flagcdn.com/gb.svg"
  },
  {
    code : 'es',
    name : 'Español',
    country_code : 'es',
    img :"https://flagcdn.com/es.svg"
  },
]

document.title = 'Combinados';


export const ThemeContext = createContext(null)

function App() {

  const currentLanguageCode = cookies.get('i18next') || 'en';

  const { t } = useTranslation();

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <>
    <div className='main-app' id={theme}>

    <div className = 'main-div'>
      <div className='nav-div'>
        <h1 className='logo'>Combinados</h1>

        <div className='settings'>
        <button><i onClick={toggleTheme} className="fa-solid fa-circle-half-stroke"></i></button>

        <div className="dropdown">
          <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-globe"></i>
          </button>

          <ul className="dropdown-menu">

            <li><span className='dropdown-item-text'>{t('language')}</span></li>
            
            {languages.map(({code, name, country_code, img}) => (
              <li key={country_code}>
                <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                  <span className='flag-span' style={{opacity: code === currentLanguageCode ? 0.5 : 1 }}>
                  
                  <img src={img} width="30" alt={name}></img>
                  
                  </span>
                  {name}
                </button>
              </li>
            ))}

          </ul>
        </div>
        
        </div>
      </div>
        <Main/>
      </div>
    </div>
    
    <section className='questions-section'>
          <h1 className='title-questions' id="question-title">{t('questions.title')}</h1>

          <Questions></Questions>
      </section>

      <footer className='footer-box'>
        <Footer/>
      </footer>

 </>
 </ThemeContext.Provider>
  );
}

export default App;
