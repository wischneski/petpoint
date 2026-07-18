/**
 * features/especialidades/data.ts
 *
 * Fonte única de verdade para todas as especialidades da PetPoint.
 * Usado em:
 *  - app/blog/especialidades/page.tsx (hub)
 *  - app/blog/especialidades/[slug]/page.tsx (artigos individuais)
 *  - components/Clinica.tsx (cards com links)
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface Specialty {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  heroAlt: string;
  author: 'vinicius' | 'nathalia' | 'larissa' | 'equipe';
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  intro: string;
  whatIs: string;
  whenToSeek: string[];
  howWeDoIt: string;
  faqs: FAQ[];
}

export const specialties: Specialty[] = [
  // ─── 1. CLÍNICA GERAL ───────────────────────────────────────────────────────
  {
    slug: 'clinica-geral',
    title: 'Clínica Geral',
    subtitle: 'Prevenção e Diagnóstico',
    category: 'Prevenção',
    image: '/images/clinica/clinica-geral.webp',
    heroAlt: 'Consulta veterinária de rotina na PetPoint em Morro da Fumaça',
    author: 'nathalia',
    metaTitle: 'Clínica Geral Veterinária em Morro da Fumaça | PetPoint',
    metaDescription:
      'Consultas de rotina, check-ups preventivos e diagnóstico clínico completo para cães e gatos em Morro da Fumaça/SC. Atendimento com hora marcada na PetPoint.',
    keywords: [
      'clínica veterinária morro da fumaça',
      'consulta veterinária morro da fumaça',
      'check-up pet',
      'veterinário morro da fumaça sc',
      'clínica geral veterinária',
      'diagnóstico clínico veterinário',
      'check-up cão gato',
    ],
    ogImage: '/images/clinica/clinica-geral.webp',
    intro:
      'A maioria dos tutores leva o pet ao veterinário só quando algo está errado. Faz sentido: enquanto o animal parece bem, parece que não há motivo para consultar. O problema é que cães e gatos escondem sinais de doença por instinto. Quando os sintomas aparecem de forma clara, o problema muitas vezes já está avançado.',
    whatIs:
      'A consulta de clínica geral é o acompanhamento regular do seu pet. O veterinário avalia o peso, os dentes, a pelagem, os olhos, os órgãos internos e o comportamento do animal. Com essas informações, é possível identificar alterações antes que elas se tornem um problema maior. Pegar cedo faz diferença no tratamento e no custo.',
    whenToSeek: [
      'O pet não foi ao veterinário nos últimos 12 meses (6 meses se tiver mais de 7 anos)',
      'Você percebeu que ele está comendo menos ou bebendo mais água que o normal',
      'Ele está mais quieto ou dormindo mais do que costuma',
      'A pelagem está diferente, com queda excessiva ou sem brilho',
      'Você notou alguma massa, caroço ou inchaço no corpo',
      'É hora de atualizar as vacinas ou vermifugação',
    ],
    howWeDoIt:
      'Na PetPoint, a consulta de clínica geral começa com uma conversa. A Dra. Nathalia pergunta sobre a rotina do pet, a alimentação, o comportamento em casa e qualquer mudança que o tutor tenha notado. Depois vem o exame físico completo, onde cada sistema do corpo é avaliado. Se algo indicar necessidade de exame complementar, ele é solicitado na mesma consulta. O tutor sai com um diagnóstico claro e um plano de ação.',
    faqs: [
      {
        question: 'Com que frequência o pet precisa ir ao veterinário?',
        answer:
          'Pets adultos saudáveis precisam de pelo menos uma consulta por ano. A partir dos 7 anos, o ideal é consultar a cada 6 meses, porque doenças relacionadas à idade podem aparecer mais rápido.',
      },
      {
        question: 'Meu pet parece saudável. Preciso mesmo de consulta de rotina?',
        answer:
          'Sim. Cães e gatos escondem desconforto por instinto. Muitas doenças não mostram sintomas no começo. A consulta preventiva serve justamente para encontrar o que não está aparente.',
      },
      {
        question: 'O que o veterinário avalia na consulta de clínica geral?',
        answer:
          'Peso e condição corporal, saúde dos dentes e gengivas, olhos, ouvidos, pele e pelagem, frequência cardíaca e respiratória, palpação do abdômen para avaliar órgãos internos e estado geral do animal.',
      },
      {
        question: 'Como agendar uma consulta na PetPoint?',
        answer:
          'Pelo WhatsApp (48) 99912-0084. O atendimento é com hora marcada de segunda a sexta das 7h30 às 18h30 e sábados das 7h30 às 12h.',
      },
    ],
  },

  // ─── 2. ONCOLOGIA E CIRURGIA ─────────────────────────────────────────────────
  {
    slug: 'oncologia-cirurgia',
    title: 'Oncologia e Cirurgia',
    subtitle: 'Alta Complexidade',
    category: 'Cirurgia',
    image: '/images/clinica/oncologia.webp',
    heroAlt: 'Cirurgia veterinária de alta complexidade na PetPoint em Morro da Fumaça',
    author: 'vinicius',
    metaTitle: 'Oncologia Veterinária e Cirurgia de Pequenos Animais | PetPoint Morro da Fumaça',
    metaDescription:
      'Diagnóstico e tratamento de tumores em cães e gatos com cirurgia especializada em Morro da Fumaça/SC. Dr. Vinicius Wischneski, especialista em oncologia veterinária.',
    keywords: [
      'oncologia veterinária',
      'cirurgia veterinária morro da fumaça',
      'tumor cão gato tratamento',
      'cirurgia oncológica pet',
      'veterinário oncologista sc',
      'cirurgia pequenos animais',
      'tratamento câncer pet',
    ],
    ogImage: '/images/clinica/oncologia.webp',
    intro:
      'Um caroço novo no pet não significa necessariamente câncer. Mas também não dá para ignorar. O Dr. Vinicius Wischneski, diretor clínico da PetPoint e especialista em oncologia e cirurgia de pequenos animais, atende casos que vão de biópsias simples a procedimentos cirúrgicos de alta complexidade.',
    whatIs:
      'Oncologia veterinária é a área da medicina veterinária que cuida do diagnóstico e do tratamento de tumores em animais. Nem todo tumor é maligno. O diagnóstico correto, feito com biópsia e exames de imagem, é o que define o caminho do tratamento. A cirurgia de remoção, quando indicada, é o principal recurso terapêutico e pode ser curativa em muitos casos quando feita cedo.',
    whenToSeek: [
      'Você encontrou um caroço, nódulo ou inchaço em qualquer parte do corpo do pet',
      'Uma ferida que não está cicatrizando como deveria',
      'O pet está perdendo peso sem causa aparente',
      'Ele está com dificuldade para engolir, respirar ou urinar',
      'Outro veterinário indicou avaliação especializada',
      'O pet já teve diagnóstico de tumor e precisa de cirurgia ou acompanhamento',
    ],
    howWeDoIt:
      'O Dr. Vinicius tem mais de 14 anos de atuação e registro CRMV-SC 8434. Na primeira consulta, ele avalia o histórico do animal, solicita os exames necessários e explica para o tutor o que foi encontrado em linguagem clara. O plano de tratamento é definido junto com a família do pet, com todas as opções, riscos e prognósticos explicados de forma honesta. A PetPoint é a única clínica de Morro da Fumaça com estrutura cirúrgica para procedimentos oncológicos.',
    faqs: [
      {
        question: 'Todo tumor em cão ou gato é câncer?',
        answer:
          'Não. Muitos tumores são benignos e não oferecem risco à vida. O diagnóstico definitivo só é possível com biópsia e análise histopatológica. Por isso não dá para avaliar um caroço só pelo visual.',
      },
      {
        question: 'Quando a cirurgia é o melhor tratamento para tumor em pet?',
        answer:
          'A cirurgia é geralmente o tratamento de escolha quando o tumor está localizado e não se espalhou para outros órgãos. A remoção completa com margens cirúrgicas adequadas é o que determina a chance de cura.',
      },
      {
        question: 'Meu pet está velho. Vale a pena fazer cirurgia?',
        answer:
          'A idade sozinha não é uma contraindicação para cirurgia. O que importa é a condição clínica geral do animal. A avaliação pré-cirúrgica com exames de sangue e coração define se o procedimento é seguro.',
      },
      {
        question: 'Qual é o tempo de recuperação após uma cirurgia oncológica?',
        answer:
          'Depende do tipo de cirurgia e do porte do animal. Procedimentos simples de remoção de nódulos permitem retorno rápido à rotina. Cirurgias mais complexas exigem mais dias de repouso e retornos periódicos para avaliação.',
      },
    ],
  },

  // ─── 3. ODONTOLOGIA VETERINÁRIA ──────────────────────────────────────────────
  {
    slug: 'odontologia',
    title: 'Odontologia Veterinária',
    subtitle: 'Saúde Bucal',
    category: 'Saúde Bucal',
    image: '/images/clinica/odontologia.webp',
    heroAlt: 'Odontologia veterinária e limpeza dentária para pets na PetPoint',
    author: 'larissa',
    metaTitle: 'Odontologia Veterinária em Morro da Fumaça | Limpeza Dental para Pets | PetPoint',
    metaDescription:
      'Profilaxia dental, extração e cirurgia oral para cães e gatos em Morro da Fumaça/SC. Tártaro em pet é problema de saúde, não só estética. Agende na PetPoint.',
    keywords: [
      'odontologia veterinária',
      'limpeza dental cão gato',
      'tártaro pet',
      'saúde bucal pet',
      'dentista veterinário morro da fumaça',
      'profilaxia dental veterinária',
      'extração dente cão',
    ],
    ogImage: '/images/clinica/odontologia.webp',
    intro:
      'A maioria dos tutores não sabe que cão ou gato com hálito ruim pode estar com dor. O mau cheiro na boca do pet não é normal. É sinal de bactérias, tártaro acumulado ou infecção na gengiva. Quando não tratado, o problema vai além da boca e pode afetar coração, rins e fígado.',
    whatIs:
      'Odontologia veterinária cuida da saúde da boca do pet. Isso inclui limpeza profissional dos dentes (profilaxia), remoção de tártaro, extração de dentes comprometidos e cirurgias orais quando necessário. O procedimento é feito com anestesia, o que garante que o animal não sente dor e o veterinário consegue trabalhar com segurança e precisão.',
    whenToSeek: [
      'O pet tem hálito diferente do normal',
      'Você consegue ver uma cor amarelada ou marrom nos dentes',
      'A gengiva está avermelhada ou inchada',
      'O pet tem dificuldade para mastigar ou deixou de comer ração seca',
      'Ele esfrega a boca no chão ou tenta tocar o focinho com a pata',
      'Faz mais de um ano desde a última limpeza dental',
    ],
    howWeDoIt:
      'Na PetPoint, a profilaxia dental começa com uma avaliação oral completa em consulta. A Dra. Larissa verifica o estado dos dentes, gengivas e estrutura da boca. O procedimento de limpeza é marcado separadamente, feito sob anestesia geral e monitoramento contínuo. Usamos equipamentos odontológicos específicos para animais. O tutor recebe orientações sobre como manter a saúde bucal do pet em casa depois do procedimento.',
    faqs: [
      {
        question: 'Com que frequência o pet precisa de limpeza dental?',
        answer:
          'Em geral, uma vez por ano. Certos animais com tendência a acumular tártaro mais rápido podem precisar a cada 6 meses. A avaliação do veterinário define o intervalo ideal.',
      },
      {
        question: 'O procedimento de limpeza dental é perigoso para o pet?',
        answer:
          'É seguro quando feito com avaliação pré-anestésica correta. Antes do procedimento, fazemos exame de sangue e avaliação cardíaca para garantir que o animal está em condições para a anestesia.',
      },
      {
        question: 'Posso escovar os dentes do meu pet em casa?',
        answer:
          'Sim, e é muito recomendado. A escovação diária com pasta dentária específica para animais reduz o acúmulo de tártaro. Mas ela não substitui a limpeza profissional anual, que remove o tártaro já mineralizado.',
      },
      {
        question: 'Tártaro no dente de cachorro causa dor?',
        answer:
          'Sim. O tártaro avançado causa gengivite e periodontite, que são inflamações dolorosas da gengiva. Como os pets não reclamam de dor da forma que esperamos, muitos tutores não percebem o desconforto que o animal está sentindo.',
      },
    ],
  },

  // ─── 4. VACINAÇÃO ─────────────────────────────────────────────────────────────
  {
    slug: 'vacinacao',
    title: 'Vacinação',
    subtitle: 'Prevenção e Proteção',
    category: 'Prevenção',
    image: '/images/clinica/vacinacao.webp',
    heroAlt: 'Vacinação de cães e gatos na PetPoint em Morro da Fumaça',
    author: 'nathalia',
    metaTitle: 'Vacinação para Cães e Gatos em Morro da Fumaça/SC | PetPoint',
    metaDescription:
      'Calendário vacinal completo para pets em Morro da Fumaça/SC. Vacinas importadas e nacionais para cães e gatos com orientação veterinária. Agende na PetPoint.',
    keywords: [
      'vacinação pet morro da fumaça',
      'vacina cão gato',
      'calendário vacinal pet',
      'vacina antirrábica',
      'v10 v8 cão',
      'vacina gato tríplice',
      'veterinário vacinas sc',
    ],
    ogImage: '/images/clinica/vacinacao.webp',
    intro:
      'Vacina não é só para filhote. Muitos tutores vacinam o pet no primeiro ano de vida e depois param. O problema é que a proteção diminui com o tempo. Doenças como cinomose, parvovirose e leptospirose ainda matam cães não vacinados no Brasil todo.',
    whatIs:
      'A vacinação é a forma mais eficaz de proteger o seu pet contra doenças graves e, em alguns casos, fatais. As vacinas estimulam o sistema imunológico do animal a reconhecer e combater determinadas doenças. O calendário vacinal define quais vacinas aplicar, em que momento da vida e com que frequência repetir para manter a proteção ativa.',
    whenToSeek: [
      'O pet tem mais de 2 meses de vida e ainda não recebeu as vacinas de filhote',
      'Não sabe ou não lembra quando foi a última vacinação',
      'O pet vai passar por um período em contato com outros animais (hotel, creche, exposição)',
      'Você adotou um animal e não tem histórico vacinal',
      'O veterinário recomendou reforço anual que ainda não foi feito',
    ],
    howWeDoIt:
      'Na PetPoint, o calendário vacinal é definido em consulta. O veterinário considera a idade, o estilo de vida e a região onde o pet vive para indicar as vacinas necessárias. Trabalhamos com vacinas importadas e nacionais de laboratórios confiáveis. Cada aplicação fica registrada no cartão de vacinação e no prontuário do animal. O tutor recebe um aviso quando o próximo reforço estiver próximo.',
    faqs: [
      {
        question: 'Quais são as vacinas obrigatórias para cão?',
        answer:
          'A antirrábica é obrigatória por lei. Além dela, o protocolo recomendado inclui a V8 ou V10, que protege contra cinomose, parvovirose, coronavirose, leptospirose, hepatite infecciosa e outros agentes. A vacina contra tosse dos canis é recomendada para pets que têm contato com outros animais.',
      },
      {
        question: 'Com que idade o filhote pode começar a vacinar?',
        answer:
          'A partir de 45 a 60 dias de vida. O protocolo de filhotes costuma ter 3 doses iniciais com intervalo de 21 a 30 dias, seguidas do reforço anual. O veterinário define o calendário na primeira consulta.',
      },
      {
        question: 'Gato que vive só em casa também precisa vacinar?',
        answer:
          'Sim. Mesmo gatos que não saem de casa precisam das vacinas básicas. Vírus como o da panleucopenia felina podem ser trazidos para dentro de casa em roupas e sapatos. A proteção é importante independente do estilo de vida.',
      },
      {
        question: 'Quanto tempo depois da vacina o pet está protegido?',
        answer:
          'A proteção começa a se desenvolver a partir da segunda semana após a vacinação. Por isso o protocolo de filhotes usa várias doses: a imunidade vai sendo construída ao longo das aplicações.',
      },
    ],
  },

  // ─── 5. RAIO-X DIGITAL ────────────────────────────────────────────────────────
  {
    slug: 'raio-x-digital',
    title: 'RAIO-X Digital',
    subtitle: 'Diagnóstico por Imagem',
    category: 'Diagnóstico por Imagem',
    image: '/images/clinica/raio-x.webp',
    heroAlt: 'Raio-X digital veterinário com resultado imediato na PetPoint em Morro da Fumaça',
    author: 'vinicius',
    metaTitle: 'Raio-X Digital Veterinário em Morro da Fumaça | Diagnóstico Rápido | PetPoint',
    metaDescription:
      'Radiografia digital de alta resolução para cães e gatos em Morro da Fumaça/SC. Resultado imediato para diagnóstico preciso. Sem precisar encaminhar para outra clínica.',
    keywords: [
      'raio-x veterinário morro da fumaça',
      'radiografia digital pet',
      'diagnóstico por imagem veterinário',
      'raio-x cão gato',
      'radiografia veterinária sc',
      'fratura pet diagnóstico',
    ],
    ogImage: '/images/clinica/raio-x.webp',
    intro:
      'Quando um cão cai de um lugar alto ou um gato chega mancando sem causa aparente, o raio-x é o exame que mostra o que está acontecendo por dentro. Sem ele, o veterinário trabalha com hipóteses. Com ele, o diagnóstico é preciso e o tratamento começa no caminho certo.',
    whatIs:
      'O raio-x digital é uma radiografia que usa tecnologia digital para capturar imagens internas do corpo do pet com alta resolução e em segundos. O resultado aparece imediatamente na tela, sem a espera de revelação. Isso permite que o veterinário avalie ossos, pulmões, coração, abdômen e outros órgãos na mesma consulta e defina o tratamento sem precisar encaminhar o pet para outro lugar.',
    whenToSeek: [
      'O pet sofreu um traumatismo, queda ou acidente',
      'Ele está mancando sem causa aparente',
      'Há suspeita de corpo estranho engolido',
      'O veterinário precisa avaliar o tamanho do coração ou dos pulmões',
      'O pet está com dificuldade para respirar',
      'É necessário avaliar a coluna vertebral ou articulações',
    ],
    howWeDoIt:
      'O raio-x digital na PetPoint é feito com equipamento de alta resolução. O resultado fica disponível em minutos na mesma consulta. O Dr. Vinicius analisa as imagens diretamente com o tutor presente, explicando o que cada área mostra. Quando necessário, as imagens ficam salvas no prontuário digital do pet para comparação em consultas futuras.',
    faqs: [
      {
        question: 'O raio-x faz mal ao pet?',
        answer:
          'A dose de radiação usada em uma radiografia de diagnóstico é baixa e segura. O benefício de identificar o problema supera em muito qualquer preocupação com a exposição pontual ao raio-x.',
      },
      {
        question: 'O pet precisa de anestesia para fazer raio-x?',
        answer:
          'Na maioria dos casos, não. O pet precisa ficar imóvel por alguns segundos durante a exposição. Em animais muito agitados, com dor intensa ou quando é necessário um posicionamento específico, pode ser usado sedativo leve para garantir a qualidade da imagem.',
      },
      {
        question: 'O que o raio-x consegue mostrar?',
        answer:
          'Ossos e possíveis fraturas, luxações ou deformidades. Pulmões e coração para avaliar doenças respiratórias e cardíacas. Abdômen para ver o tamanho dos órgãos internos e identificar corpos estranhos.',
      },
      {
        question: 'Qual a diferença entre raio-x e ultrassom veterinário?',
        answer:
          'O raio-x é melhor para avaliar estruturas densas como ossos, pulmões e coração. O ultrassom é mais indicado para órgãos com tecido mole como fígado, baço, rins, útero e bexiga. Os dois exames se complementam.',
      },
    ],
  },

  // ─── 6. ULTRASSONOGRAFIA ──────────────────────────────────────────────────────
  {
    slug: 'ultrassonografia',
    title: 'Ultrassonografia',
    subtitle: 'Diagnóstico por Imagem',
    category: 'Diagnóstico por Imagem',
    image: '/images/clinica/ultrassonografia.webp',
    heroAlt: 'Ultrassonografia veterinária para cães e gatos na PetPoint em Morro da Fumaça',
    author: 'vinicius',
    metaTitle: 'Ultrassonografia Veterinária em Morro da Fumaça | Ultrassom Pet | PetPoint',
    metaDescription:
      'Exame de ultrassonografia para cães e gatos em Morro da Fumaça/SC. Avaliação de órgãos internos com equipamento de última geração. Resultado na mesma consulta na PetPoint.',
    keywords: [
      'ultrassonografia veterinária',
      'ultrassom pet morro da fumaça',
      'ultrassom cão gato',
      'exame abdominal pet',
      'diagnóstico por imagem veterinário sc',
      'ultrassom prenhez cadela',
      'órgãos internos pet exame',
    ],
    ogImage: '/images/clinica/ultrassonografia.webp',
    intro:
      'Alguns problemas de saúde em pets não aparecem no raio-x nem no exame de sangue. Quando um gato bebe muita água e o veterinário quer ver como estão os rins, ou quando uma cadela pode estar prenha, o ultrassom é o exame que dá as respostas com segurança e sem precisar abrir o animal.',
    whatIs:
      'A ultrassonografia usa ondas de som para criar imagens dos órgãos internos em tempo real. É um exame seguro, sem radiação e indolor. Permite avaliar o tamanho, a textura e a estrutura de órgãos como fígado, baço, rins, bexiga, útero e intestinos. Também é usada para guiar procedimentos como biopsia de agulha e coleta de líquido.',
    whenToSeek: [
      'O pet está bebendo muita água ou urinando mais do que o normal',
      'O veterinário encontrou algo suspeito no exame físico do abdômen',
      'Há suspeita de gravidez em cadela ou gata',
      'O pet está vomitando com frequência sem causa clara',
      'Exames de sangue mostraram alteração em fígado, rins ou pâncreas',
      'Há suspeita de tumor ou líquido acumulado na barriga',
    ],
    howWeDoIt:
      'O ultrassom na PetPoint é feito com aparelho de última geração. O procedimento não dói. O animal deita em uma mesa com gel sobre a pele e o equipamento desliza sobre o abdômen. Em geral o exame dura entre 15 e 30 minutos. O Dr. Vinicius analisa as imagens em tempo real e explica o que está vendo. O laudo fica disponível no mesmo dia.',
    faqs: [
      {
        question: 'Preciso preparar o pet antes do ultrassom?',
        answer:
          'Para ultrassom abdominal, o ideal é que o pet fique de 6 a 8 horas em jejum antes do exame. Isso reduz o gás nos intestinos e melhora a visualização dos órgãos. O veterinário orienta na hora do agendamento.',
      },
      {
        question: 'O ultrassom consegue detectar tumor?',
        answer:
          'Sim. O ultrassom identifica nódulos, massas e alterações de textura nos órgãos que podem sugerir tumor. A confirmação do diagnóstico exige biópsia e análise laboratorial do material coletado.',
      },
      {
        question: 'Com que idade a cadela pode fazer ultrassom de prenhez?',
        answer:
          'A partir de 25 a 30 dias após a cobertura já é possível visualizar os filhotes. Por volta de 45 dias o exame consegue dar uma estimativa do número de filhotes com mais precisão.',
      },
      {
        question: 'O pet pode ficar quieto durante o ultrassom sem sedação?',
        answer:
          'A maioria dos animais tolera bem o exame sem sedação. Em pets muito agitados ou com dor forte, pode ser necessário um sedativo leve para garantir a qualidade das imagens.',
      },
    ],
  },

  // ─── 7. ENDOSCOPIA ────────────────────────────────────────────────────────────
  {
    slug: 'endoscopia',
    title: 'Endoscopia',
    subtitle: 'Procedimento Não Invasivo',
    category: 'Procedimento',
    image: '/images/clinica/endoscopia.png',
    heroAlt: 'Endoscopia veterinária para diagnóstico e remoção de corpos estranhos na PetPoint',
    author: 'vinicius',
    metaTitle: 'Endoscopia Veterinária em Morro da Fumaça | Remoção de Corpo Estranho | PetPoint',
    metaDescription:
      'Endoscopia veterinária para diagnóstico e remoção de corpos estranhos em cães e gatos sem cirurgia. Disponível na PetPoint em Morro da Fumaça/SC.',
    keywords: [
      'endoscopia veterinária',
      'corpo estranho pet engolido',
      'endoscopia cão gato',
      'remoção corpo estranho sem cirurgia',
      'endoscopia digestiva veterinária',
      'veterinário endoscopia sc',
    ],
    ogImage: '/images/clinica/endoscopia.png',
    intro:
      'Cão que engoliu um brinquedo ou pedaço de osso não precisa necessariamente de cirurgia para retirar o objeto. A endoscopia consegue localizar e remover muitos corpos estranhos pelo mesmo caminho que eles entraram, sem fazer nenhum corte. Isso reduz o risco para o animal e o tempo de recuperação.',
    whatIs:
      'A endoscopia é um procedimento que usa um tubo fino e flexível com câmera na ponta para ver o interior do esôfago, estômago e início do intestino do animal. Além de diagnosticar problemas, serve para retirar objetos engolidos, coletar amostras de tecido para biópsia e tratar lesões internas sem cirurgia aberta. É feita com anestesia geral e o animal acorda sem ponto.',
    whenToSeek: [
      'O pet engoliu um objeto pequeno como botão, pedaço de brinquedo, osso ou moeda',
      'Ele está regurgitando, engasgando ou com dificuldade para engolir',
      'Vomita com frequência sem causa clara',
      'O veterinário identificou alteração no esôfago ou estômago e precisa de biópsia',
      'Há suspeita de sangramento no trato digestivo',
    ],
    howWeDoIt:
      'Antes da endoscopia, o Dr. Vinicius avalia o raio-x para localizar o objeto e decidir se o procedimento é viável. A endoscopia é feita com anestesia geral e dura em média de 20 a 40 minutos. O tutor não vê o pet durante o procedimento mas recebe informações durante e logo depois. Na maioria dos casos, o animal recebe alta no mesmo dia.',
    faqs: [
      {
        question: 'Qual a diferença entre endoscopia e cirurgia para retirar corpo estranho?',
        answer:
          'A endoscopia não faz corte. O equipamento entra pela boca do animal e retira o objeto pelo mesmo caminho. Quando funciona, é muito mais segura e a recuperação é mais rápida. A cirurgia fica como opção quando o objeto passou do estômago ou não é possível pegá-lo pelo endoscópio.',
      },
      {
        question: 'Todo corpo estranho engolido pode ser retirado por endoscopia?',
        answer:
          'Não. Objetos muito grandes, afiados ou que já chegaram ao intestino costumam precisar de cirurgia. O raio-x feito antes da endoscopia é o que define qual caminho é mais seguro para o animal.',
      },
      {
        question: 'Quanto tempo o pet fica internado após endoscopia?',
        answer:
          'Na maioria dos casos de remoção de corpo estranho simples, o pet vai para casa no mesmo dia. A recuperação é rápida porque não há incisão cirúrgica.',
      },
      {
        question: 'A endoscopia pode ser usada para ver outros problemas além de corpo estranho?',
        answer:
          'Sim. Serve para avaliar úlceras, inflamações, sangramento, pólipos e tumores no esôfago e estômago. A coleta de amostra por biópsia durante o exame é muito mais precisa do que tentar adivinhar pelo resultado do exame de sangue.',
      },
    ],
  },

  // ─── 8. ELETROQUIMIOTERAPIA ───────────────────────────────────────────────────
  {
    slug: 'eletroquimioterapia',
    title: 'Eletroquimioterapia',
    subtitle: 'Tratamento Oncológico',
    category: 'Tratamento Oncológico',
    image: '/images/clinica/eletroquimioterapia.png',
    heroAlt: 'Eletroquimioterapia veterinária para tratamento de tumores na PetPoint',
    author: 'vinicius',
    metaTitle: 'Eletroquimioterapia Veterinária | Tratamento de Tumor em Pets | PetPoint',
    metaDescription:
      'Eletroquimioterapia para tratamento de tumores em cães e gatos na PetPoint em Morro da Fumaça/SC. Tecnologia que potencializa a quimioterapia diretamente no tumor.',
    keywords: [
      'eletroquimioterapia veterinária',
      'eletroporação tumor pet',
      'tratamento tumor cão gato',
      'oncologia veterinária sc',
      'quimioterapia local pet',
      'eletroquimioterapia morro da fumaça',
      'tumor superficial pet tratamento',
    ],
    ogImage: '/images/clinica/eletroquimioterapia.png',
    intro:
      'Nem todo tumor em pet precisa de cirurgia de remoção. E nem toda quimioterapia precisa ser injetada na veia do animal. A eletroquimioterapia é uma tecnologia que aplica o medicamento diretamente no tumor e usa pulsos elétricos para fazer o remédio entrar nas células cancerígenas com muito mais eficiência.',
    whatIs:
      'A eletroquimioterapia combina dois recursos. O primeiro é uma dose baixa de quimioterápico aplicada localmente no tumor. O segundo são pulsos elétricos curtos aplicados sobre o tumor que abrem temporariamente as membranas das células tumorais, permitindo que o medicamento entre em quantidade muito maior do que conseguiria sozinho. O resultado é uma ação muito mais potente com menos efeito colateral sistêmico para o animal.',
    whenToSeek: [
      'O pet tem diagnóstico de tumor superficial acessível',
      'O tumor não é totalmente operável por estar em local de difícil acesso cirúrgico',
      'O oncologista avaliou a possibilidade de eletroquimioterapia como tratamento complementar',
      'O pet teve recidiva de tumor após cirurgia',
      'Você quer saber se há alternativas menos invasivas antes de optar pela cirurgia',
    ],
    howWeDoIt:
      'O Dr. Vinicius Wischneski é um dos poucos veterinários no estado com formação e equipamento para realizar eletroquimioterapia em pequenos animais. O procedimento é feito com anestesia geral e dura em média 30 minutos. O número de sessões depende do tipo e do tamanho do tumor. Em muitos casos, os resultados aparecem nas primeiras semanas após o tratamento.',
    faqs: [
      {
        question: 'A eletroquimioterapia substitui a cirurgia?',
        answer:
          'Em alguns casos sim, especialmente em tumores que não podem ser completamente removidos por cirurgia. Em outros, ela é usada junto com a cirurgia para aumentar a chance de remissão completa. A decisão é feita caso a caso.',
      },
      {
        question: 'Quais tipos de tumor podem ser tratados com eletroquimioterapia?',
        answer:
          'Tumores superficiais acessíveis como carcinoma de células escamosas, mastocitoma e melanoma são os mais tratados. O Dr. Vinicius avalia cada caso individualmente para definir se o procedimento é indicado.',
      },
      {
        question: 'O pet sente dor durante a eletroquimioterapia?',
        answer:
          'Não. O procedimento é feito sob anestesia geral. Os pulsos elétricos são aplicados quando o animal está dormindo. A recuperação da anestesia é o período de maior atenção.',
      },
      {
        question: 'Quantas sessões de eletroquimioterapia são necessárias?',
        answer:
          'Depende do tipo de tumor e da resposta ao tratamento. Em geral, de 1 a 3 sessões com intervalo de 4 a 6 semanas. O Dr. Vinicius define o protocolo na consulta de avaliação oncológica.',
      },
    ],
  },

  // ─── 9. URGÊNCIAS E EMERGÊNCIAS ───────────────────────────────────────────────
  {
    slug: 'urgencias-emergencias',
    title: 'Urgências e Emergências',
    subtitle: 'Atendimento Rápido',
    category: 'Emergência',
    image: '/images/clinica/urgencia.webp',
    heroAlt: 'Atendimento de urgência e emergência veterinária na PetPoint em Morro da Fumaça',
    author: 'equipe',
    metaTitle: 'Urgência e Emergência Veterinária em Morro da Fumaça | PetPoint',
    metaDescription:
      'Atendimento de urgência veterinária em Morro da Fumaça/SC. Equipe preparada para situações críticas com cães e gatos. Entre em contato pelo WhatsApp da PetPoint.',
    keywords: [
      'urgência veterinária morro da fumaça',
      'emergência pet sc',
      'veterinário urgência',
      'pet doente urgente',
      'veterinário fim de semana morro da fumaça',
      'emergência cão gato',
    ],
    ogImage: '/images/clinica/urgencia.webp',
    intro:
      'Algumas situações com pets não esperam o horário de consulta. Animal que parou de respirar direito, que foi atropelado, que ingeriu veneno ou que está convulsionando precisa de atendimento agora. A PetPoint tem equipe preparada para situações críticas.',
    whatIs:
      'O atendimento de urgência e emergência veterinária é o suporte imediato a animais em situação crítica ou que precisam de avaliação rápida. É diferente do atendimento de rotina: não precisa de agendamento e o foco é estabilizar o animal e definir o que está acontecendo no menor tempo possível. A PetPoint orienta o tutor pelo WhatsApp antes mesmo de chegarem à clínica.',
    whenToSeek: [
      'O pet foi atropelado ou sofreu trauma físico grave',
      'Ele está com dificuldade para respirar ou respirando de forma diferente',
      'Convulsão ou tremores intensos',
      'Suspeita de intoxicação ou ingestão de veneno',
      'Vômitos ou diarreia com sangue',
      'O animal está inconsciente ou sem resposta',
      'Barriga distendida e o pet não consegue se levantar (pode ser torção gástrica)',
      'Sangramento que não para',
    ],
    howWeDoIt:
      'Quando o tutor entra em contato pelo WhatsApp (48) 99912-0084, a equipe já orienta sobre o que fazer enquanto se desloca até a clínica. Na chegada, o pet é avaliado com prioridade. A equipe tem estrutura para estabilizar, examinar e iniciar o tratamento sem perda de tempo. Em casos que exigem procedimentos cirúrgicos de urgência, o Dr. Vinicius é acionado.',
    faqs: [
      {
        question: 'Preciso agendar para atendimento de urgência?',
        answer:
          'Não. Urgências são atendidas sem agendamento. Entre em contato pelo WhatsApp (48) 99912-0084 para orientação imediata sobre o caso do seu pet.',
      },
      {
        question: 'O que fazer enquanto levo o pet de urgência para a clínica?',
        answer:
          'Mantenha o animal calmo e aquecido. Não tente dar remédio humano. Não force o animal a comer ou beber. Em caso de sangramento, faça pressão com um pano limpo. O mais importante é se deslocar rápido e avisar a clínica pelo WhatsApp antes de chegar.',
      },
      {
        question: 'Meu pet ingeriu veneno. Devo esperar aparecer sintomas?',
        answer:
          'Não. Intoxicações exigem atendimento imediato mesmo antes dos sintomas aparecerem. Quanto mais cedo o tratamento começar, melhores as chances de recuperação. Leve o pet agora e, se souber o que foi ingerido, leve a embalagem ou anote o nome.',
      },
      {
        question: 'A PetPoint tem UTI veterinária?',
        answer:
          'A PetPoint tem estrutura para estabilização e monitoramento de pacientes críticos. Em casos que exigem internação prolongada, a equipe orienta sobre as melhores opções disponíveis na região.',
      },
    ],
  },
];

/** Retorna uma especialidade pelo slug */
export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}

/** Retorna todos os slugs (usado em generateStaticParams) */
export function getAllSpecialtySlugs(): { slug: string }[] {
  return specialties.map((s) => ({ slug: s.slug }));
}
