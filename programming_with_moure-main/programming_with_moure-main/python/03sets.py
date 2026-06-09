### Sets ###

my_set = set()

my_other_set= {} #Esto no es un set a pesar de que los set la sintaxis se usan las llaves, el lenguaje lo reconoce como un diccionario

print(type(my_other_set))

my_other_set= {"Luis", "Elcure", 29} #Ahora por la forma de introducir los datos, se acaba de convertir en set.
print(type(my_other_set))

print(len(my_other_set))

my_other_set.add("RiseWave")
print(my_other_set) #Un set no es una estrucutra ordenada

my_other_set.add("RiseWave")
print(my_other_set) #Los sets no admiten elementos repetidos

print("RiseWave" in my_other_set)
print("RiseWav" in my_other_set)
