#!/bin/bash

# Lista de archivos a migrar
files=(
  "design.html"
  "longSleeve.html"
  "microShorts.html"
  "noSleeve.html"
  "ourProcess.html"
  "pants.html"
  "productTemplate.html"
  "products.html"
  "promotions.html"
  "racerShorts.html"
  "regularHoodie.html"
  "regularShorts.html"
  "reversiblePinny.html"
  "shortSleeve.html"
  "sleevelessSunHoodie.html"
  "sublimatedHoodie.html"
  "success.html"
  "sunHoodie.html"
  "sunHoodieWithPouch.html"
  "tankTop.html"
)

cd /d/Delta/DeltaPrueba

for file in "${files[@]}"; do
  echo "Migrando $file..."
  
  # 1. Agregar improvements.css si no existe
  if ! grep -q "improvements.css" "$file"; then
    sed -i 's|<link rel="stylesheet" href="assets/css/style.css">|<link rel="stylesheet" href="assets/css/style.css">\n\n    <!--====== Improvements CSS ======-->\n    <link rel="stylesheet" href="assets/css/improvements.css">|g' "$file"
  fi
  
  # 2. Reemplazar header
  perl -i -0pe 's|<!--====== HEADER PART START ======-->.*?<!--====== HEADER PART ENDS ======-->|<!--====== HEADER PART START ======-->\n    <div id="header-placeholder"></div>\n    <!--====== HEADER PART ENDS ======-->|s' "$file"
  
  # 3. Reemplazar footer
  perl -i -0pe 's|<!--====== FOOTER PART START ======-->.*?<!--====== FOOTER PART ENDS ======-->|<!--====== FOOTER PART START ======-->\n    <div id="footer-placeholder"></div>\n    <!--====== FOOTER PART ENDS ======-->|s' "$file"
  
  # 4. Agregar components-loader si no existe
  if ! grep -q "components-loader.js" "$file"; then
    sed -i '/<script src="assets\/js\/main.js"><\/script>/i\    <!--====== Components Loader ======-->\n    <script src="assets/js/components-loader.js"><\/script>\n' "$file"
  fi
  
  echo "✓ $file migrado"
done

echo "✓ Migración completada"
