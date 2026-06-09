my_list=[35, 30, 31, "Luis", "hola"]

#.insert(posicion, valor) -> inserta un elemento en la posición indicada
my_list.insert(2, "Python")
print(my_list)


pending_task= ["pepe", "juan", "maria", "luis"]
compleat_task=[]
#En este caso usasmor lower para eliminar mayúsculas y Strip para eliminar espacios
#tambien podemos utilizar .replace(" ", "") Esto reemplaza los espacios encontrados por Vacío, eliminándolos.
ready= input("¿Quién ha completado la tarea? ").lower().strip()
print(ready)
if ready in pending_task:
    pending_task.remove(ready)
    compleat_task.append(ready)
print(pending_task)
print(compleat_task)