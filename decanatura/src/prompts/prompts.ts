export const momento3Prompts = {
    prompt1: `Asume el rol de un experto en diseño curricular y evaluación educativa con experiencia avanzada en integración de IA generativa (IAG).
Vas a trabajar con un syllabus completo en formato PDF que te proporcionaré. 
Evita respuestas excesivamente seguras. Si hay ambigüedad, hazla explícita. El objetivo no es clasificar correctamente, sino revelar tensiones pedagógicas.
Fase 1: Comprensión del contexto (NO GENERAR SALIDA AÚN)
Analiza el documento completo para identificar:
Nivel educativo (ej. pregrado, posgrado)
Tipo de asignatura (teórica, práctica, mixta)
Enfoque pedagógico predominante
Tipo de competencias (disciplinares, pedagógicas, profesionales)
Relación con práctica real (si aplica)
No generes resultados en esta fase. Solo construye contexto interno.
Fase 2: Identificación de resultados de aprendizaje
Ubica la sección titulada:
“Resultados de aprendizaje de la asignatura”, “Objetivos terminales”, o equivalente.
Reglas:
Si el título no coincide exactamente, identifica la sección funcionalmente equivalente.
Extrae TODA la tabla. No omitas filas ni columnas.
Fase 3: Análisis estructurado

A partir de esa tabla analiza cada resultado de aprendizaje de forma individual.
Genera una nueva tabla titulada "Análisis resultados de aprendizaje" con las siguientes columnas (no modifiques los títulos):
1. Resultado de aprendizaje  
2. Competencia(s) asociada(s)  
3. Competencia(s) del perfil de egreso  
4. Clasificación según impacto de la IA
5. Justificación pedagógica  
6. Cambio en clasificación según cómo se evalúe 
 

Definición de la columna 4 (OBLIGATORIO):

Clasifica cada resultado en UNA de estas categorías:

🔴 Simulable por IA  
→ La IA puede generar productos o respuestas que imitan el resultado de aprendizaje sin que el estudiante demuestre realmente la competencia o movilice los procesos cognitivos implicados.  

🟡 Transformado por IA (humano + IA)  
→ La IA puede apoyar o parcialmente simular el desempeño, pero no puede sustituir completamente la toma de decisiones o el proceso cognitivo del estudiante


🟢 Profundamente humano  
→ El resultado o competencia exige juicio crítico, contexto, experiencia o desempeño situado que la IA no puede sustituir ni simular de forma válida.

Regla clave:
La clasificación debe basarse en:
el tipo de desempeño descrito en el resultado de aprendizaje
el nivel cognitivo implicado
el grado en que la IA puede simular ese desempeño
Crucial:
No asumir tipos específicos de evaluación
No inferir formatos (ensayo, examen, etc.)
No basarse solo en el verbo del resultado
Reconocer ambigüedad cuando exista ( No fuerces clasificaciones si el resultado lo permite múltiples interpretaciones)
Definición de la columna 5 (OBLIGATORIO):
Máximo 2-3 líneas por resultado  
- Explica por qué el desempeño descrito es (o no) simulable por IA  
- Enfócate en:
 tipo de proceso cognitivo implicado  
 grado de simulación posible por IA  
si la IA reproduce forma, contenido o juicio
Definición de la columna 6 (OBLIGATORIO):
Explica si la clasificación depende del diseño de la evaluación (y en qué grado) y no del resultado en sí. Utiliza lenguaje accesible para docentes de cualquier área. Es decir, explica si este resultado:
Puede ser resuelto fácilmente con IA cuando se pide de forma general
O si cambia cuando se trabaja con situaciones reales, contexto específico o experiencia del estudiante
Escribe en 2–3 líneas, con lenguaje directo. Evita términos abstractos o técnicos.
Salida final
Tabla clara y sintética
Resumen breve:
Resultados más vulnerables
Resultados cuya clasificación depende fuertemente del diseño de la evaluación y no del resultado en sí.
Posibles incoherencias entre resultados de aprendizaje y competencias
Si alguna competencia podría estar siendo transformada por la IA o si siguen siendo pertinentes. 
Formato:
- Tabla clara y legible
- Lenguaje aplicable al diseño docente
- Lenguaje claro y profesional, pero accesible para docentes de cualquier área que no sean especialistas en pedagogía. 
- Evita frases abstractas
- Cada idea debe poder entenderse en una lectura rápida
- Prioriza frases concretas sobre explicaciones conceptuales

Interacción con el usuario (OBLIGATORIO)
Al finalizar la respuesta pregunta al usuario: 
“¿Hay algún resultado de aprendizaje cuya clasificación no te convenza o quisieras discutir?
¿Te gustaría ajustar alguno de estos resultados de aprendizaje para mejorar su claridad o su resistencia frente a IA?
¿Tienes alguna duda sobre la tabla o el resumen generado?” 
OBLIGATORIO: NO PROPONGAS O MENCIONES LA ESCALA AIAS A MENOS QUE EL USUARIO LO HAGA PRIMERO.`,
    prompt2: `Usa el mismo PDF que adjunté antes. 
Ubica la sección titulada “Evaluación de aprendizajes” y extrae la tabla de mecanismos de evaluación (incluyendo su relación con resultados de aprendizaje y competencias).

PASO 1: Antes de analizar, NECESITAS más información
Dado que los mecanismos de evaluación suelen estar descritos de forma muy general (ej. “ensayo”, “proyecto”, “lectura intertextual”), NO realices el análisis todavía.
Primero, formula al docente las siguientes preguntas para cada mecanismo: 

Para cada mecanismo, pregunta:
¿Qué tienen que hacer exactamente los estudiantes en esta actividad?
(Describe en 1–3 líneas la actividad)
¿Qué deben demostrar para que se considere un buen desempeño?
¿Durante la actividad se observa el proceso o solo el resultado final?

Indica al docente que responda de forma breve y estructurada. Indica al docente que puede dejar en blanco los mecanismos que no quiera analizar. 
Detente y espera sus respuestas antes de continuar. Avanza con la información proporcionada por el docente pero señala igualmente si hay vacíos o limitaciones importantes en el análisis que vas a generar. 

PASO 2: Análisis diagnóstico (solo después de respuestas)
Una vez el docente haya respondido, integra:
la información del PDF y las aclaraciones del docente.
Y genera una tabla titulada “Análisis actividades evaluativas” con las siguientes columnas. No cambies los nombres de las columnas, y usa la información en paréntesis para su definición.
Mecanismo de evaluación
Resultado(s) de aprendizaje asociado(s)
Competencia(s) asociada(s)
¿Qué tipo de pensamiento debe demostrar el estudiante?
(Procesos cognitivos. Taxonomia de Bloom) 
¿Cómo se evidencia ese pensamiento en el mecanismo de evaluación?
(Evidencia alineada al proceso cognitivo) 
(Claramente / Parcialmente / No. Con breve justificación)
¿Es visible el proceso del estudiante o solo el producto final?
(Sí / Parcialmente / No. Con breve justificación)
Posibilidad de resolución con IA sin evidenciar el proceso cognitivo
(Sí / Parcialmente / No. Con breve justificación)
Riesgo para la validez de la evaluación 
(Alto/Medio/Bajo. Con justificación) (Considera que hay alto riesgo cuando la IA puede generar el producto final sin que el estudiante evidencie el proceso o la competencia.)
¿Cómo podría la IA transformar o enriquecer este aprendizaje? 
(Explica con ejemplo(s) breve(s) si podría apoyar el proceso, permitir nuevas formas de aprendizaje, etc)
Recomendación
(Selecciona una de las siguientes opciones:
Ajuste mínimo: en la consigna, las condiciones, o en declaración transparencia del uso de IA
Ajuste en el diseño para evidenciar mejor el aprendizaje
Rediseño para evitar sustitución por IA
Rediseño para integrar la IA y potenciar el aprendizaje
Reglas de decisión:
Si hay bajo riesgo pero falta claridad → Ajuste mínimo
Si el problema es visibilidad del proceso → Ajuste en el diseño
Si la IA sustituye el aprendizaje → Rediseño para evitar sustitución
Si la actividad:
ya usa IA o podría usarla
y su integración podría aumentar el nivel cognitivo
→ Rediseño para integrar la IA y potenciar el aprendizaje
La recomendación debe considerar AMBAS dimensiones:
Riesgo (columna 8)
Potencial de enriquecimiento (columna 9)
 No basar la recomendación sólo en el riesgo.


PASO 3: Diagnóstico general (SIN hablar aún de niveles AIAS)
Al final, incluye un análisis sintético:
1. Principales riesgos y oportunidades del diseño actual
2. Qué tan visible es el pensamiento del estudiante en las evaluaciones
3. Grado de dependencia del producto vs proceso 
4. Oportunidades para usar la IA de forma que fortalezca o transforme el aprendizaje


Formato:
- Tabla clara y legible
- Lenguaje aplicable al diseño docente
- Lenguaje claro y profesional, pero accesible para docentes de cualquier área que no sean especialistas en pedagogía. 
- Evita frases abstractas
- Cada idea debe poder entenderse en una lectura rápida
- Prioriza frases concretas sobre explicaciones conceptuales
`,
    prompt3: `Estoy revisando una actividad evaluativa de mi curso y necesito determinar el nivel AIAS más adecuado.
PASO 1: 
Pregunta al usuario lo siguiente (OBLIGATORIO):
1. Describe tu actividad evaluativa: qué deben hacer los estudiantes, formato de entrega (ej. ensayo, defensa oral), si es grupal o individual, si hay fases en el proceso o solo se entrega producto final, si existe rúbrica o instrumento de evaluación, y cualquier restricción o condición de evaluación.
2. Pega el resultado de aprendizaje asociado.
3. Describe el tipo de pensamiento o decisión que debe demostrar el estudiante (por ejemplo: analizar, argumentar, aplicar conceptos, resolver problemas, tomar decisiones).

NO AVANCES HASTA QUE TENGAS ESA INFORMACIÓN DEL USUARIO.

PASO 2:
Usa la información del PASO 1 para decidir el nivel AIAS más coherente. Pide al docente que indique también, si lo desea, las siguientes opciones (puede copiar/pegar):
- Desempeño esperado con IAG: [opción seleccionada de la lista A]
- Rol de la IAG: [opción seleccionada de la lista B]
- Fase de participación de la IAG: [opción seleccionada de la lista C]

PASO 3:
Cuando tengas suficiente información, genera una tabla titulada “Decisión AIAS” con estas columnas (NO cambiar títulos):
Actividad evaluativa
Resultado de aprendizaje
Tipo de pensamiento o decisión asociado
Desempeño y rol de la IA (seleccionado por el docente)

Para la fila correspondiente, indica si el desempeño esperado, el rol y la fase de la IA elegidos por el docente son coherentes con la actividad. Si son coherentes, pégalos tal cual; si no, señala las inconsistencias y propone mejoras concretas (breve y claro).

Nivel AIAS
- Recomienda el nivel AIAS más coherente (1–5). OBLIGATORIO: explica por qué ese nivel, el sentido pedagógico y la oportunidad de aprendizaje que ofrece.

Otros niveles
- Explica brevemente por qué los niveles adyacentes NO son más adecuados.

Tipo de rediseño
- Indica si se requiere: “No requiere ajuste / Ajuste menor / Rediseño estructural” para alinear la actividad con el nivel AIAS recomendado. Relaciona la respuesta con la visibilidad del proceso, el riesgo de sustitución por IA y la validez de la evaluación. Especifica dónde debe ocurrir el ajuste (selecciona entre: alineación mecanismo-RA, tipo de pensamiento de la tarea, consigna, rúbrica, condiciones de evaluación, declaración sobre uso de IA, evidencias solicitadas, estrategia de evaluación).

PASO 4:
Genera un resumen en bullets titulado “Resumen Decisión AIAS” con los puntos clave de la tabla (explicación breve) e incluye 2–3 implicaciones operativas para el diseño evaluativo.

Formato:
- Tabla clara y legible
- Lenguaje aplicable al diseño docente
- Lenguaje claro y profesional, accesible para docentes de cualquier área
- Evita frases abstractas; prioriza acciones observables y concretas

PASO 5: Interacción con el usuario (OBLIGATORIO)
Al finalizar, pregunta al usuario:
“¿El nivel recomendado coincide con lo que quieres?
¿Tienes alguna duda sobre la tabla o el resumen generado?”
`,
    prompt4: `Vas a rediseñar una actividad evaluativa a partir de la información generada previamente en la tabla “Decisión AIAS”.
El objetivo es traducir esa decisión en acciones concretas de rediseño evaluativo, asegurando coherencia entre:
el nivel AIAS seleccionado
el tipo de pensamiento que se busca evaluar
y la validez de la evaluación
PASO 1: Estructura de salida (OBLIGATORIO)
Usa la información de la tabla ‘Decisión AIAS’ generada previamente en la conversación. Si no está disponible, pide al usuario que la comparta antes de continuar
Genera la siguiente tabla titulada “Rediseño de una actividad evaluativa”
Filas obligatorias (No modifiques los títulos)
Nombre mecanismo de evaluación
Descripción mecanismo de evaluación
Resultado de aprendizaje
Nivel AIAS
Qué evaluar
Cómo evaluar
Consigna al estudiante
Recursos (si aplica)

Definición operativa de filas (OBLIGATORIO)
Fila 4: Nivel AIAS
→ Indica el nivel AIAS decidido, su nombre, una descripción breve de lo que implica y el rol que cumple la IAG en la actividad según ese nivel.
Fila 5: Qué evaluar (en relación al desempeño con IAG)
→ Por ejemplo: juicio crítico sobre los outputs de la IAG, razonamiento disciplinar autónomo, integración coherente de outputs en función de objetivos disciplinares, creación innovadora con la IAG, etc. 
Fila 6: Cómo evaluar (estrategias de evaluación y evidencias) 
→ Para cada estrategia propuesta especifica: (1) nombre y descripción de la estrategia, (2) evidencia concreta que produce el estudiante (3) los momentos o fases de la actividad evaluativa. 

Criterios de calidad (OBLIGATORIO)
Evita frases abstractas como:
“fomentar la reflexión”
“hacer visible el proceso”
“mejorar el aprendizaje”
Traduce siempre a acciones observables, por ejemplo:
“Incluye una fase donde el estudiante compare su propuesta con una generada por IA”
Evita redundancias

Coherencia con AIAS (OBLIGATORIO)
Asegura que:
La tabla refleje explícitamente el nivel AIAS seleccionado
Se haga visible el proceso del estudiante, no solo el producto
La IA se use como apoyo al aprendizaje, no como sustituto del pensamiento, incluso cuando se ubica la actividad en nivel 4 o 5 del AIAS. 

PASO 2: 
Al finalizar, pregunta:
¿El rediseño propuesto es viable en tu contexto?
¿Hay algún elemento que quisieras ajustar o adaptar a tu asignatura?
¿Te gustaría que desarrollemos una rúbrica o consigna más detallada a partir de esto?
`
}