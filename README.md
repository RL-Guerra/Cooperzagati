# Documentação de Software - Aplicativo de Coleta de Óleo - Cooperzagati

## 1. Introdução
- **Objetivo do Projeto**: O aplicativo tem como objetivo facilitar a coleta de óleo usado, conscientizando a comunidade sobre a importância de descartar o óleo corretamente, promovendo ações voluntárias e de doação para a ONG Cooperzagati de Taboão da Serra.
- **Público-Alvo**: Moradores de Taboão da Serra e regiões vizinhas, voluntários e pessoas interessadas em descartar óleo de cozinha usado de maneira correta e sustentável.
- **Escopo do Projeto**: O aplicativo irá fornecer informações sobre a ONG Cooperzagati, pontos de coleta de óleo, acompanhar a quantidade de óleo arrecadada e doada, além de permitir que usuários se registrem, se voluntariem e consultem dados de arrecadação.

- **Tecnologias Utilizadas**:
  - **Frontend**: React Native
  - **Backend**: Node.js / Firebase (para autenticação e banco de dados)
  - **APIs**: Firebase, Google Maps (para localização), etc.
  - **Plataformas**: Android e iOS

---

## 2. Requisitos Funcionais
1. **Tela de Cadastro**:
   - O usuário pode se cadastrar informando dados como nome, e-mail, telefone e endereço.
   - O cadastro será necessário para o monitoramento da quantidade de óleo entregue.

2. **Tela de Login**:
   - Permite que o usuário faça login usando seu e-mail e senha cadastrados.

3. **Tela de Apresentação sobre o App Comunitário**:
   - Descrição do objetivo do app e a missão da ONG Cooperzagati, com foco em conscientização sobre o descarte correto de óleo.

4. **Tela sobre Sustentabilidade e Importância do Descarte Correto de Óleo**:
   - Informações educativas sobre os impactos ambientais do descarte inadequado de óleo e como a ONG contribui para a sustentabilidade.

5. **Tela "Onde Estamos Localizados"**:
   - Exibição de um mapa com os pontos de coleta de óleo disponíveis em Taboão da Serra e regiões próximas, utilizando a API do Google Maps.

6. **Tela de Doações Totais**:
   - Mostra o total de litros de óleo arrecadados até o momento pela ONG Cooperzagati.

7. **Tela de Histórico de Atividades**:
   - Exibe um histórico das interações do usuário com o aplicativo, incluindo:
     - **Doações**: A quantidade de óleo que o usuário já doou, com datas e pontos de coleta.
     - **Atividades de Voluntariado**: Registro de todas as ações de voluntariado que o usuário participou.
     - **Acompanhamento de Metas**: Se houver metas mensais ou anuais de doações, o usuário pode acompanhar seu progresso em relação a essas metas.

8. **Tela "Quero Doar"**:
   - Permite ao usuário registrar sua doação de óleo, escolher um ponto de coleta, inserir a quantidade doada e confirmar a doação.
   - **Escolha do Ponto de Coleta**: O usuário pode selecionar um ponto de coleta próximo utilizando um mapa interativo.
   - **Quantidade de Óleo para Doação**: O usuário pode inserir a quantidade de óleo que deseja doar.
   - **Confirmação de Doação**: Após o preenchimento, o usuário confirma a doação e recebe um resumo com a quantidade doada, o ponto de coleta e a data da entrega.
   - **Motivação e Agradecimento**: O usuário recebe uma mensagem de agradecimento e incentivo para se tornar voluntário ou continuar doando.

9. **Tela "Seja Voluntário"**:
   - Permite ao usuário, além de doar, se cadastrar como voluntário para ajudar na coleta e outras atividades da ONG.

---

## 3. Requisitos Não Funcionais
- **Desempenho**: O aplicativo deve ser leve e carregar rapidamente, principalmente as telas de mapa e as informações de doações.
- **Segurança**: O sistema de login e cadastro deve garantir a segurança dos dados do usuário, incluindo criptografia de senha.
- **Compatibilidade**: O aplicativo deve ser compatível com dispositivos Android e iOS, nas versões mais recentes.
- **Escalabilidade**: O sistema deve ser capaz de lidar com um aumento de usuários e pontos de coleta ao longo do tempo.

---

