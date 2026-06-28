# Test Plan - QA DevOps AI Challenge

## 🎯 Objetivo
Definir los criterios de calidad y seguridad (Quality Gates) que deben cumplirse para aprobar un Pull Request en el repositorio.  
El objetivo es garantizar que cada entrega cumpla con estándares mínimos de calidad, performance y seguridad antes de integrarse en la rama principal.

---

## 🧪 Quality Gates definidos
1. **Pruebas automatizadas aprobadas**  
   - Todas las suites de Jest y Cypress deben pasar sin fallos.  
   - No se permite mergear si existe al menos un test fallido.

2. **Error rate en performance < 1%**  
   - Los resultados de K6/JMeter deben mostrar menos del 1% de errores en las solicitudes.  
   - Se rechaza el PR si el porcentaje supera este umbral.

3. **Tiempo de respuesta dentro del umbral**  
   - El promedio de respuesta debe estar dentro del límite definido (ejemplo: < 500 ms).  
   - Se documenta en los reportes de performance.

4. **No secretos expuestos en el repositorio**  
   - Se ejecuta un escaneo con herramientas como `gitleaks` o `trufflehog`.  
   - El PR no se aprueba si se detectan credenciales, tokens o contraseñas.

5. **Evidencias adjuntas en el Pull Request**  
   - El PR debe incluir artefactos generados:  
     - `evidences/report.html` (Jest HTML report)  
     - `evidences/logs/test-results.txt` (logs de pruebas)  
     - `evidences/screenshots/login_test.png` (capturas Cypress)  
     - `performance/k6-results.json` (performance)  
     - `performance/jmeter-report/` (load testing)

---

## 📂 Evidencias requeridas
- **Logs de pruebas**: `evidences/logs/test-results.txt`  
- **Reporte HTML**: `evidences/report.html`  
- **Capturas Cypress**: `evidences/screenshots/login_test.png`  
- **Resultados de performance**: `performance/k6-results.json`  
- **Reportes de carga**: `performance/jmeter-report/`

---

## 🔐 Visión DevSecOps
La seguridad se integra en el ciclo de CI/CD desde el inicio:  
- **Escaneo de secretos** en cada PR para evitar exposición de credenciales.  
- **Auditoría de dependencias** con `npm audit` para detectar vulnerabilidades conocidas.  
- **Reportes de vulnerabilidades** adjuntos como artefactos para revisión.  
- **Automatización de Quality Gates** en GitHub Actions: si un criterio falla, el PR no se aprueba.

## 📊 Parte 4: Pruebas de performance con K6
- Script: `performance/k6/script.js`
- Usuarios virtuales: 10
- Duración: 30s
- Thresholds:
  - http_req_failed < 1%
  - http_req_duration p(95) < 500ms
- Evidencias:
  - Comando: `k6 run performance/k6/script.js`
  - Resultado de consola adjunto en `evidences/k6-results.txt`
  - Conclusión: aprobado/rechazado según métricas

## 📊 Parte 5 y 6: Pruebas con JMeter

### Escenario 1: Login básico con HTTP Request
- Endpoint: https://quickpizza.grafana.com/login
- Usuarios: 20
- Ramp-up: 10s
- Iteraciones: 5 por usuario
- Tiempo promedio de respuesta: ~350 ms
- Errores encontrados: 0
- Conclusión: ✅ Aprobado (cumple thresholds definidos)

### Escenario 2: Consulta de productos (DummyJSON)
- Endpoint: https://dummyjson.com/products
- Usuarios: 20
- Ramp-up: 10s
- Iteraciones: 5
- Tiempo promedio de respuesta: 200 ms
- Errores encontrados: 0
- Conclusión: ✅ Aprobado

### Escenario 3: Consulta API pública (JSONPlaceholder)
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Usuarios: 10
- Ramp-up: 5s
- Iteraciones: 3
- Tiempo promedio de respuesta: 180 ms
- Errores encontrados: 0
- Conclusión: ✅ Aprobado

### Escenario 4: Flujo de compra simulado (DummyJSON)
- Pasos: Login → Productos → Carrito → Checkout
- Usuarios: 15
- Ramp-up: 10s
- Iteraciones: 2
- Tiempo promedio de respuesta: 350 ms
- Errores encontrados: 0
- Conclusión: ✅ Aprobado

### Evidencias JMeter
- Login: evidences/jmeter-results-login.jtl
- Productos: evidences/jmeter-results-products.jtl
- API pública: evidences/jmeter-results-api.jtl
- Flujo de compra: evidences/jmeter-results-shopping.jtl
