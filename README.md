# NestJS Application

A progressive Node.js framework for building efficient and scalable server-side applications.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Prerequisites

- Node.js
- PostgreSQL

## Setup

1. Clone the repository:

```bash
$ git clone https://github.com/your-repository-url

2. Navigate to the project root:

```bash
$ cd your-project-directory

3. Install the dependencies:

```bash
$ npm install
```
4. Setup PostgreSQL database:

```bash
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "your-username",
  "password": "your-password",
  "database": "your-database",
  "entities": ["src/**/*.entity.ts"],
  "synchronize": true
}
```
5. Start the application:

```bash 
$ npm run start
```
```bash
$ npm run start:dev
```
