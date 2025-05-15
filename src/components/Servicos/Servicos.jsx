import "./Servicos.scss";

const Servicos = () => {
  const servicos = [
    {
      id: 1,
      titulo: "Musculação",
      descricao:
        "Equipamentos modernos e orientação profissional para ganho de massa muscular e força.",
    },
    {
      id: 2,
      titulo: "Aulas Coletivas",
      descricao:
        "Diversas modalidades de aulas em grupo para motivação e resultados em conjunto.",
    },
    {
      id: 3,
      titulo: "Personal Trainer",
      descricao:
        "Acompanhamento individualizado para atingir seus objetivos com eficiência e segurança.",
    },
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <div className="section-header">
          <span className="badge">Serviços</span>
          <h2>Tudo o que você precisa para alcançar seus objetivos</h2>
          <p>
            Nossa academia oferece uma variedade de serviços para atender a
            todos os níveis de condicionamento físico e objetivos.
          </p>
        </div>

        <div className="servicos-grid">
          {servicos.map((servico) => (
            <div className="servico-card" key={servico.id}>
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
