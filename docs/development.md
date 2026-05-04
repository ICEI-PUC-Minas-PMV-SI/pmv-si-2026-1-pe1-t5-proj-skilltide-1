# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF01| Permitir cadastro de usuários no sistema | Victor Fioravante | arquivo.html |
|RF02| Permitir cadastro de prestadores de serviços  | Nome | arquivo.html |
|RF03| Permitir cadastro e descrição de serviços oferecidos | José Guilherme | [rf-03.html](./etapa-3/rf-03.html) |
|RF04| Permitir filtragem por categoria, valor do serviço e localidade | Nome | arquivo.html |
|RF05| Permitir visualização detalhada dos serviços  | Nome | arquivo.html |
|RF06| Permitir classificação entre serviço voluntário e remunerado | Nome | arquivo.html |
|RF07| Permitir comunicação entre usuários dentro do sistema | Victor Fioravante | arquivo.html |
|RF08| Permitir solicitação de serviços | Nome | arquivo.html |
|RF09| Permitir a visualização de perfis dos outros usuários da plataforma, incluindo suas habilidades, histórico de serviços prestados, e avaliações | José Guilherme | [rf-09.html](./etapa-3/rf-09.html) |
|RF10| Permitir tela inicial intuitiva que mostre sugestões de serviços do interesse do usuário | Nome | arquivo.html |

### Requisitos Não Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RNF-01| A aplicação deve ser responsiva (funcionar em desktop e mobile) | Nome | arquivo.html |
|RNF-02| O tempo de carregamento das páginas deve ser inferior a 15 segundos | Nome | arquivo.html |
|RNF-03| A interface deve seguir princípios de usabilidade (navegação simples e intuitiva) | Nome | arquivo.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

