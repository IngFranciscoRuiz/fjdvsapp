# 🚀 Guía de Despliegue - FabrikApp Landing Page

## 📁 Archivos para subir

Para desplegar tu landing page en `fjdvs.app`, necesitas subir estos archivos:

```
📦 Archivos principales:
├── index-static.html (renombrar a index.html)
├── public/favicon.svg
└── DEPLOYMENT.md (opcional)
```

## 🌐 Opciones de hosting

### 1. **Netlify (Recomendado - Gratis)**
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto o conecta tu GitHub
3. Configura el dominio personalizado:
   - Ve a "Domain settings"
   - Agrega `fjdvs.app`
   - Configura los DNS según las instrucciones

### 2. **Vercel (Gratis)**
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura el dominio personalizado en settings

### 3. **GitHub Pages (Gratis)**
1. Sube los archivos a un repositorio de GitHub
2. Ve a Settings > Pages
3. Configura el dominio personalizado

### 4. **Hosting tradicional (cPanel, etc.)**
1. Sube `index-static.html` como `index.html`
2. Sube `favicon.svg` a la carpeta raíz
3. Configura el dominio en tu panel de control

## 🔧 Configuración de DNS

Para `fjdvs.app`, necesitas configurar estos registros DNS:

### Si usas Netlify:
```
Tipo: CNAME
Nombre: @
Valor: tu-sitio.netlify.app

Tipo: CNAME  
Nombre: www
Valor: tu-sitio.netlify.app
```

### Si usas Vercel:
```
Tipo: A
Nombre: @
Valor: 76.76.19.19

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

## 📱 Optimizaciones recomendadas

### 1. **Crear imagen OG**
Crea una imagen `og-image.jpg` (1200x630px) para compartir en redes sociales.

### 2. **Configurar Analytics**
Agrega Google Analytics o similar para trackear visitas.

### 3. **Optimizar velocidad**
- La página ya usa Tailwind CDN (rápido)
- Considera usar una CDN para imágenes

## 🎯 Próximos pasos

1. **Elegir hosting** (Netlify recomendado)
2. **Subir archivos** 
3. **Configurar dominio** `fjdvs.app`
4. **Probar en móvil** y desktop
5. **Configurar analytics**

## 📞 Soporte

Si tienes problemas con el despliegue:
- Revisa la documentación de tu hosting
- Verifica la configuración DNS
- Asegúrate de que `index.html` esté en la raíz

¡Tu landing page estará lista en `https://fjdvs.app`! 🎉

