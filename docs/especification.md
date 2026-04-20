# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Perfis de Usuários

Os perfis de usuários na plataforma são definidos por sua atuação dentro do sistema, podendo atuar como consumidores de serviços, prestadores ou voluntários, dependendo da necessidade e contexto.

| **Dados**                    | **Descrição** |
|------------------------------|----------------|
| **Demográficos**             | Jovens e adultos de diferentes idades, incluindo pessoas em situação de vulnerabilidade social, trabalhadores autônomos e estudantes. |
| **Uso do Produto**           | Utilizam a plataforma para buscar serviços acessíveis, oferecer habilidades profissionais ou atuar como voluntários em demandas sociais e comunitárias. |
| **Psicográficos**            | Buscam acesso facilitado a serviços, geração de renda, ajuda comunitária e oportunidades de colaboração social. |
| **Sentimento do Cliente**    | Precisam de soluções acessíveis e confiáveis para resolver problemas do dia a dia, além de oportunidades para divulgar ou oferecer seus serviços. |
| **Tecnográficos**            | Utilizam principalmente smartphones, mas também podem acessar via desktop ou tablet. |
| **Nível de conhecimento tecnológico** | Possuem desde conhecimento básico até intermediário em uso de plataformas digitais. |
| **Necessidades**             | 1. Encontrar serviços acessíveis ou gratuitos. <br>2. Oferecer serviços e habilidades de forma simples. <br>3. Ter confiança e segurança nas transações. <br>4. Avaliar e ser avaliado para gerar credibilidade na plataforma. |

## Personas


Maria Aparecida tem 45 anos, trabalha como diarista e mora na periferia. Possui renda limitada e dificuldade para acessar serviços como manutenção doméstica, apoio psicológico e reforço escolar para seus filhos, ela utiliza o celular como principal meio de acesso à internet e busca soluções acessíveis e confiáveis para resolver problemas do dia a dia, seu principal objetivo é encontrar serviços com preço justo ou gratuito, com facilidade de acesso e segurança.

João Carlos tem 30 anos e trabalha como eletricista autônomo. Ele busca aumentar sua renda oferecendo serviços a preços acessíveis para a comunidade, possui conhecimento técnico, mas tem dificuldade em divulgar seu trabalho e encontrar clientes de forma constante, seu objetivo é utilizar a plataforma para divulgar seus serviços, conseguir clientes e também participar de ações voluntárias.

Ana tem 23 anos e é estudante universitária. Ela participa de projetos sociais e deseja oferecer serviços voluntários, principalmente na área de educação, seu objetivo é encontrar pessoas que precisam de ajuda e atuar como voluntária.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

## Histórias de Usuários

| EU COMO...                | QUERO/PRECISO...                              | PARA...                                      |
|--------------------------|-----------------------------------------------|----------------------------------------------|
| Usuário                  | me cadastrar no sistema                       | acessar os serviços da plataforma           |
| Usuário                  | buscar serviços por categoria                 | encontrar rapidamente o que preciso         |
| Usuário                  | visualizar detalhes de um serviço             | entender melhor antes de solicitar          |
| Usuário                  | solicitar um serviço                          | resolver uma necessidade específica         |
| Prestador de serviço     | cadastrar meus serviços                       | oferecer meu trabalho                        |
| Prestador de serviço     | criar um perfil                               | ser encontrado por clientes                 |
| Voluntário              | oferecer serviços gratuitos                   | ajudar pessoas em situação de vulnerabilidade |
| Usuário                  | avaliar serviços recebidos                    | ajudar outros usuários na escolha           |
| Usuário                  | ver perfis de prestadores                    | escolher alguém confiável                   |
| Usuário                  | ver sugestões de serviços                     | encontrar opções de interesse rapidamente   |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                 | Prioridade |
|--------|----------------------------------------------------------------------------------------|------------|
| RF-001 | A aplicação deve permitir o cadastro de usuários no sistema                          | ALTA       |
| RF-002 | A aplicação deve permitir login por e-mail e senha                                    | ALTA       |
| RF-003 | A aplicação deve permitir cadastro de serviços oferecidos pelos usuários             | ALTA       |
| RF-004 | A aplicação deve permitir filtragem de serviços por categoria, preço e localização    | ALTA       |
| RF-005 | A aplicação deve permitir visualização detalhada dos serviços                         | ALTA       |
| RF-006 | A aplicação deve permitir classificação de serviços entre voluntário e remunerado     | ALTA       |
| RF-007 | A aplicação deve permitir solicitação de serviços pelos usuários                      | ALTA       |
| RF-008 | A aplicação deve permitir visualização de perfis de usuários e prestadores de serviço | ALTA       |
| RF-009 | A aplicação deve permitir avaliação de serviços e usuários                            | ALTA       |
| RF-010 | A aplicação deve exibir sugestões de serviços na página inicial                       | ALTA       |

### Requisitos Não Funcionais

| ID     | Descrição do Requisito                                                                 | Prioridade |
|--------|----------------------------------------------------------------------------------------|------------|
| RNF-001 | A aplicação deve ser responsiva, funcionando em dispositivos móveis e desktop         | ALTA       |
| RNF-002 | A aplicação deve ter tempo de carregamento otimizado (até 15 segundos por página)     | ALTA       |
| RNF-003 | A interface deve ser intuitiva e de fácil navegação                                   | ALTA       |
| RNF-004 | A aplicação deve garantir boa legibilidade com uso adequado de cores e tipografia     | MÉDIA      |
| RNF-005 | A aplicação deve manter consistência visual entre todas as telas                      | MÉDIA      |
| RNF-006 | A aplicação deve garantir acessibilidade básica (contraste e leitura em diferentes dispositivos) | MÉDIA |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID | Restrição |
|----|-----------|
| 01 | O projeto deverá ser entregue até o final do semestre |
| 02 | O sistema será desenvolvido apenas em front-end |
| 03 | Não haverá integração com banco de dados real |

