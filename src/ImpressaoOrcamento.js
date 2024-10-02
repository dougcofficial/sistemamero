import React from 'react';
import { formatarMoeda, formatarData } from './utils';

const ImpressaoOrcamento = ({ numeroOrcamento, dataOrcamento, servicosSelecionados, servicos, valorTotal, onVoltar }) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Helvetica Neue, sans-serif' }}>
     <div style={{ textAlign: 'right', marginBottom: '20px' }}>
  <p>Lajeado, {formatarData(dataOrcamento)}</p>
  <p>Orçamento Nº: {numeroOrcamento}</p>
</div>

      <div style={{ marginBottom: '40px' }}>
        <img src="/imagens/cabecalho.jpg" alt="Cabeçalho" style={{ width: '100%', height: 'auto' }} />
      </div>

      <h3>Metodologia de Trabalho</h3>
      <div style={{ marginTop: '30px' }}>
        <h3>1. Atendimento / Briefing</h3>
        <img src={`${process.env.PUBLIC_URL}/imagens/imagem1.png`} alt="Imagem Atendimento / Briefing" style={{ width: '100%', height: 'auto', marginTop: '10px', marginBottom: '10px' }} />
        <p>Feito o primeiro contato com o cliente, é marcada uma conversa onde colhemos todos os dados e informações que possam ser úteis ao desenvolvimento do projeto. Histórico da empresa, pessoa física, características, atuação e informações adicionais. Todo esse apanhado de informações formam o que chamamos de briefing, que vai dar ao designer o rumo a ser tomado para o desenvolvimento do projeto.</p>
        
        <h3>2. Projeto</h3>
        <img src="/imagens/imagem2.jpg" alt="Imagem Projeto" style={{ width: '100%', height: 'auto', marginTop: '10px', marginBottom: '10px' }} />
        <p>Aprovada a proposta comercial, inicia-se o projeto. Nesta etapa são realizadas pesquisas e análises diversas (estratégias de mercado, de concorrência, estudos de tendências, de formas, cores e tipografias). Tendo essas pesquisas em mãos, bem como as informações do item 1, é definido o CONCEITO, a alma do projeto. O conceito é o que produto vai expressar, o que ele vai nos dizer através de seu desenho, sua face. Usufruindo de todas essas informações, o desenvolvimento do projeto vai ser executado. Obedecendo as etapas estabelecidas na proposta de trabalho. Logo que o projeto estiver concretizado são apresentados ao cliente o layout do trabalho em questão. Nesta etapa, cliente e designer discutem sobre o projeto até chegarem ao resultado mais satisfatório possível. Então o projeto é aprovado e finalizado, deixando-o apto à implantação.</p>
        
        <h3>3. Implantação</h3>
        <img src="/imagens/imagem3.jpg" alt="Imagem Implantação" style={{ width: '100%', height: 'auto', marginTop: '10px', marginBottom: '10px' }} />
        <p>Nesta etapa é apresentado orçamentos de empresas terceiras, os quais são analisados definindo o fornecedor para implantação do projeto (impressão, adesivagem, serigrafia, etc). O designer acompanha a produção do mesmo, conferindo qualidade máxima nas questões que o envolvem (materiais, cores, acabamentos, entre outros), até a entrega ao cliente.</p>
      </div>

      <h3>4. Escopo do Projeto</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', fontSize: '14px' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#f8f8f8', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '2px solid #0046E2' }}>Serviço</th>
            <th style={{ backgroundColor: '#f8f8f8', fontWeight: 'bold', padding: '10px', textAlign: 'left', borderBottom: '2px solid #0046E2' }}>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {servicos.filter(s => servicosSelecionados.includes(s.id)).map(servico => (
            <tr key={servico.id}>
              <td style={{ padding: '12px', borderBottom: '1px solid #f0f0f0' }}>{servico.titulo}</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #f0f0f0' }}>{servico.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: 'right', marginTop: '20px', fontWeight: 'bold' }}>
        <p>Valor Total: {formatarMoeda(valorTotal)}</p>
      </div>

      <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '15px', backgroundColor: '#f8f8f8' }}>
        <h3>Opções de Pagamento:</h3>
        <p>À vista: {formatarMoeda(valorTotal)}</p>
        <p>Em 1 + 2x <b>sem juros</b> de {formatarMoeda(valorTotal / 3)}</p>
        <p>Em 1 + 4x de {formatarMoeda((valorTotal * 1.1) / 5)}</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>5. Condições Gerais</h3>
        <p>- A solicitação de serviços diferentes dos listados acima serão cobrados separadamente, assim como, a solicitação de outros serviços ou mudanças na ordem prevista no cronograma, sem combinação prévia, acarretará em alteração nos prazos de entrega da proposta.</p>
        <p>- Serão apresentadas uma versão de marca e slogan e argumentada a defesa do conceito apresentado. Em caso de não aprovação, será debatido quais os pontos a serem corrigidos e será apresentada a versão ajustada. Caso haja necessidade, alterações exigidas após segunda versão serão orçadas separadamente via custo/hora de trabalho.</p>
        <p>- Não está inclusa nesta proposta a produção dos materiais desenvolvidos, sendo de nossa responsabilidade informar o orçamento dos mesmos para avaliação e aprovação pelo contratante. Após aprovados e realizadas as execuções, estes serão faturados diretamente pelos fornecedores contra o cliente.</p>
        <p>- Estudos apresentados ao cliente e não aprovados não podem ser utilizados posteriormente pelo cliente, sendo de propriedade do profissional.</p>
        <p>- Caso o projeto não venha a ser concluído no prazo previsto, devido a indefinições da contratante, reservamo-nos o direito de manter inalteradas as datas de vencimento das faturas.</p>

        <h3>6. Entrega dos Materiais</h3>
        <p>A pesquisa e desenvolvimento de marca e identidade visual exige período mínimo de <b>45 dias</b> para desenvolvimento a partir do pagamento da primeira parcela, podendo haver variações conforme feriados nos meses seguintes, conforme acordo previamente fechado entre as partes. Neste período serão feitas as pesquisas referentes ao projeto, o desenvolvimento do projeto em si e a montagem da apresentação conceitual, a qual será agendada, após conclusão, para demonstração realizada pelo responsável. O desenvolvimento dos materiais acontece logo após aprovação da marca.</p>

        <h3>7. Pagamentos</h3>
        <p>O valor total poderá ser parcelado, via boleto bancário, de acordo com as condições descritas no orçamento, com primeira parcela programada para 7 dias após confirmação do serviço.</p>

        <p><i>Att. Douglas Corbellini</i></p>
      </div>

      <div className="no-print" style={{ '@media print': { display: 'none' } }}>
        <button onClick={() => window.print()} style={{
          backgroundColor: '#00E266',
          border: 'none',
          color: 'black',
          padding: '12px 24px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '1rem',
          margin: '24px 2px',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
          Imprimir Orçamento
        </button>

        <button onClick={onVoltar} style={{
          backgroundColor: '#0066cc',
          border: 'none',
          color: 'white',
          padding: '12px 24px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '1rem',
          margin: '24px 2px',
          cursor: 'pointer',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}>
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ImpressaoOrcamento;