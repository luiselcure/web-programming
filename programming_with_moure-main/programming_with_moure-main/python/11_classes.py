### CLASSES ###

class Person:
    #Método constructor de clases.
    def __init__(self, name, surname, alias="Sin alias"):
        self.full_name=f"{name} {surname}"#propiedad púb}}}}}}}}lica
        
        self.__name = name #Crear una propiedad privada

        #Función dentro de la clase.
        def walk(self):
            print(f"{self.full_name} está caminando")


my_person= Person("Luis", "Elcure")
print(my_person.full_name)
#Llamado de la función dentro de la clase, a travéz de una variable.
my_person.walk()