# QA DevOps AI Challenge

## 🎯 Objetivo
Construir un flujo completo de calidad para la aplicación **QA Store**, aplicando control de versiones, CI/CD, quality gates, pruebas de performance, accesibilidad y análisis con IA.

## 🛠️ Herramientas utilizadas
- GitHub Actions (CI/CD)
- K6 (Performance Testing)
- JMeter (Load Testing)
- Node.js / Pytest (Automated Tests)
- IA (documentación y análisis asistido)

## ▶️ Ejecución de pruebas
1. Clonar repositorio:
   ```bash
   git clone https://github.com/richardDPR/qa-devops-ai-challenge.git


## Instalar dependencias:

npm install

## Ejecutar pruebas automatizadas:

npm test

## Revisar reportes y evidencias en la carpeta:

evidences/

## 📂 Estructura del repositorio

qa-devops-ai-challenge/
├── tests/              # Pruebas API y UI
├── performance/        # Scripts de K6 y JMeter
├── docs/               # Plan de pruebas, análisis IA, reportes
├── evidences/          # Evidencias de ejecución
├── .github/workflows/  # Pipelines de CI/CD
├── README.md           # Documentación principal
└── .gitignore          # Exclusiones (node_modules, logs, etc.)

--

## Cypress Ejecucion

npx cypress run --spec cypress/e2e/login.cy.js

## k6 Ejecucion

k6 run performance/k6/script.js
k6 run performance/k6/script.js > evidences/k6-results.txt 

## Jmeter Ejecucion
jmeter -n -t performance/jmeter/qa-store.jmx -l evidences/jmeter-results.jtl 
jmeter -n -t performance/jmeter/qa-store.jmx -l evidences/jmeter-results.csv -Jjmeter.save.saveservice.output_format=csv 

