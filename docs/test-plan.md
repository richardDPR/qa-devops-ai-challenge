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
