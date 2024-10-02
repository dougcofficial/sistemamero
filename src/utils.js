import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const calcularParcelas = (valor) => {
  const valorNumerico = parseFloat(valor);
  if (isNaN(valorNumerico)) return { aVista: 0, semJuros: 0, comJuros: 0 };

  const aVista = valorNumerico;
  const semJuros = valorNumerico / 3;
  const comJuros = (valorNumerico * 1.1) / 5;

  return { aVista, semJuros, comJuros };
};

export const formatarData = (data) => {
  const dataAjustada = parseISO(data);
  return format(dataAjustada, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
};

export const servicos = [
  {
    id: 1,
    titulo: "Naming",
    descricao: "Desenvolvimento de pesquisa de nome livre para registro em classe pré-determinada do INPI. Apresentação conceitual do estudo de nome."
  },
  {
    id: 2,
    titulo: "Marca",
    descricao: "Criação de marca com grids de Identidade Visual. Processo de criação de marca gráfica e padrão visual exclusivo para personalização de materiais. Definição de tipografia auxiliar e demais padrões gráficos da marca, como cores, grafismos, formatos, etc. Apresentação de desenvolvimento do projeto, com definição de posicionamento de marca, termômetro da identidade visual, manifesto da marca, estratégia usada e simulação de materiais base, dando direcionamento para comunicação."
  },
  {
    id: 3,
    titulo: "Manual da Identidade Visual",
    descricao: "Manual contendo as principais regras e princípios de aplicação da marca. Manual entregue em arquivo digital."
  },
  {
    id: 4,
    titulo: "Envelope",
    descricao: "Desenvolvimento de layout de envelope, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 5,
    titulo: "Papel Timbrado",
    descricao: "Desenvolvimento de layout para papel timbrado e fechamento de arquivo para uso digital."
  },
  {
    id: 6,
    titulo: "Fachada",
    descricao: "Desenvolvimento de layout para fachada, simulação de aprovação e fechamento de arquivo para implementação."
  },
  {
    id: 7,
    titulo: "Pastinha",
    descricao: "Desenvolvimento de layout de pastinha, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 8,
    titulo: "Uniforme",
    descricao: "Desenvolvimento de layout de uniforme, simulação de aprovação e fechamento de arquivo para serigrafia."
  },
  {
    id: 9,
    titulo: "Cartão de Visitas",
    descricao: "Desenvolvimento de layout de cartão de visitas, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 10,
    titulo: "Cartão de Visitas Digital",
    descricao: "Desenvolvimento de layout de cartão de visitas digital, simulação de aprovação e fechamento de arquivo para uso digital."
  },
  {
    id: 11,
    titulo: "Assinatura de Email",
    descricao: "Desenvolvimento de layout de assinatura de email e fechamento de arquivo para uso digital."
  },
  {
    id: 12,
    titulo: "Receituário",
    descricao: "Desenvolvimento de layout de receituário formato A5, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 13,
    titulo: "Receituário Controlado",
    descricao: "Desenvolvimento de layout de receituário controlado formato A5, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 14,
    titulo: "Jaleco",
    descricao: "Desenvolvimento de layout para aplicação de marca, simulação de aplicação e fechamento de arquivo para bordado."
  },
  {
    id: 15,
    titulo: "Adesivo de Selamento",
    descricao: "Desenvolvimento de layout de adesivo de selamento, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 16,
    titulo: "Tag",
    descricao: "Desenvolvimento de layout da tag, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 17,
    titulo: "Papel Seda",
    descricao: "Desenvolvimento de layout de papel seda, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 18,
    titulo: "Cartão de Agradecimento",
    descricao: "Desenvolvimento de layout do cartão de agradecimento, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 19,
    titulo: "Embalagem",
    descricao: "Desenvolvimento de layout de embalagem, simulação de aprovação e fechamento de arquivo para impressão."
  },
  {
    id: 20,
    titulo: "Perfil - Rede Social",
    descricao: "Desenvolvimento de imagem para perfil de Instagram, Facebook, WhastApp. Fechamento de arquivos para uso digital."
  }
];

export const formatarMoeda = (valor) => {
  if (typeof valor !== 'number') {
    valor = parseFloat(valor) || 0;
  }
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};