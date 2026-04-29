# Testing Checklist - Delta Sport US

## 🔍 Pruebas de Funcionalidad

### 1. Navegación
- [ ] Todos los links en header funcionan
- [ ] Menu responsive en mobile
- [ ] Link Instagram abre en nueva pestaña
- [ ] Active state en página actual (si aplica)

### 2. Carousel (index.html)
- [ ] Carousel avanza automáticamente
- [ ] Botones Next/Prev funcionan
- [ ] Indicadores funcionan al hacer click
- [ ] Imágenes cargan correctamente:
  - [ ] `sliderNew111.jpg`
  - [ ] `sliderNew2222.jpg`
  - [ ] `sliderNew3.jpg`

### 3. Productos
- [ ] Todas las imágenes de productos cargan
- [ ] Links a páginas de productos funcionan
- [ ] Hover effects funcionan

### 4. Formulario de Contacto
- [ ] Input name acepta texto
- [ ] Input email valida formato
- [ ] Textarea acepta mensajes
- [ ] Botón submit funciona
- [ ] FormSubmit envía correctamente
- [ ] Redirect a success.html funciona

### 5. Footer
- [ ] Todos los links footer funcionan
- [ ] Instagram link funciona
- [ ] Copyright se muestra correctamente

---

## 📱 Responsive Design

### Desktop (1024px+)
- [ ] Layout se ve bien
- [ ] Navbar expandida
- [ ] Grid de productos: 3-4 columnas
- [ ] Footer alineado horizontalmente

### Tablet (768px - 1023px)
- [ ] Navbar collapsed funciona
- [ ] Grid de productos: 2 columnas
- [ ] Texto legible
- [ ] Botones clickeables

### Mobile (< 768px)
- [ ] Navbar hamburguesa funciona
- [ ] Grid de productos: 1 columna
- [ ] Imágenes responsive
- [ ] Texto readable (no zoom requerido)
- [ ] Formulario usable

**Herramientas para probar**:
- Chrome DevTools (F12 → Toggle device toolbar)
- https://responsivedesignchecker.com/
- Dispositivos reales

---

## ⚡ Performance

### Velocidad de Carga
- [ ] Página index carga en < 3 segundos (3G)
- [ ] Imágenes cargan sin delays
- [ ] No hay "layout shift" visible

**Herramientas**:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/

### Optimización de Imágenes
```bash
# Medir tamaño actual
du -sh assets/images/

# Debería ser < 50MB para todo el proyecto
```

---

## ♿ Accesibilidad

### Navegación por Teclado
- [ ] Tab navega por elementos en orden lógico
- [ ] Focus state visible en todos los elementos
- [ ] Enter activa links/botones
- [ ] Escape cierra menús

### Screen Reader
- [ ] Usar NVDA (Windows): https://www.nvaccess.org/
- [ ] Alt text en todas las imágenes
- [ ] Labels en inputs
- [ ] Headings en orden (h1 → h2 → h3...)

### Contraste de Colores
- [ ] Contraste texto/fondo > 4.5:1
- [ ] Validar: https://webaim.org/resources/contrastchecker/

