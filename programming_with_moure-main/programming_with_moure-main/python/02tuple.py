## Tuplas ##
my_tuple=()

my_tuple=(29, 1.78,"luis", "elcure")

#Como las tuplas son inmutables, en caso de necesitar modificarla tendremos que pasarla a lista

my_tuple= list(my_tuple)
my_tuple.insert(3, "jose")
my_tuple= tuple(my_tuple)
print(my_tuple)