import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Servicos from "../components/Servicos/Servicos"
import Depoimentos from "../components/Depoimentos/Depoimentos"
import Planos from "../components/Planos/Planos"
import Chamada from "../components/Chamada/Chamada"
import Footer from "../components/Footer/Footer"
import { ThemeProvider } from "../contexts/ThemeContext"
import "../styles/global.scss"

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Servicos />
          <Depoimentos />
          <Planos />
          <Chamada />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
