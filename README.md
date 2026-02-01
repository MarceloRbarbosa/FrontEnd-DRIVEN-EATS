Frontend do sistema **Driven Eats**, interface de um app mobile de pratos feitos com refeição completa.

 
## Deploy 

**Aplicação em produção (Vercel)**
```
https://front-end-driven-eats.vercel.app/
``` 

## STACK
<ul>
  <li>Frontend Web</li>
  <li>React</li>
  <li>JavaScript</li>
  <li>Vercel</li>
  <li>Github Actions</li>
</ul>

## Variáveis de ambiente

Crie um arquivo .env com:
```
VITE_RESTAURANT_PHONE=""
```

## Executando sem Docker

```
npm install
npm run dev
``` 

## Executando com Docker
```
docker build -t driven-eats .
docker run -p 8080:80 --env-file driven-eats
```

## Executando com Docker Compose
```
docker compose up -d
```

## Testes 

```
npm run test:ci
```

## CD 

**CD**
<li>Build automático no VERCEL</li>
<li>Utilização de GitHub Actions</li>

