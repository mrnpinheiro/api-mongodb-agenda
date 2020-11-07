# API Agenda

A API armazena dados dos contatos de uma agenda através do MongoDB, seguindo o design MVC.

Método | Rota |	Descrição |
-----| ------- | --------- |
GET |`/` |	Retorna index com apresentação.
GET |`/agenda` |	Retorna todos os dados do banco de dados.
GET |`/agenda/nome/:nome` |	Retorna um contato pelo nome específico.
GET |`/agenda/nome/:id` |	Retorna um contato pelo id específico.
POST | `/agenda/criar` |	Cria um novo contato.
DELETE | `/agenda/deletar/:id` |	Deleta um contato a partir de um id.
UT | `/agenda/atualizar/:id` |	Atualiza completamente o contato.
PUT | `/agenda/atualizar/telefone/:id` |	Atualiza somente telefone do contato por id específico.

### Ferramentas utilizadas

* Node.js
* Express
* Cors
* Nodemon
* Mongoose