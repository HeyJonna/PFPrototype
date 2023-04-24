import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

#Use a service account
cred = credentials.Certificate('fies-firestore.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

dinero_cuenta = []
print('--- NUEVO DEPOSITO ---')
cuenta_contribuyente = input('Ingrese su número de cuenta: ')
monto_deposito = int(input('Ingrese monto a depositar $: '))
dinero_cuenta.append(monto_deposito)
origen_deposito = input('Ingrese el país donde se envía el dinero: ')
repetir_proceso = input('¿Desea realizar otro deposito? (y/n): ')

while repetir_proceso == 'y':
    deposito_proceso = print('--- NUEVO DEPOSITO ---')
    monto_deposito = int(input('Ingrese monto a depositar $: '))
    dinero_cuenta.append(monto_deposito)
    repetir_proceso = input('¿Desea realizar otro deposito? (y/n): ')

print('--- PROCESO FINALIZADO ---')

def sumar_lista(lista):
    suma = 0

    for numero in lista:
        suma += numero
    
    return suma

suma_dinero = sumar_lista(dinero_cuenta)

prom = suma_dinero / len(dinero_cuenta)

doc_ref = db.collection(u'users').document(u'depositos')
doc_ref.set({
    u'Quien Envia': cuenta_contribuyente,
    u'Monto abonado': dinero_cuenta,
    u'País de destino': origen_deposito,
    u'Monto total': suma_dinero,
    u'Promedio mensual': prom,
})





