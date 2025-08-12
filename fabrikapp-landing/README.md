# FabrikApp Landing (Vite + React + Tailwind)

## Requisitos
- Node.js 18+
- npm

## Instalar y correr localmente
```bash
npm install
npm run dev
```
Abre http://localhost:5173 (Vite lo mostrará en la terminal).

## Build de producción
```bash
npm run build
npm run preview
```

## Desplegar en Vercel (recomendado)
1. Crea un repo en GitHub y sube este proyecto:
   ```bash
   git init
   git add .
   git commit -m "init landing"
   git branch -M main
   git remote add origin <TU_REPO_GITHUB_URL>
   git push -u origin main
   ```
2. Entra a https://vercel.com/import, conecta tu GitHub y selecciona el repo.
3. Framework: **Vite** (auto-detectado). Build command: `vite build`. Output: `dist/` (auto).
4. Deploy.
5. Conectar dominio: en Vercel > Project Settings > Domains > Add domain
   - Si usas subdominio (ej. `www.tu-dominio.com`), crea **CNAME** a `cname.vercel-dns.com`.
   - Para raíz (`tu-dominio.com`), Vercel te mostrará registros **A/AAAA**. Agrégalos en tu DNS.

## Desplegar en Netlify (alternativa)
1. Crea un sitio en https://app.netlify.com y conecta tu repo.
2. Build command: `npm run build`, Publish directory: `dist`.
3. Conectar dominio desde el panel de Netlify (añade registros DNS que te indiquen).
