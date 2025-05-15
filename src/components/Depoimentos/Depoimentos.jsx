import "./Depoimentos.scss";

const Depoimentos = () => {
  const depoimentos = [
    {
      id: 1,
      nome: "Carla Oliveira",
      cargo: "Membro há 2 anos",
      texto:
        "A FIT mudou completamente minha vida. Perdi 15kg em 6 meses com a ajuda dos treinadores e as aulas de HIIT. O ambiente é super acolhedor e motivador!",
    },
    {
      id: 2,
      nome: "Ricardo Santos",
      cargo: "Membro há 1 ano",
      texto:
        "Os treinos personalizados da FIT me ajudaram a ganhar massa muscular e melhorar minha postura. Os profissionais são extremamente qualificados e atenciosos.",
    },
  ];

  return (
    <section id="depoimentos" className="depoimentos">
      <div className="container">
        <div className="section-header">
          <span className="badge">Depoimentos</span>
          <h2>O que nossos alunos dizem</h2>
          <p>
            Veja como a FIT tem transformado a vida de nossos alunos com
            resultados reais.
          </p>
        </div>

        <div className="depoimentos-grid">
          {depoimentos.map((depoimento) => (
            <div className="depoimento-card" key={depoimento.id}>
              <div className="depoimento-header">
                <div>
                  <h3>{depoimento.nome}</h3>
                  <p className="cargo">{depoimento.cargo}</p>
                </div>
              </div>
              <p className="depoimento-texto">"{depoimento.texto}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
