### Dates ###
#importamos el objeto "datetime" desde el módulo datetime
from datetime import datetime
#función para imprimir la fecha
def print_date(date):
    print(date.year)
    print(date.month)
    print(date.day)
    print(date.hour)
    print(date.minute)
    print(date.timestamp())



#Utilizamos el metodo now() para inicializar la fecha con el momento actual
now= datetime.now()
#impri
print_date(now)

timestamp= now.timestamp()
print(timestamp)