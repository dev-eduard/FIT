import "./Hero.scss"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transforme seu corpo, transforme sua vida</h1>
          <p>
            Alcance seus objetivos com nossos treinadores especializados e equipamentos de última geração.
          </p>
          <div className="hero-buttons">
            <a href="#planos" className="btn btn-primary">
              Comece Hoje
            </a>
            <a href="https://api.whatsapp.com/send?phone=0" className="btn btn-outline" target="_blank">
              Agende uma Visita
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="\thumb.avif" alt="Pessoa treinando" />
        </div>
      </div>
    </section>
  )
}

export default Hero
