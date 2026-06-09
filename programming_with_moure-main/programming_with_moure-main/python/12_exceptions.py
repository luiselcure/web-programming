###  Exception Handling  ### para manejo de errores
numberOne, numberTwo= 5, "1" 

"""print(numberOne + numberTwo)"""
"""Funciona para evitar que el programa termine con errores, y "except: " muestra la alternativa en caso de que no se pueda ejetuar una acción que da error"""
#Try -  except
try:
    print(numberOne + numberTwo)
    print("No se ha producido un error")
except:
    #Se ejecuta cuando se produe una excepción.
    print("Se ha producido un error")


#try - except - else - finally
numberTwo = 1
try:#Opcional
    print(numberOne + numberTwo)
    print("No se ha producido un error")
except:#Obligatorio
    print("Se ha producido un error")
else:#Opcional
    #Se ejecuta si no se produce una excepción.
    print("La ejecución continúa crrectamente.")
finally:#Opcional
    #Se ejecuta siempre
    print("La ejecución continua")
numberOne="1"

#Excepciones por tipo
try:
    print(numberOne + numberTwo)
    print("No se ha producido un error")
except TypeError:#para usar cuando la consola da un tipo específico de error
    #Se ejecuta cuando se produe una excepción.
    print("Se ha producido un error")

#Captura de la información de la excepción

try:
    print(numberOne + numberTwo)
    print("No se ha producido un error")
except ValueError as error:#Para poder gestionar un tipo específico de error en la consola.
    
    print(error)#Permite mostrar la información del tipo de error que se tiene.
except Exception as exception:#La palabra Exception para cualquier tipo de error genérico (cuando nó conocemos el tipo de error que puede tener el código)
    print(exception)