## 4. Arquitetura do Sistema
- **Diagrama de Arquitetura**: 
  (Inserir diagrama de arquitetura que mostre a interação entre o front-end, o back-end e as APIs externas como o Google Maps, Firebase, etc.)

- **Descrição da Arquitetura**: A arquitetura do sistema será baseada em uma estrutura cliente-servidor, com o frontend desenvolvido em React Native/Flutter e o backend utilizando Firebase para autenticação e armazenamento de dados.

- **Tecnologias e Ferramentas**:
  - **Frontend**: React Native ou Flutter
  - **Backend**: Firebase (Autenticação, Realtime Database)
  - **API de Mapas**: Google Maps API para localização de pontos de coleta
  - **Analytics**: Google Analytics/Firebase Analytics para monitoramento do uso do app

---

## 5. Design de Interface
- **Wireframes e Protótipos**: 
  (Inserir wireframes ou imagens das telas principais)
  
- **Guia de Estilo**:
  - **Cores**: Verde e azul (cores que refletem sustentabilidade e confiança)
  - **Fontes**: Fontes legíveis, como Roboto ou Open Sans
  - **Elementos Visuais**: Ícones relacionados à coleta de óleo, sustentabilidade e ação comunitária.

- **Fluxo de Usuário**:
  1. Tela de Apresentação → Tela de Cadastro/Login → Tela Principal (Onde estamos localizados)
  2. O usuário pode acessar a tela de "Doações Totais", "Histórico de Atividades", "Quero Doar" e "Seja Voluntário" do menu.

---

## 6. APIs e Integrações
- **API de Autenticação**: Firebase Authentication (para login e cadastro)
- **API de Localização**: Google Maps API (para exibir pontos de coleta)
- **Banco de Dados**: Firebase Realtime Database ou Firestore (para armazenar dados de doações, cadastro e informações sobre os pontos de coleta)

---

## 7. Plano de Testes
- **Testes Funcionais**:
  - Testar o fluxo de cadastro e login.
  - Testar a precisão da localização dos pontos de coleta no mapa.
  - Testar a exibição do total de litros doados e a quantidade individual por usuário.
  - Validar o envio de dados de doação e voluntariado.
  
- **Testes Não Funcionais**:
  - Testar a performance do app, garantindo carregamento rápido das telas.
  - Testar a segurança da autenticação e armazenamento de dados.

- **Estratégia de Testes**:
  - Utilização de ferramentas como **Appium** ou **XCTest** para automação dos testes.

---

## 8. Gerenciamento de Versões e Deploy
- **Controle de Versão**: Git, hospedado no GitHub.
- **Processo de Deploy**: Utilização de **Fastlane** para automação do deploy nas lojas de aplicativos (App Store e Google Play).
- **CI/CD**: Integração contínua com **GitHub Actions** ou **CircleCI** para builds automáticos e deploy contínuo.

---

## 9. Manutenção e Suporte
- **Plano de Atualizações**: Atualizações mensais para correção de bugs, melhorias e inclusão de novos pontos de coleta.
- **Suporte ao Usuário**: Suporte via e-mail ou chat no aplicativo para dúvidas sobre o uso do app e sobre a ONG.

---

## 10. Considerações Finais
- **Conclusão**: Este aplicativo ajudará a ONG Cooperzagati a aumentar a conscientização sobre o descarte correto de óleo e facilitará a participação da comunidade. As funcionalidades de monitoramento e voluntariado também irão engajar mais pessoas na causa.
- **Referências**: 
  - Links para mais informações sobre a Cooperzagati.
  - Referências sobre sustentabilidade e descarte de óleo.

---

## Estrutura de Arquivo

```plaintext
Projeto-Cooperzagati-App
│
├── README.md                # Documentação geral do projeto
├── docs/
│   ├── arquitetura.md       # Arquitetura do sistema
│   ├── requisitos.md        # Requisitos do aplicativo
│   ├── design.md            # Design de UI
│   └── testes.md            # Plano de testes
├── src/                     # Código-fonte do aplicativo
│   ├── assets/              # Imagens, ícones e outros recursos
│   ├── components/          # Componentes reutilizáveis
│   ├── screens/             # Telas principais
│   ├── services/            # Serviços de API
│   └── utils/               # Funções utilitárias
└── package.json             # Configuração do projeto (para projetos baseados em Node)
