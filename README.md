# aJud

### Requisitos

- Node.Js Instalado [x]
- Yarn Instalado [x]
- Docker Instalado [x]

  ```
  # Colar no Terminal

    sudo docker run \
    --name nome-app \
    -e POSTGRES_USER=your-user \
    -e POSTGRES_PASSWORD=your-pass \
    -p 5432:5432
    -d \
    postgres
  ```

- Alterar os dados de <a href="#">example.env</a>
- Renomear arquivo 'example.env' para '.env'

<h5>Rodar os seguintes comandos no terminal</h5>
```
yarn # para instalar as dependências
yarn sequelize db:migrate # criar as migrations
```
