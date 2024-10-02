import React, { useState, useCallback } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ServicosList from './ServicosList';
import ImpressaoOrcamento from './ImpressaoOrcamento';
import { calcularParcelas, formatarData, servicos as servicosIniciais } from './utils';
import './styles.css';

const SistemaOrcamento = () => {
  const [servicosSelecionados, setServicosSelecionados] = useState([]);
  const [mostrarPreview, setMostrarPreview] = useState(false);
  const [mostrarImpressao, setMostrarImpressao] = useState(false);
  const [valorTotal, setValorTotal] = useState('');
  const [numeroOrcamento, setNumeroOrcamento] = useState('');
  const [dataOrcamento, setDataOrcamento] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [servicos, setServicos] = useState(servicosIniciais);
  const [servicoPersonalizado, setServicoPersonalizado] = useState({ titulo: '', descricao: '' });

  const toggleServico = useCallback((id) => {
    setServicosSelecionados(prev => {
      const novoServicos = prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id];
      
      const mensagem = novoServicos.length === 1 
        ? '1 serviço selecionado' 
        : `${novoServicos.length} serviços selecionados`;
      
      setFeedbackMessage(mensagem);
      return novoServicos;
    });
  }, []);

  const adicionarServicoPersonalizado = () => {
    if (servicoPersonalizado.titulo && servicoPersonalizado.descricao) {
      const novoServico = {
        id: `custom-${Date.now()}`,
        ...servicoPersonalizado
      };
      setServicos(prev => [...prev, novoServico]);
      setServicosSelecionados(prev => [...prev, novoServico.id]);
      setServicoPersonalizado({ titulo: '', descricao: '' });
    }
  };

  const gerarPreview = (e) => {
    e.preventDefault();
    setMostrarPreview(true);
  };

  const imprimirOrcamento = () => {
    setMostrarImpressao(true);
  };

  if (mostrarImpressao) {
    return (
      <ImpressaoOrcamento 
        numeroOrcamento={numeroOrcamento}
        dataOrcamento={dataOrcamento}
        servicosSelecionados={servicosSelecionados}
        servicos={servicos}
        valorTotal={valorTotal}
        onVoltar={() => setMostrarImpressao(false)}
      />
    );
  }

  return (
    <main className="container">
      <h1>Sistema de Orçamento</h1>
      
      <form onSubmit={gerarPreview}>
        <div className="form-group">
          <label htmlFor="numeroOrcamento" className="form-label">Número do Orçamento:</label>
          <input
            type="text"
            id="numeroOrcamento"
            value={numeroOrcamento}
            onChange={(e) => setNumeroOrcamento(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataOrcamento" className="form-label">Data do Orçamento:</label>
          <input
            type="date"
            id="dataOrcamento"
            value={dataOrcamento}
            onChange={(e) => setDataOrcamento(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <h2>Serviços Disponíveis</h2>
          <ServicosList 
            servicos={servicos} 
            servicosSelecionados={servicosSelecionados} 
            toggleServico={toggleServico} 
          />
        </div>

        <div className="form-group">
          <h3>Adicionar Serviço Personalizado</h3>
          <input
            type="text"
            placeholder="Nome do Serviço"
            value={servicoPersonalizado.titulo}
            onChange={(e) => setServicoPersonalizado(prev => ({ ...prev, titulo: e.target.value }))}
            className="form-input"
          />
          <textarea
            placeholder="Descrição do Serviço"
            value={servicoPersonalizado.descricao}
            onChange={(e) => setServicoPersonalizado(prev => ({ ...prev, descricao: e.target.value }))}
            className="form-input"
            style={{ minHeight: '100px', marginTop: 'var(--spacing-unit)' }}
          />
          <button
            type="button"
            onClick={adicionarServicoPersonalizado}
            className="btn btn-secondary"
            style={{ marginTop: 'var(--spacing-unit)' }}
          >
            Adicionar Serviço Personalizado
          </button>
        </div>

        {feedbackMessage && (
          <div className="feedback">
            {feedbackMessage}
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Gerar Orçamento
        </button>
      </form>

      {mostrarPreview && (
        <div style={{ marginTop: 'calc(var(--spacing-unit) * 4)' }}>
          <h2>Preview do Orçamento</h2>
          <table>
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {servicos.filter(s => servicosSelecionados.includes(s.id)).map(servico => (
                <tr key={servico.id}>
                  <td>{servico.titulo}</td>
                  <td>{servico.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 'calc(var(--spacing-unit) * 3)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ marginRight: 'var(--spacing-unit)', fontSize: '1rem' }}>Valor Total (R$):</span>
            <input
              type="number"
              value={valorTotal}
              onChange={(e) => setValorTotal(e.target.value)}
              className="form-input"
              style={{ width: '10rem' }}
            />
          </div>
          <button 
            onClick={imprimirOrcamento}
            className="btn btn-secondary"
            style={{ marginTop: 'calc(var(--spacing-unit) * 3)' }}
          >
            Imprimir Orçamento
          </button>
        </div>
      )}
    </main>
  );
};

export default SistemaOrcamento;