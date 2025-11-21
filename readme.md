# calculadora
# instruciones de uso de la calculadora
# 1.inicio
- una etiqueta muesta el numero 0

# 2.ingresar el primer numero
- hace click uno o varios numeros, que son botones del 0 al 9  
- cada numero se muestra en la etiqueta donde estaba el 0.

# 3.seleccionar operacion
- hace click en cuaquir boton de operaciones disponible.  
- El primer numero se guarda internamente.  
- la etiqueta principal se limpia para ingresar el segundo numero.  
- dos etiquetas adicionas ayudan a lo visual, una resibe el primer numero y otra la operacion 

# 4.ingresar el segundo numero
- hace click uno o varios numeros, que son botones del 0 al 9 
- cada numero se muestra en la etiqueta donde estaba el 0

# 5.calcular resultado
- hace click en el botón =  
- se hace la operacion usando el primer y segundo numero
- la etiqueta principal muestra el resultado  
- las etiqueta que mostraban el primer numero y la operación se limpian

# 6. borrar y reiniciar
- hace click en el botón borrar  
- la etiqueta principal muestra otra vez 0  
- todas las variables internas se reinician

#  Explicar la diferencia entre CI y CD.
La CI o Integracion continua es basicamente cuando cada vez que alguien hace un cambio en el codigo, automaticamente se corren pruebas, se revisa el estilo con el linter y se verifica que todo funcione, así si algo falla se detecta rápido y no rompe todo el proyecto. La CD o Entrega/Despliegue Continuo es lo que sigue despues, que el codigo que ya paso las pruebas se pueda poner en producción o en un servidor de pruebas automaticamente, sin tener que hacerlo manual, garantizando que siempre esté listo para usar y funcionando bien. En pocas palabras, la CI sirve para probar el codigo mientras se escribe y la CD sirve para entregarlo o desplegarlo cuando ya está listo.

# Indicar lenguaje, linter y herramienta de cobertura a utilizar, con justificación.
 - El lenguaje que utilice para pogramar es javascript por la facilidad de usar jest y la creacion de una pagina sencilla

 - para el linter use ESLint porque detecta errores de sintaxis y problemas de estilo automaticamente

 - para la herramienta de cobertura usare jest para hacer pruebas unitarias de forma sencilla y genera buenos resporte para guardar la informacion

# Definir y justificar un umbral mínimo de cobertura (70–90%)
Para el umbral minimo de cobertura decidi poner 70 porque la calculadora es un proyecto pequeño y con eso ya se asegura que la mayoria de las funciones importantes esten probadas

# Uso de nektos/act:
Investigar qué es act y documentar en README.md:
- Qué hace.
    permite que corran el pipeline que se crean de maneran local y ver los resultados
- Requisitos (Docker)
    para usar act se necesita tener instalado Docker porque act usa contenedores para simular el entorno de GitHub Actions
- Comando para ejecutar el workflow localmente
    act -j build

# Validación y logs:
En README.md explicar:
- Cómo identificar fallos de linter, pruebas y cobertura en logs.
    para identificar fallos de linter, pruebas y cobertura en los logs simplemente hay que mirar cada paso del workflow, si el linter encuentra errores en los archivos de codigo aparece listado en los logs y el paso falla, si alguna prueba unitaria no pasa Jest muestra en los logs que prueba fallo con los valores esperados y los que obtuvo, y si la cobertura es menor al umbral que definimos Jest tambien marca error y el workflow se detiene automaticamente mostrando que no se cumplio la cobertura minima
- Generar un run fallido y uno exitoso y explicar la diferencia
    Para generar un run exitoso solo hay que asegurarse que el codigo no tenga errores de sintaxis, y que todas las pruebas unitarias pasen y la cobertura cumpla el 70%, asi todos los pasos del workflow salen con check verde, mientras que para generar un run fallido se puede hacer algo sencillo como escribir mal una funcion, dejar un error de sintaxis o agregar una funcion sin prueba, entonces el linter marca error, alguna prueba falla o la cobertura baja del 70%, y en los logs se ve la x roja en el paso que fallo y el workflow se detiene, esa es la diferencia entre un run exitoso y uno fallido
#IA y Ética:
- Investigar dos métodos para detectar código generado por IA.
    Bueno hay varias paginas donde usted agrega la informacion y especifica cual es el porcentaje de IA, y el otro metodo seria manual, puesto que la IA siempre inicia de la misma forma cuando se investiga algo, por ejemplo, "antes de hacer eso primero debemos...."
- Explicar por qué no es posible asegurar al 100% la autoría.
    no es posible porque muchos de los detectores buscan lenguaje tecnico y si un estudiante domina ese lenguaje puede paracer que es IA pero en realidad tiene un lenguage tecnico
- Proponer políticas razonables de uso de IA en educación y calidad.
    pues para mi la IA es ayuda de velocidad, es decir, que me ayuda hacer mas rapido lo que ya se,tambien la IA si se usa para estudiar es una buena herramienta porque incluso te puede explicar muy a detalle, pero es una herramienta no la informacion final, porque esta puede cometer errores