**Colores actuales**:
- Rojo (#fa0606) sobre blanco: ✅ Bien (5.3:1)
- Blanco sobre negro: ✅ Bien (21:1)
- Gris (#747e88) sobre blanco: ❓ Verificar (4.6:1)

---

## 🐛 Errores Comunes a Verificar

### HTML Validation
```bash
# Validar con W3C: https://validator.w3.org/
```

**Errores frecuentes**:
- [ ] No hay `<h1>` en la página
- [ ] Atributos duplicados
- [ ] Tags mal cerrados
- [ ] IDs duplicados

### CSS Validation
```bash
# Validar: https://jigsaw.w3.org/css-validator/
```

### JavaScript Errors
- [ ] Abrir DevTools (F12)
- [ ] Console tab sin errores rojos
- [ ] Network tab sin 404s

---

## 🔐 Seguridad

### HTTPS
- [ ] Página accede por HTTPS
- [ ] No hay mixed content (HTTP + HTTPS)

### Formulario
- [ ] Email no se expone en HTML (usar FormSubmit)
- [ ] CSRF token (si aplica)
- [ ] Validación server-side

### Headers
```bash
# Ejecutar en terminal:
curl -I https://tu-sitio.com

# Buscar headers de seguridad:
# - X-Content-Type-Options: nosniff
# - X-Frame-Options: SAMEORIGIN
# - Content-Security-Policy
```

---

## 📊 SEO Basics

### Meta Tags
- [ ] `<title>` único en cada página (50-60 caracteres)
- [ ] `<meta description>` presente (155-160 caracteres)
- [ ] `<meta viewport>` presente
- [ ] `<meta charset="utf-8">` presente

### Estructura
- [ ] Cada página tiene un `<h1>`
- [ ] Headings en orden jerárquico (h1 → h2 → h3)
- [ ] URLs descriptivas (no `page.html?id=123`)
- [ ] Alt text en imágenes

### Sitemap & Robots
- [ ] Crear `sitemap.xml`
- [ ] Crear `robots.txt`
- [ ] Enviar a Google Search Console

**Ejemplo sitemap.xml**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://deltasport.us/index.html</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://deltasport.us/products.html</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 📋 Checklist Final Pre-Deployment

### Código
- [ ] No hay console.log() en código producción
- [ ] No hay comentarios con info sensible
- [ ] No hay archivos temporales (.bak, ~)
- [ ] Minificar CSS/JS (opcional pero recomendado)

### Assets
- [ ] Todas las imágenes optimizadas
- [ ] Favicon presente y funciona
- [ ] Fonts cargan correctamente
- [ ] No hay broken links

### Página por Página
- [ ] index.html ✅
- [ ] aboutUs.html
- [ ] contact.html ✅
- [ ] design.html
- [ ] longSleeve.html
- [ ] microShorts.html
- [ ] noSleeve.html
- [ ] ourProcess.html
- [ ] pants.html
- [ ] products.html
- [ ] productTemplate.html
- [ ] promotions.html
- [ ] racerShorts.html
- [ ] regularHoodie.html
- [ ] regularShorts.html
- [ ] reversiblePinny.html
- [ ] shortSleeve.html
- [ ] sleevelessSunHoodie.html
- [ ] sublimatedHoodie.html
- [ ] success.html
- [ ] sunHoodie.html
- [ ] sunHoodieWithPouch.html
- [ ] tankTop.html

---

## 🧪 Testing en Navegadores

### Desktop
- [ ] Chrome (Versión reciente)
- [ ] Firefox (Versión reciente)
- [ ] Safari (si es posible)
- [ ] Edge (Windows)

### Mobile
- [ ] iOS Safari
- [ ] Chrome Android
- [ ] Samsung Internet

**Herramientas online**:
- BrowserStack: https://www.browserstack.com/
- LambdaTest: https://www.lambdatest.com/

---

## 🎯 Testing de Usuarios (si es posible)

Pide a 3-5 personas:
1. **Abrir el sitio** en su dispositivo actual
2. **Navegar** por las páginas principales
3. **Intentar enviar** formulario de contacto
4. **Reportar** problemas encontrados

**Preguntas a hacer**:
- ¿Es fácil navegar?
- ¿Se ve bien en tu pantalla?
- ¿Encontraste lo que buscabas?
- ¿Qué mejorarías?

---

## 📈 Métricas a Monitorear

Después de implementar mejoras, medir:

```
Antes:
- Tamaño total: ?
- Tiempo carga: ?
- Imágenes sin optimizar: ?

Después:
- Tamaño total: ? MB (objetivo < 10MB)
- Tiempo carga: ? seg (objetivo < 3sec)
- Imágenes optimizadas: ✅
```

---

## 🚀 Deploy Checklist

Antes de hacer deploy:
- [ ] Todos los tests pasaron
- [ ] Validator W3C sin errores
- [ ] DevTools console sin errores
- [ ] Performance score > 90 (si es posible)
- [ ] Accessibility score > 90
- [ ] Respaldos de base de datos (si aplica)
- [ ] Cambios documentados
- [ ] Cambios revertibles

Después de deploy:
- [ ] Verificar en producción
- [ ] Monitorear logs
- [ ] Estar atento a error reports
- [ ] Recopilar feedback de usuarios

