
#====Interacción con el usuario

print("Bienvenido a tu calculadora personal")

while True:
    try:
        leads = int(input("Ingresá la cantidad de clases que diste: "))
        ventas = int(input("Ingresa la cantidad de clases que fueron venta: "))
    except ValueError:
        print("Se debe escribir un número. Eje: 22")
        continue

    if leads <= 0:
        print("Ingresa un número mayor a 0")
        continue

    result= (ventas / leads) * 100 

    if result >= 100.0:
        
        print("El resultado es mayor o igual al 100%")
        verify= input("Hiciste una venta por Backoffice o es un error? \n1-Error \n2-Venta por Backoffice\n" )

        if verify == "1":
            continue
        if verify == "2":
            print(result)
        else:
            print("Confirmar presionando 1 o 2")
            continue

    else:
        print(f"{result:.1f}%") 

    


    repetir = input("Desea hacer otro cálculo? s/n: ").lower()

    if repetir == "n":
        print("Bye :)")
        break
