/**
 * lib/posts-data.ts — Blog Post Metadata Registry
 *
 * Fonte única de metadados dos artigos do blog (título, data, autor, FAQ,
 * mentions, etc). O corpo de cada artigo vive em `content/blog/{slug}/index.mdx`
 * — arquivos MDX puros, sem frontmatter — compilados em build time via
 * @next/mdx (import estático em app/blog/[slug]/page.tsx).
 *
 * Por que separar metadados do corpo: @next/mdx compila .mdx como módulo
 * de import estático, não como string renderizada em runtime (que era como
 * next-mdx-remote funcionava). Isso exige que o corpo do arquivo seja MDX
 * puro. Também evita reprocessar YAML a cada build — é só um array TS,
 * importável tanto pelo app quanto pelos scripts de build (Node 24+ roda
 * .ts nativamente).
 *
 * Ao criar um novo artigo:
 *  1. Adicionar os metadados aqui
 *  2. Criar content/blog/{slug}/index.mdx com o corpo (sem frontmatter, sem H1)
 *  3. Importar o novo .mdx no CONTENT_REGISTRY de app/blog/[slug]/page.tsx
 *  4. Rodar scripts/generate-search-index.mjs
 */

import type { BlogPostMeta } from '../types';

export const POSTS_META: BlogPostMeta[] = [
  {
    title: 'Longevidade: O segredo está na prevenção precoce',
    slug: 'longevidade-prevencao',
    date: '2025-06-15',
    author: 'Dr. Vinicius Wischneski',
    category: 'Saúde Canina',
    tags: ['prevenção', 'check-up', 'longevidade', 'saúde pet', 'cães'],
    excerpt: 'Descubra como check-ups regulares e cuidados preventivos podem garantir uma vida longa e saudável ao seu pet.',
    coverImage: '/images/blog/longevidade-prevencao/cover.webp',
    readingTime: 7,
    published: true,
    faqs: [
      {
        question: 'Com que frequência devo levar meu pet ao veterinário para check-up?',
        answer: 'Depende da fase de vida. Filhotes até 1 ano devem ir a cada 3 meses. Adultos de 1 a 7 anos, uma vez por ano. A partir dos 7 anos, o ideal é um check-up a cada 6 meses.',
      },
      {
        question: 'Meu pet parece saudável. Ainda assim preciso levar ao veterinário?',
        answer: 'Sim. Cães e gatos escondem desconforto por instinto, então muitas doenças graves como insuficiência renal, diabetes e câncer só aparecem visivelmente quando já estão avançadas. O check-up detecta essas alterações antes dos sintomas.',
      },
      {
        question: 'O que é avaliado em um check-up veterinário completo?',
        answer: 'Um check-up completo inclui exame físico, hemograma e bioquímica para avaliar os órgãos internos, avaliação do peso e condição corporal, e revisão do calendário de vacinas e vermífugos.',
      },
      {
        question: 'Quais sinais indicam que meu pet precisa ir ao veterinário com urgência?',
        answer: 'Perda de peso sem motivo aparente, mudança no apetite ou na sede, sonolência excessiva, alteração no xixi ou nas fezes, e qualquer nódulo ou crescimento na pele. Esses sinais merecem atenção imediata, sem esperar a próxima consulta de rotina.',
      },
      {
        question: 'A partir de que idade o pet é considerado idoso?',
        answer: 'A partir dos 7 anos. Nessa fase, recomendamos check-up semestral em vez de anual, porque o risco de doenças crônicas aumenta e o diagnóstico precoce faz mais diferença.',
      },
    ],
    mentions: [
      { name: 'American Veterinary Medical Association (AVMA)', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/importance-wellness-exams' },
      { name: 'American College of Veterinary Internal Medicine (ACVIM)', url: 'https://www.acvim.org/resources-tools/primary-care-veterinarians' },
    ],
  },
  {
    title: 'Entendendo a linguagem corporal dos felinos',
    slug: 'linguagem-felinos',
    date: '2025-06-28',
    author: 'Dr. Vinicius Wischneski',
    category: 'Comportamento',
    tags: ['gatos', 'comportamento', 'linguagem corporal', 'bem-estar', 'bigodes', 'ronronar'],
    excerpt: 'Aprenda a interpretar os sinais que seu gato usa para se comunicar, da cauda aos bigodes, e fortaleça o vínculo com ele.',
    coverImage: '/images/blog/linguagem-felinos/cover.webp',
    readingTime: 8,
    published: true,
    faqs: [
      {
        question: 'O que significa o rabo do gato levantado?',
        answer: 'Rabo erguido verticalmente indica que o gato está feliz, confiante e sociável. Já um rabo baixo ou entre as pernas costuma indicar medo, submissão ou algum desconforto.',
      },
      {
        question: 'Se meu gato mostra a barriga, ele está pedindo carinho ali?',
        answer: 'Não necessariamente. Mostrar a barriga é principalmente um sinal de confiança e vulnerabilidade, não um convite garantido para cafuné no abdômen. Cada gato tem sua própria preferência, então vale observar a reação antes de insistir.',
      },
      {
        question: "Por que meu gato 'faz biscoito' com as patinhas?",
        answer: 'Esse comportamento vem da fase de filhote, quando o gatinho amassava a barriga da mãe para estimular a produção de leite. Na vida adulta, indica que o gato está confortável e feliz no momento.',
      },
      {
        question: 'O que significa quando as orelhas do gato ficam achatadas?',
        answer: 'Orelhas voltadas para trás e achatadas contra a cabeça indicam medo ou agressividade. Nesse momento, o ideal é respeitar o espaço do animal e não insistir em contato.',
      },
      {
        question: "O que é o 'piscar lento' dos gatos?",
        answer: 'É o equivalente felino de um sorriso: quando o gato pisca devagar olhando para você, está demonstrando confiança e afeto. Piscar devagar de volta é uma forma de responder na mesma linguagem.',
      },
      {
        question: 'Os bigodes do gato servem só de enfeite?',
        answer: 'Não. Os bigodes, ou vibrissas, são órgãos sensoriais conectados a terminações nervosas profundas. Ajudam o gato a medir distâncias e sentir vibrações no ar. Quando ficam colados ao rosto, geralmente indicam medo, dor ou desconforto.',
      },
      {
        question: 'Gato ronronando é sempre sinal de que está feliz?',
        answer: 'Não. Gatos também ronronam quando estão com dor, estressados ou em situações de risco, como forma de se autoacalmar. O contexto importa mais que o som isolado: se o ronronar vem acompanhado de corpo tenso ou orelhas achatadas, pode ser sinal de desconforto.',
      },
      {
        question: 'Como saber se a mudança de comportamento do meu gato é sinal de problema de saúde?',
        answer: 'Fique atento a esconder-se mais que o normal, agressividade incomum, parar de usar a caixa de areia, mudança nos hábitos alimentares e vocalização excessiva. Mudanças repentinas de comportamento costumam indicar desconforto ou dor, e merecem uma consulta veterinária.',
      },
    ],
    mentions: [
      { name: 'Feline Veterinary Medical Association (FelineVMA)', url: 'https://catvets.com/resource/feline-behavior-guidelines/' },
    ],
  },
  {
    title: 'Alimentação natural vs. Ração Premium: O veredito',
    slug: 'alimentacao-natural',
    date: '2025-07-05',
    author: 'Dr. Vinicius Wischneski',
    category: 'Nutrição',
    tags: ['nutrição', 'alimentação natural', 'ração premium', 'saúde pet'],
    excerpt: 'Natural ou industrializado? Explicamos por que rações premium e super premium são a recomendação padrão, e quando a alimentação natural realmente faz sentido.',
    coverImage: '/images/blog/alimentacao-natural/cover.webp',
    readingTime: 7,
    published: true,
    faqs: [
      {
        question: 'Devo trocar a ração do meu pet por alimentação natural?',
        answer: 'Na maioria dos casos, não é necessário. Rações premium e super premium já oferecem nutrição completa e balanceada, testada cientificamente. A alimentação natural só é indicada quando há prescrição e acompanhamento de um médico veterinário, geralmente por uma condição de saúde específica.',
      },
      {
        question: 'O que é alimentação natural para pets?',
        answer: 'É a preparação de refeições frescas e balanceadas para cães e gatos, usando ingredientes in natura como carnes, vegetais, legumes e suplementos específicos. Precisa ser formulada e acompanhada por um médico veterinário, porque um erro na proporção dos nutrientes pode causar deficiências sérias.',
      },
      {
        question: 'Quais os riscos de fazer alimentação natural sem acompanhamento veterinário?',
        answer: 'Desbalanceamento nutricional, com deficiência ou excesso de nutrientes essenciais, é o principal risco. Sem uma formulação profissional, é fácil errar nas proporções mesmo usando ingredientes de boa qualidade, o que pode levar a problemas de saúde a médio e longo prazo.',
      },
      {
        question: 'Quando a alimentação natural é realmente indicada?',
        answer: 'Quando um médico veterinário prescreve e acompanha o plano alimentar, geralmente para pets com alergias específicas, doenças que exigem controle rígido de nutrientes, ou necessidades que a ração industrializada não atende no caso daquele animal.',
      },
      {
        question: 'Como escolher uma ração premium ou super premium de qualidade?',
        answer: 'Verifique se a fonte de proteína animal, como frango, carne ou salmão, aparece como primeiro ingrediente, se não há excesso de corantes e conservantes sintéticos, se a análise garantida está clara no rótulo, e se a marca tem estudos nutricionais publicados e adequação à espécie, porte e fase de vida do animal.',
      },
      {
        question: 'Ração premium é segura e suficiente para o meu pet?',
        answer: 'Sim. Rações premium e super premium passaram por décadas de pesquisa e seguem parâmetros como as diretrizes globais de nutrição da WSAVA. Para a grande maioria dos pets saudáveis, são a opção mais segura, prática e com melhor custo-benefício.',
      },
    ],
    mentions: [
      { name: 'World Small Animal Veterinary Association (WSAVA)', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' },
    ],
  },
  {
    title: 'PetPoint entra em nova fase: equipe ampliada e novas especialidades',
    slug: 'petpoint-nova-fase',
    date: '2025-12-04',
    author: 'Dr. Vinicius Wischneski',
    category: 'Novidades',
    tags: ['novidades', 'equipe', 'oncologia', 'anestesia', 'dermatologia', 'endoscopia', 'eletroquimioterapia', 'morro da fumaça'],
    excerpt: 'A PetPoint amplia o corpo clínico e passa a oferecer oncologia veterinária, anestesia para pequenos animais, dermatologia veterinária, endoscopia e eletroquimioterapia, no mesmo endereço em Morro da Fumaça.',
    coverImage: '/images/blog/petpoint-nova-fase/nova-fase.png',
    readingTime: 4,
    published: true,
    faqs: [
      {
        question: 'O endereço da PetPoint mudou?',
        answer: 'Não. A estrutura continua no mesmo endereço em Morro da Fumaça. O que muda é o corpo clínico, agora maior e com novas especialidades disponíveis no local.',
      },
      {
        question: 'Quais novas especialidades a PetPoint passou a oferecer?',
        answer: 'Oncologia veterinária, anestesia para pequenos animais, dermatologia veterinária, endoscopia e eletroquimioterapia. Antes, tutores que precisavam desses atendimentos especializados muitas vezes tinham que buscar clínicas em outras cidades.',
      },
      {
        question: 'Quem lidera a equipe clínica agora?',
        answer: 'O Dr. Vinicius Wischneski segue como Diretor Clínico, com atuação direta em cirurgia e oncologia de pequenos animais.',
      },
      {
        question: 'Pets com câncer ou problemas de pele agora podem ser tratados na PetPoint?',
        answer: 'Sim. Com a chegada da oncologia veterinária e da dermatologia veterinária ao corpo clínico, casos de câncer e de doenças de pele, incluindo alergias, passam a ter acompanhamento especializado dentro da própria clínica.',
      },
    ],
    mentions: [
      { name: 'Agora na Cidade', url: 'https://agoranacidade.com.br/noticia/7130' },
    ],
  },
  {
    title: 'Como escovar os dentes de cães e gatos?',
    slug: 'como-escovar-dentes',
    date: '2026-07-16',
    author: 'Dra. Larissa Wischneski',
    category: 'Odontologia',
    tags: ['higiene bucal', 'dentes', 'odontologia pet', 'prevenção'],
    excerpt: 'Aprenda o passo a passo para acostumar seu cão ou gatinho com a escovação e evite problemas graves no futuro.',
    coverImage: '/images/blog/como-escovar-dentes/cover.webp',
    readingTime: 6,
    published: true,
    faqs: [
      {
        question: 'Posso usar pasta de dente humana no meu pet?',
        answer: 'Nunca use pasta de dente humana. Ela contém flúor e xilitol, substâncias altamente tóxicas para cães e gatos, que podem causar intoxicações graves.',
      },
      {
        question: 'Com que frequência devo escovar os dentes do meu pet?',
        answer: 'O ideal é escovar todos os dias, mas se não for possível, fazer isso de três a quatro vezes por semana já ajuda bastante a evitar o acúmulo de tártaro.',
      },
      {
        question: 'O que fazer se o meu pet não aceitar a escovação?',
        answer: 'Vá com muita calma e paciência. Se a escova for rejeitada, você pode tentar dedeiras de silicone ou até mesmo gazes enroladas no dedo com a pasta de dente. Se ainda assim não der, consulte o veterinário sobre petiscos e brinquedos odontológicos certificados.',
      },
    ],
    mentions: [
      { name: '2019 AAHA Dental Care Guidelines for Dogs and Cats', url: 'https://pubmed.ncbi.nlm.nih.gov/30776257/' },
      { name: 'Dental Home Care Instructions (UC Davis School of Veterinary Medicine)', url: 'https://healthtopics.vetmed.ucdavis.edu/health-topics/canine/dental-home-care-instructions' },
    ],
  },
  {
    title: 'Sinais silenciosos: Como saber se seu pet está com dor',
    slug: 'sinais-dor-silenciosa',
    date: '2026-07-16',
    author: 'Dr. Vinicius Wischneski',
    category: 'Bem-estar',
    tags: ['sinais de dor', 'dor silenciosa', 'comportamento pet', 'prevenção'],
    excerpt: 'Pets escondem o sofrimento físico por instinto de sobrevivência. Aprenda a reconhecer os sinais mais sutis de dor em cães e gatos.',
    coverImage: '/images/blog/sinais-dor-silenciosa/cover.webp',
    readingTime: 6,
    published: true,
    faqs: [
      {
        question: 'Como os cães costumam demonstrar dor?',
        answer: 'Cães podem lamber excessivamente uma pata ou articulação, relutar em subir no sofá, mudar o apetite ou se afastar das pessoas da casa.',
      },
      {
        question: 'Como os gatos demonstram dor?',
        answer: 'Gatos com dor costumam se esconder em locais escuros, parar de se lamber, ficar agressivos ao toque ou urinar fora da caixa de areia.',
      },
      {
        question: 'O que fazer ao suspeitar que o pet está com dor?',
        answer: 'Nunca dê medicamentos humanos (como paracetamol ou ibuprofeno, que são veneno para pets). Agende uma consulta veterinária para que o profissional possa identificar a causa e prescrever o analgésico adequado.',
      },
    ],
    mentions: [
      { name: 'World Small Animal Veterinary Association (WSAVA) Pain Committee', url: 'https://wsava.org/committees/global-pain-council/' },
    ],
  },
  {
    title: 'Quais são as vacinas obrigatórias para filhotes?',
    slug: 'vacinas-obrigatorias-filhotes',
    date: '2026-07-16',
    author: 'Dr. Vinicius Wischneski',
    category: 'Imunização',
    tags: ['vacinas', 'filhotes', 'prevenção', 'saúde pet', 'v8', 'v10', 'v4', 'v5'],
    excerpt: 'Entenda o calendário de vacinação essencial para cães e gatos no Brasil e garanta a proteção do seu filhote desde as primeiras semanas.',
    coverImage: '/images/blog/vacinas-obrigatorias-filhotes/cover.webp',
    readingTime: 6,
    published: true,
    faqs: [
      {
        question: 'Com quantas semanas o filhote deve tomar a primeira vacina?',
        answer: 'Tanto para cães quanto para gatos, a primeira dose da vacina múltipla deve ser aplicada entre seis e oito semanas de vida.',
      },
      {
        question: 'O filhote pode passear na rua antes de terminar as vacinas?',
        answer: 'Não é recomendado. O filhote só deve ter contato com a rua ou com outros animais após receber todas as doses do protocolo inicial e a dose de reforço da vacina múltipla e da raiva, o que costuma acontecer por volta dos quatro meses de idade.',
      },
      {
        question: 'Qual a diferença entre a vacina V8 e V10 para cães?',
        answer: 'A vacina V8 protege contra oito doenças graves, incluindo cinomose e parvovirose. A V10 protege contra as mesmas doenças e adiciona proteção contra mais dois sorotipos de leptospirose, sendo muito indicada no Brasil.',
      },
      {
        question: 'Por que a vacina antirrábica é obrigatória por lei?',
        answer: 'Porque protege contra a raiva, uma zoonose fatal transmissível de cães e gatos para seres humanos e sem cura após o aparecimento dos sintomas. A obrigatoriedade em todo o território nacional está amparada pela Lei nº 6.259/1975, que criou o Programa Nacional de Imunizações, regulamentada pelo Decreto nº 78.231/1976.',
      },
      {
        question: 'Meu cão precisa de vacinas além da múltipla e da antirrábica?',
        answer: 'Depende do estilo de vida dele. Cães que frequentam creche, pet shop, hotel para animais ou convivem com muitos outros cães se beneficiam da vacina contra tosse dos canis. Já a vacina contra giardíase é indicada para cães com alto risco ambiental de contaminação, como filhotes vindos de criadores com histórico de surto. O veterinário avalia caso a caso.',
      },
    ],
    mentions: [
      { name: 'WSAVA Vaccination Guidelines Group', url: 'https://wsava.org/global-guidelines/vaccination-guidelines/' },
      { name: 'Lei nº 6.259/1975 (Programa Nacional de Imunizações)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l6259.htm' },
    ],
  },
];
