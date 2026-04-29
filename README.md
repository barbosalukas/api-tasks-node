# 🚀 Task Manager API (Node.js)

API REST para gerenciamento de tarefas desenvolvida com Node.js puro, focada na construção de fundamentos sólidos de backend sem uso de frameworks.

> 💡 Projeto criado para demonstrar domínio de conceitos essenciais como HTTP, rotas, streams e manipulação de dados.

---

## ⚡ Funcionalidades

- ✅ Criar tarefas
- 📄 Listar tarefas
- ✏️ Atualizar tarefas
- ❌ Deletar tarefas
- 🔍 Filtrar tarefas via Query Params
- 📥 Importar tarefas via CSV

---

## 🧠 Conceitos Aplicados

- APIs REST
- Rotas sem frameworks
- Streams
- Middleware
- Persistência em arquivo
- Query Params e Route Params
- Organização de código

---

## 🛠️ Tecnologias

- Node.js
- JavaScript (ESModules)
- CSV Parse

---

## 📂 Estrutura


src/
├── server.js
├── routes.js
├── database.js
├── middleware/
│ └── json.js
└── utils/
├── build-route-path.js
└── extract-query-params.js

import-csv.js
tasks.csv
package.json
package-lock.json


---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev

Servidor rodando em:

http://localhost:3333
📡 Endpoints
POST /tasks → Criar tarefa
GET /tasks → Listar tarefas
PUT /tasks/:id → Atualizar tarefa
DELETE /tasks/:id → Deletar tarefa
📥 Importação via CSV
node import-csv.js
🎯 Objetivo

Projeto focado na prática de fundamentos de backend com Node.js, visando evolução técnica e consolidação de conceitos essenciais.

👨‍💻 Autor

Lukas Barbosa Oliveira

docs: add README
