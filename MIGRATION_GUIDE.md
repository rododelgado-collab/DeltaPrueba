# Guía de Migración a Componentes Reutilizables

## Paso 1: Entender la Estructura Actual

Cada página HTML tiene:
1. Header (líneas ~65-110): Navegación
2. Contenido específico
3. Footer (líneas ~493-524): Pie de página

El problema: **Hay 24 archivos HTML con el mismo header y footer duplicado**.

---

## Paso 2: Migración de una Página (Ejemplo con index.html)

### ANTES:
```html
<!doctype html>
<html class="no-js" lang="en">
<head>
    <!-- ... head ... -->
</head>
<body>
    <!-- ====== HEADER PART START ====== -->
    <div class="header_navbar">
        <!-- TODO EL CONTENIDO DEL HEADER -->
    </div>
    <!-- ====== HEADER PART ENDS ====== -->

    <!-- CONTENIDO ESPECÍFICO DE LA PÁGINA -->
    <!-- ... más contenido ... -->

    <!-- ====== FOOTER PART START ====== -->
    <div class="footer_area pt-20">
        <!-- TODO EL CONTENIDO DEL FOOTER -->
    </div>
    <!-- ====== FOOTER PART ENDS ====== -->

    <script src="assets/js/main.js"></script>
</body>
</html>
```

### DESPUÉS:
```html
<!doctype html>
<html class="no-js" lang="en">
<head>
    <!-- ... head ... -->
    <!-- Agregar improvements.css -->
    <link rel="stylesheet" href="assets/css/improvements.css">
</head>
<body>
    <!-- Reemplazar header hardcodeado con placeholder -->
    <div id="header-placeholder"></div>

    <!-- CONTENIDO ESPECÍFICO DE LA PÁGINA (SIN CAMBIOS) -->
    <!-- ... contenido ... -->

    <!-- Reemplazar footer hardcodeado con placeholder -->
    <div id="footer-placeholder"></div>

    <!-- Agregar component loader ANTES de otros scripts -->
    <script src="assets/js/components-loader.js"></script>
    
    <!-- Otros scripts (main.js, etc) -->
    <script src="assets/js/main.js"></script>
</body>
</html>
```

---

## Paso 3: Pasos Detallados para Cada Archivo

### 3.1 En el `<head>`:
**Agrega esta línea** después de `style.css`:
```html
<link rel="stylesheet" href="assets/css/improvements.css">
```

### 3.2 Reemplaza el Header

**ELIMINA** estas líneas (aproximadamente 40 líneas):
```html
<!-- ====== HEADER PART START ====== -->
<div class="header_navbar">
    <div class="container">
        <!-- ... TODO EL CONTENIDO DEL HEADER ... -->
    </div>
</div>
<!-- ====== HEADER PART ENDS ====== -->
```

**REEMPLAZA CON**:
```html
<div id="header-placeholder"></div>
```

### 3.3 Reemplaza el Footer

**ELIMINA** estas líneas (aproximadamente 30 líneas):
```html
<!-- ====== FOOTER PART START ====== -->
<div class="footer_area pt-20">
    <!-- ... TODO EL CONTENIDO DEL FOOTER ... -->
</div>
<!-- ====== FOOTER PART ENDS ====== -->
```

**REEMPLAZA CON**:
```html
<div id="footer-placeholder"></div>
```

### 3.4 Agrega el Component Loader

**ANTES** de cerrar `</body>`, agrega esta línea:
```html
<!-- Cargar componentes (header y footer) -->
<script src="assets/js/components-loader.js"></script>
```

---

## Paso 4: Actualizar Estilos Inline (Opcional pero recomendado)

### En Footer

**ANTES**:
```html
<a href="aboutUs.html" style="color: white;">About Us</a>
```

**DESPUÉS**:
```html
<a href="aboutUs.html" class="footer-link">About Us</a>
```

Este estilo ya está definido en `improvements.css`.

---

## Paso 5: Validar Cambios

Después de cada cambio:
1. Abre el HTML en el navegador
2. Verifica que header y footer aparezcan correctamente
3. Prueba los enlaces de navegación
4. Verifica responsive en mobile

---

## Paso 6: Aplicar a Todas las Páginas

Repite los pasos 3.1-3.5 para cada archivo HTML:

- [ ] `index.html`
- [ ] `aboutUs.html`
- [ ] `contact.html` (ya actualizado)
- [ ] `design.html`
- [ ] `longSleeve.html`
- [ ] `microShorts.html`
- [ ] `noSleeve.html`
- [ ] `ourProcess.html`
- [ ] `pants.html`
- [ ] `products.html`
- [ ] `productTemplate.html`
- [ ] `promotions.html`
- [ ] `racerShorts.html`
- [ ] `regularHoodie.html`
- [ ] `regularShorts.html`
- [ ] `reversiblePinny.html`
- [ ] `shortSleeve.html`
- [ ] `sleevelessSunHoodie.html`
- [ ] `sublimatedHoodie.html`
- [ ] `success.html`
- [ ] `sunHoodie.html`
- [ ] `sunHoodieWithPouch.html`
- [ ] `tankTop.html`

---

## Ventajas de Esta Estructura

✅ **Mantenimiento fácil**: Cambia el header/footer en UN solo lugar
✅ **DRY (Don't Repeat Yourself)**: Elimina duplicación
✅ **Escalabilidad**: Fácil agregar nuevas páginas
✅ **Consistencia**: Todos los estilos en CSS
✅ **Sin dependencias**: Funciona con vanilla JS (no requiere jQuery)
✅ **Sin compilación**: Funciona como está

---

## Solución de Problemas

### Los componentes no cargan (header/footer en blanco)

**Posibles causas**:
1. ¿Está `components-loader.js` DESPUÉS del contenido?
2. ¿Los archivos HTML existen en `components/header.html` y `components/footer.html`?
3. ¿Hay errores en la consola del navegador (F12)?

**Soluciones**:
- Verifica rutas relativas (deben ser relativas a la página HTML)
- Abre DevTools (F12) → Console para ver mensajes de error
- Verifica que `components/` esté en el mismo nivel que las páginas HTML

### Los estilos no aplican

**Posible causa**: `improvements.css` no está cargado

**Solución**: Verifica que hayas agregado:
```html
<link rel="stylesheet" href="assets/css/improvements.css">
```

### Hay saltos de línea extraños

**Causa**: Los componentes pueden tener saltos de línea extras

**Solución**: En `components-loader.js`, agregar después de `placeholder.innerHTML = html;`:
```javascript
placeholder.style.margin = '0';
placeholder.style.padding = '0';
```

---

## Ejemplo Completo: index.html Migrado

Ver `index.html` en el repositorio. Ya está parcialmente actualizado como ejemplo.

