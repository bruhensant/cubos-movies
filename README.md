# Cubos Movies

## Principais ferramentas

- Next.js
- Tailwind
- Shadcn
- Iconify

## Configurando e inicializando o projeto

### Variáveis

Crie um arquivo chamado `.env` na raíz do projeto e preencha a variável da chave de API `NEXT_PUBLIC_TMDB_API_KEY` de acordo com o modelo em `.env.example`. 
Você pode obter sua chave de desenvolvimento na [página para desenvolvedores](https://www.themoviedb.org/settings/api), no tópico "Token de Leitura da API".

### Dependências

Instale as do projeto dependências com:

```bash
npm install
# ou
yarn install
```
_O projeto foi construído e testado com `yarn` e `npm`, mas você não deve ter problemas em instalar as dependências ou executar o projeto com outro gerenciadore (como `pnpm` ou `bun`)._

### Inicializando o projeto

Incie o projeto com 

```bash
npm run dev
# ou
yarn dev
```
A aplicação deve estar disponível através da porta 3000, acessível pela URL http://localhost:3000.


# TODO

- [ ] Corrigir tema de modo claro;
- [ ] Corrigir backdrop de fundo;
- [ ] Verificar viabilidade de filtros compostos;
