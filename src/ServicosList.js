import React from 'react';
import './ServicosList.css';

const ServicosList = ({ servicos, servicosSelecionados, toggleServico }) => {
  return (
    <div className="servicos-grid">
      {servicos.map(servico => (
        <div key={servico.id} className="servico-item">
          <label className="servico-label">
            <input
              type="checkbox"
              checked={servicosSelecionados.includes(servico.id)}
              onChange={() => toggleServico(servico.id)}
              className="servico-checkbox"
            />
            <span className="servico-titulo">{servico.titulo}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ServicosList);