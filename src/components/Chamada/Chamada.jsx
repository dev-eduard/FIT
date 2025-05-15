import "./Chamada.scss"

const Chamada = () => {
  return (
    <section className="chamada">
      <div className="container">
        <div className="chamada-content">
          <h2>Pronto para transformar seu corpo?</h2>
          <p>Junte-se a milhares de pessoas que já transformaram suas vidas com a FIT.</p>
          <div className="chamada-buttons">
            <a href="#planos" className="btn btn-primary">
              Comece Hoje
            </a>
            <a href="https://api.whatsapp.com/send?phone=0" className="btn btn-outline" target="_blank">
              Agende uma Visita
            </a>
          </div>
          <p className="chamada-nota">Sem taxa de matrícula. Agende já sua aula experimental.</p>
        </div>
      </div>
    </section>
  )
}

export default Chamada
