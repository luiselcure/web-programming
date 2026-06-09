### Diccionarios ###

my_dict = dict()
my_other_dict ={}

my_other_dict={"Nombre": "Luis", "Apellido": "Elcure","Edad":29, 1:"Python"}

print(my_other_dict)

my_dict= {"Nombre": "Luis",
        "Apellido": "Elcure",
        "Edad":29, 
        "Lenguajes":{"Python","Swift", "Kotlin"}
        }
print(my_dict["Nombre"])
my_dict["Calle"]="Antártida Argentina"
print(my_dict)
del my_dict["Calle"]
print(my_dict)

#Este método que usabamos con los sets no busca por valor sino por la clave dentro del dict.
print("Nombre" in my_dict)

#para comprobar cuál es el valor tendremos que llamar a la clave.
print(my_dict["Apellido"])


print(my_dict.items())
print(my_dict.keys())
print(my_dict.values())


#con este método "fromkeys" se crean diccionarios con las claves que estamos llamando, pero sin valores
my_new_dict=my_dict.fromkeys(("Nombre", "Lenguajes"))
print(my_new_dict)