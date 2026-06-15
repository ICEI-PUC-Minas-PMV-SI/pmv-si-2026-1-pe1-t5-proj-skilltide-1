# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Cadastro de prestador de serviçoes**
 :--------------: | ------------
**Procedimento**  | 1) Preencher todos os campos do formulário <br> 2) Clique em Cadastrar Perfil <br>.
**Requisitos associados** | RF-02 - O sistema deve permitir o cadastro de prestadores de serviços na plataforma.
**Resultado esperado** | Perfil cadastrado com sucesso e dados armazenados pelo sistema.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Cadastro de prestador de serviços*                                         |
|---|---|
|Requisito Associado | RF-02 - O sistema deve permitir o cadastro de prestadores de serviços na plataforma.|
|Link do vídeo do teste realizado: |https://1drv.ms/v/c/a0f86e8cf89d847a/IQAEi3b-r6qTS7OhMG1fp8qSAbdVkwFwLt-0sVfN7wp5Px0?e=1IeZY0| 


## Avaliação dos Testes de Software

Avaliação dos Testes de Software

O teste executado confirmou o funcionamento correto da funcionalidade de cadastro de prestadores de serviços. Os dados foram validados adequadamente e armazenados conforme esperado. Não foram identificadas falhas durante a execução do teste. Como melhoria futura, podem ser implementadas validações mais avançadas e integração com banco de dados para armazenamento permanente das informações.


## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja oferecer seus conhecimentos e serviços na plataforma Skill Tide. Realize o cadastro de prestador de serviços preenchendo todas as informações solicitadas no formulário. |
| 2             | Você é uma pessoa que deseja divulgar suas habilidades profissionais na plataforma. Preencha o formulário de cadastro com seus dados pessoais e área de atuação e conclua o cadastro com sucesso. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja oferecer seus conhecimentos e serviços na plataforma Skill Tide. Realize o cadastro de prestador de serviços preenchendo todas as informações solicitadas no formulário.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 35 segundos                  |
| 2       | SIM             | 4                    | 42 segundos                  |
| 3       | SIM             | 5                    | 31 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 4,7                | 36 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 18 segundos |


    Comentários dos usuários: O formulário apresentou boa organização e os campos estavam fáceis de identificar.
    O processo de cadastro foi simples e intuitivo.


## Avaliação dos Testes de Usabilidade

Os testes de usabilidade realizados com a funcionalidade de cadastro de prestadores de serviços da plataforma Skill Tide demonstraram que os usuários conseguiram concluir as tarefas propostas com facilidade.

De forma geral, a interface foi considerada intuitiva, com boa organização dos campos e clareza nas informações apresentadas. Todos os participantes conseguiram realizar o cadastro com sucesso, apresentando alta taxa de sucesso (100%) e boa satisfação subjetiva.

Como ponto positivo, destaca-se a simplicidade do formulário e a facilidade de compreensão dos campos obrigatórios. Como melhoria futura, sugere-se a implementação de máscaras automáticas para CPF e telefone, além de validações mais avançadas para melhorar ainda mais a experiência do usuário.

Não foram identificados problemas críticos de usabilidade durante a execução dos testes.



