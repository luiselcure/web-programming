### PYTHON BASIC LEVEL EXERCISE###

# 1. Sistema de Alerta de Inventario (Listas, Diccionarios y Bucles):
# Crea una función que reciba una lista de diccionarios con productos (nombre, stock, precio). [1, 2]
# El programa debe recorrer la lista con un bucle for y generar una nueva colección con los nombres 
# de los productos cuyo stock sea inferior a 10 unidades para emitir una alerta. [3, 4]

inventory=[]
active_load=True
def inv_input():
    global inventory
    global active_load
    name=input("Ingrese el nombre del producto: ")
    stock=input(f"Ingrese la cantidad para {name}: ")
    price=input(f"Ingrese el precio para {name}")

    product= {"Producto=":name, "Cantidad=":stock, "Precio=":price }
    inventory.append(product)
    keep_load=input("Quiere continuar la carga?").lower()

    if keep_load== "yes":
        active_load=False
    
    return (inventory, active_load)

while active_load:
    inv_input()

    
    

# 2. Validador de Seguridad con Regex (Módulos, Strings y Excepciones):
# Importa el módulo 're' para crear una función de validación de correos electrónicos. [5, 6]
# La función debe comprobar el patrón estándar; si el formato es inválido, debe lanzar un 
# ValueError con un mensaje descriptivo capturado en un bloque try-except. [7-9]

# 3. Calculadora de Fechas para Proyectos (Módulo datetime y Manejo de Errores):
# Desarrolla un programa que utilice el módulo 'datetime' para calcular la diferencia de días 
# entre la fecha actual y una fecha de entrega ingresada por el usuario. [10-12]
# Debes manejar la excepción en caso de que el formato de entrada sea incorrecto (ej. 31/02). [13, 14]

# 4. Analizador de Texto con Frecuencia (Diccionarios, Bucles y Control de Flujo):
# Escribe una función que reciba un párrafo y devuelva un diccionario con la frecuencia de palabras únicas. [2, 15]
# Utiliza estructuras de control para ignorar signos de puntuación y filtrar palabras "vacías" 
# de menos de 3 letras antes de incluirlas en el conteo. [16, 17]

# 5. Generador de Fibonacci Filtrado (Funciones y List Comprehension):
# Implementa una función recursiva o iterativa que genere los primeros 'n' números de la sucesión de Fibonacci. [18-20]
# Posteriormente, utiliza una List Comprehension para crear una nueva lista que contenga 
# únicamente los números pares de dicha sucesión. [21-23]

# 6. Gestor de Cuentas Bancarias (Clases, Atributos Privados y Encapsulamiento):
# Diseña una clase 'CuentaBancaria' con atributos privados (usando guion bajo) para el saldo. [12, 24, 25]
# Crea métodos para 'depositar' y 'retirar', asegurándote de lanzar excepciones si se intenta 
# retirar más dinero del disponible o si se ingresan montos negativos. [9, 26]

# 7. Conversor de Datos JSON a CSV (Ficheros y Módulos Estándar):
# Crea un script que lea un archivo JSON con datos de usuarios y los transforme a un archivo CSV. [27, 28]
# Utiliza context managers ('with open') para garantizar que los ficheros se cierren 
# correctamente tras la operación, incluso si ocurre un error. [9, 29, 30]

# 8. Filtro de Datos de API Mock (Funciones de Orden Superior y Lambda):
# Dada una lista de objetos de una clase 'Usuario', usa la función filter() con una lambda 
# para obtener solo a los usuarios mayores de 18 años. [20, 31, 32]
# Luego, usa map() para transformar ese resultado en una lista de sus nombres en mayúsculas. [33, 34]

# 9. Sistema de Autenticación con Reintentos (Bucles while y Excepciones):
# Simula un proceso de login usando un bucle while que permita hasta 3 intentos fallidos. [35, 36]
# El programa debe validar las credenciales contra un diccionario; si falla los 3 intentos, 
# debe lanzar una excepción personalizada de seguridad y bloquear el acceso. [37, 38]

# 10. Mini-Framework de Enrutamiento (Clases, Herencia y Abstracción):
# Crea una clase 'Router' que gestione una lista de rutas de una aplicación simulada. [24, 39]
# Usa herencia para crear 'ApiRouter', añadiendo prefijos automáticos a las rutas (ej. /api) 
# y manejando un error 404 mediante excepciones si se solicita una ruta inexistente. [40-42]