# Guía de Deployment - Delta Sport US

## 🚀 Desplegar en Vercel (Recomendado)

### Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Completa los datos:
   - **Repository name**: `DeltaPrueba`
   - **Description**: Delta Sport US - Sitio web mejorado con componentes reutilizables
   - **Visibility**: `Public`
   - **Initialize this repository with**: DEJA EN BLANCO (sin README, .gitignore, license)
3. Click en "Create repository"

### Paso 2: Push del Código a GitHub

Ejecuta en tu terminal (en la carpeta del proyecto):

```bash
cd /d/Delta/DeltaPrueba
git push -u origin main
git push -u origin --all  # Para todas las ramas si lo deseas
```

Si tienes problemas de autenticación:
- **Opción 1**: Usar GitHub CLI (`gh auth login`)
- **Opción 2**: Usar Personal Access Token en lugar de contraseña
- **Opción 3**: Configurar SSH keys

### Paso 3: Conectar con Vercel

#### Opción A: Vercel Web UI (Más fácil)

1. Ve a https://vercel.com/
2. Click en "Sign Up" o "Log In" (puedes usar tu cuenta de GitHub)
3. Autorizar a Vercel para acceder a GitHub
4. Click en "New Project"
5. Selecciona el repositorio `rododelgado-collab/DeltaPrueba`
6. Configuración:
   - **Framework Preset**: Select "Other"
   - **Build Command**: Dejar en blanco (es un sitio estático)
   - **Output Directory**: `.` (punto - raíz del proyecto)
   - **Environment Variables**: (opcional, no necesario para este proyecto)
7. Click en "Deploy"

**¡Listo!** Vercel te dará una URL como `https://delta-prueba-enh32a.vercel.app`

#### Opción B: Vercel CLI

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Hacer login
vercel login

# 3. Desplegar
cd /d/Delta/DeltaPrueba
vercel

# 4. Responder preguntas:
# - "Set up and deploy...?" → Yes
# - "Which scope?" → Tu usuario
# - "Link to existing project?" → No (primer deploy)
# - "What's your project's name?" → DeltaPrueba
# - "In which directory is your code?" → ./ (punto)
# - "Want to override?" → Yes
```

---

## 📊 Configuración del Proyecto (vercel.json)

El archivo `vercel.json` ya está configurado con:

```json
{
  "buildCommand": "echo 'Static site - no build needed'",
  "outputDirectory": ".",
  "ignoreCommand": "git diff --quiet HEAD~1 HEAD",
  "github": {
    "enabled": true
  }
}
```

Esto indica a Vercel que:
- ✅ No necesita hacer build (es un sitio estático)
- ✅ Servir archivos desde la raíz (.)
- ✅ Integración con GitHub habilitada
- ✅ Deployments automáticos en cada push

---

## ✅ Después del Deploy

### 1. Verificar que el sitio funciona

Abre la URL de Vercel y prueba:
- [ ] Home page carga
- [ ] Header y footer aparecen
- [ ] Navegación funciona
- [ ] Links a otras páginas funcionan
- [ ] Formulario de contacto funciona
- [ ] Responsive en mobile

### 2. Dominio Personalizado (Opcional)

En Vercel dashboard:
1. Ir al proyecto
2. Settings → Domains
3. Agregar dominio personalizado (ej: deltasport.us)
4. Configurar DNS en tu proveedor de dominios

---

## 🔄 Deployments Automáticos

Ahora cada vez que hagas:

```bash
git push origin main
```

Vercel **automáticamente** va a:
1. Detectar el cambio en GitHub
2. Descargar el código
3. Servir la nueva versión
4. Actualizar tu sitio en vivo ✨

---

## 📱 Testing en Producción

Después de cada deploy, verifica:

```bash
# En tu terminal
curl https://tu-url-vercel.vercel.app

# En tu navegador
1. Abre DevTools (F12)
2. Console tab - debería estar limpia (sin errores)
3. Network tab - verifica que todos los archivos cargan (200 status)
4. Responsive - prueba en mobile
```

---

## 🆘 Solución de Problemas

### "Repository not found"
- ✅ Verifica que el repositorio existe en GitHub
- ✅ Verifica la URL: `https://github.com/rododelgado-collab/DeltaPrueba`
- ✅ Asegúrate de tener acceso de escritura

### "Los componentes no cargan (header/footer en blanco)"
- ✅ Verifica que `components/header.html` y `components/footer.html` existen
- ✅ Abre DevTools → Console para ver errores
- ✅ Verifica que `components-loader.js` está incluido

### "Errores 404 en assets"
- ✅ Verifica que todas las imágenes están en `assets/images/`
- ✅ Verifica las rutas relativas en HTML
- ✅ Prueba abrir directamente: `https://tu-url/assets/images/logo_white.png`

### "Formulario de contacto no funciona"
- ✅ El formulario usa FormSubmit.co (servicio externo)
- ✅ Verifica que el formulario tiene `method="POST"`
- ✅ Verifica que tienes acceso a tu email de FormSubmit

---

## 📈 Monitorear Deployments

En Vercel Dashboard puedes ver:
- ✅ Histórico de deployments
- ✅ Logs de cada deployment
- ✅ Eventos y cambios
- ✅ Performance y analytics
- ✅ Errores en tiempo real

---

## 🚀 Next Steps (Después del Deploy)

1. **Dominio personalizado**: Configurar tu propio dominio
2. **SSL/TLS**: Vercel proporciona HTTPS gratuito
3. **Analytics**: Agregar Google Analytics
4. **Monitoreo**: Configurar alertas de errores
5. **Backups**: Mantener backups en GitHub

---

## 📚 Documentación Relacionada

- `README.md` - Documentación principal
- `MIGRATION_REPORT.md` - Cambios implementados
- `IMPROVEMENTS.md` - Mejoras realizadas
- `FUTURE_RECOMMENDATIONS.md` - Mejoras futuras

---

## 💡 Tips

1. **Vercel es gratis** para sitios estáticos
2. **Deployments automáticos** después de cada git push
3. **HTTPS gratuito** incluido
4. **Global CDN** para rápido acceso mundial
5. **Analytics** incluido

---

**Documentación**: 2025-04-29
**Versión**: 1.0
**Status**: Listo para deployment ✅

