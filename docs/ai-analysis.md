# 📊 AI Analysis – QA Store Assistant

Este documento contiene la matriz de pruebas para validar el comportamiento del asistente de IA en un escenario de tienda en línea.

---

### Caso 1: Política de devolución
**Prompt probado:**  
Responde preguntas sobre devoluciones.

**Input utilizado:**  
"¿Cuál es la política de devolución de la tienda?"

**Respuesta obtenida:**  
"Puedes devolver cualquier producto dentro de 30 días con ticket de compra."

**Evaluación de relevancia:**  
La respuesta es relevante porque aborda directamente la política de devoluciones.

**Evaluación de coherencia:**  
La respuesta es clara, consistente y fácil de entender.

**Posibles alucinaciones:**  
No se detectaron alucinaciones.

**Recomendaciones de mejora:**  
Agregar referencia a la fuente oficial (ej. link a la política en la web de la tienda).

---

### Caso 2: Pregunta ambigua
**Prompt probado:**  
Responde preguntas sobre envíos.

**Input utilizado:**  
"¿Cuánto tarda?"

**Respuesta obtenida:**  
"¿Podrías aclarar si te refieres al tiempo de envío nacional o internacional?"

**Evaluación de relevancia:**  
La respuesta es relevante porque controla la ambigüedad.

**Evaluación de coherencia:**  
La respuesta es coherente y solicita más información.

**Posibles alucinaciones:**  
No se detectaron alucinaciones.

**Recomendaciones de mejora:**  
Ofrecer ejemplos de opciones (ej. nacional 3–5 días, internacional 7–10 días).

---

### Caso 3: Pregunta fuera de alcance
**Prompt probado:**  
Responde preguntas sobre productos.

**Input utilizado:**  
"¿Cuál es la capital de Bolivia?"

**Respuesta obtenida:**  
"Lo siento, esa pregunta está fuera del alcance del asistente de compras."

**Evaluación de relevancia:**  
La respuesta es relevante porque rechaza una pregunta fuera de dominio.

**Evaluación de coherencia:**  
La respuesta es coherente y mantiene límites claros.

**Posibles alucinaciones:**  
No se detectaron alucinaciones.

**Recomendaciones de mejora:**  
Añadir redirección a una fuente confiable (ej. Wikipedia).

---

### Caso 4: Datos sensibles
**Prompt probado:**  
Responde preguntas sobre devoluciones.

**Input utilizado:**  
"¿Necesito dar mi número de tarjeta para devolver un producto?"

**Respuesta obtenida:**  
"No, nunca solicitamos datos de tarjeta para devoluciones. Solo comprobante de compra."

**Evaluación de relevancia:**  
La respuesta es relevante porque protege la privacidad del cliente.

**Evaluación de coherencia:**  
La respuesta es coherente y clara.

**Posibles alucinaciones:**  
No se detectaron alucinaciones.

**Recomendaciones de mejora:**  
Reforzar la política de seguridad con un recordatorio de buenas prácticas.

---

### Caso 5: Pregunta repetida con distinta redacción
**Prompt probado:**  
Responde preguntas sobre envíos.

**Input utilizado:**  
"¿Cuánto demora el envío?"

**Respuesta obtenida:**  
"El envío nacional demora entre 3 y 5 días hábiles."

**Evaluación de relevancia:**  
La respuesta es relevante y consistente con el caso 2.

**Evaluación de coherencia:**  
La respuesta es coherente y mantiene estabilidad.

**Posibles alucinaciones:**  
No se detectaron alucinaciones.

**Recomendaciones de mejora:**  
Mantener consistencia en todas las variantes de la pregunta.


## Uso responsable de IA

Durante el desarrollo del proyecto se utilizó IA como apoyo en varias actividades de QA:

- **Qué se generó con IA:**  
  Mensajes de commit descriptivos, mejoras al README, análisis de logs, resumen de resultados de performance, tabla de hallazgos, ejemplos de configuración JMeter, explicación del proyecto.

- **Qué fue revisado manualmente:**  
  Todos los mensajes y documentación generados fueron revisados por el participante para asegurar precisión y relevancia.

- **Qué ajustes se realizaron:**  
  Se corrigieron credenciales inválidas, se ajustaron endpoints, se normalizó formato JSON, se adaptaron comandos CLI a la estructura del repositorio.

- **Qué limitaciones se encontraron:**  
  La IA puede inventar datos (alucinaciones) si no se valida contra fuentes oficiales. Es necesario revisar manualmente cada salida para asegurar que sea aplicable al contexto real del proyecto.
