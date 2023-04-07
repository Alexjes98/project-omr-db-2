<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
# Endpoints
## Accounts
### create an account
```json
// POST
URL: /account
{
  "account_id": "string",
  "person_doc_number": "string",
  "balance": 0,
  "creation_date": "Date"
}
// EXAMPLE
{
  "account_id": "64",
  "person_doc_number": "123231"
}
```
### get person accounts by doc_number:
```
/account/person/:person_number
```
### get person transactions by account number:
```
/account/:account_id
```
## Persons
```json
// POST
URL: /person
{
  "person_id": "string",
  "name": "string",
  "last_name": "string",
  "document_number": "string",
  "phone": "string"
}
// EXAMPLE
{
  "person_id": "3",
  "name": "Mark",
  "last_name": "Twain",
  "document_number": "4321",
  "phone": "321232132"
}
```
```json
// POST
URL: /update/:person_id
{
  "person_id": "string",
  "name": "string",
  "last_name": "string",
  "document_number": "string",
  "phone": "string"
}
// EXAMPLE
{
  "person_id": "3",
  "name": "Mark",
  "last_name": "Twain",
  "document_number": "4321",
  "phone": "321232132"
}
```
### get persons
```
/person
```
### get person by document number:
```
/person/:document_number
```
## Transactions 
```json
// POST
URL: /transaction
{
  "transaction_code": "String",
  "source_account": "String",
  "target_account": "String",
  "transaction_type": "String",
  "amount": 0,
  "created_at": "Date",
  "updated_at": "Date"
}
// EXAMPLE
//DEPOSIT
{
  "transaction_code": "2",
  "target_account": "64",
  "transaction_type": "deposit",
  "amount": 10
}
// WITHDRAW
{
  "transaction_code": "2",
  "target_account": "64",
  "transaction_type": "withdraw",
  "amount": 1
}
//TRANSFER
{
  "transaction_code": "22",
  "source_account": "64",
  "target_account": "2",
  "transaction_type": "transfer",
  "amount": 1
}

```
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
