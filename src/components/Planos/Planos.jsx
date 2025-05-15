import "./Planos.scss";

const Planos = () => {
  const planos = [
    {
      id: 1,
      nome: "Básico",
      preco: 89.9,
      periodo: "/mês",
      destaque: false,
      recursos: [
        "Acesso à musculação",
        "Horário comercial",
        "Avaliação física mensal",
      ],
    },
    {
      id: 2,
      nome: "Premium",
      preco: 149.9,
      periodo: "/mês",
      destaque: true,
      recursos: [
        "Acesso total 24h",
        "Todas as aulas coletivas",
        "Avaliação física quinzenal",
        "Acesso à área de bem-estar",
      ],
    },
    {
      id: 3,
      nome: "VIP",
      preco: 249.9,
      periodo: "/mês",
      destaque: false,
      recursos: [
        "Acesso total 24h",
        "Todas as aulas coletivas",
        "1 sessão semanal com personal",
        "Avaliação física semanal",
        "Acesso à área de bem-estar",
        "Nutricionista mensal",
      ],
    },
  ];

  return (
    <section id="planos" className="planos">
      <div className="container">
        <div className="section-header">
          <span className="badge">Planos</span>
          <h2>Escolha o plano ideal para você</h2>
          <p>
            Oferecemos diferentes opções para atender às suas necessidades e
            objetivos de treinamento.
          </p>
        </div>

        <div className="planos-grid" style={{cursor: "pointer"}}>
          {planos.map((plano) => (
            <div
              className={`plano-card ${plano.destaque ? "destaque" : ""}`}
              key={plano.id}
            >
              {plano.destaque && (
                <div className="plano-badge">Mais Popular</div>
              )}
              <h3>{plano.nome}</h3>
              <div className="preco">
                <span className="valor">
                  R$ {plano.preco.toFixed(2).replace(".", ",")}
                </span>
                <span className="periodo">{plano.periodo}</span>
              </div>
              <ul className="recursos">
                {plano.recursos.map((recurso, index) => (
                  <li key={index}>
                    <span className="check">✓</span>
                    {recurso}
                  </li>
                ))}
              </ul>
              <a href="#contato" className="btn btn-primary btn-block">
                Começar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planos;
