
#====Calculadora de porcentajes hecha función

def calculadora():
    "Calcula el porcentaje de conversión en ventas"

    print("Bienvenido a tu calculadora personal")
    
    while True:
        try:
            leads = int(input("Ingresá la cantidad de clases que diste: "))
            ventas = int(input("Ingresa la cantidad de clases que fueron venta: "))
        except ValueError:
            print("Se debe escribir un número. Ej: 22")
            continue

        if leads <= 0:
            print("Ingresa un número mayor a 0")
            continue
        elif ventas <= 0:
            print("El número no puede ser 0 o menor a 0 \n Volvé a ingresar los datos")
            continue
        
        resultado = (ventas / leads) * 100



        if resultado >= 100.0:
            
            print("El resultado es mayor o igual al 100%")
            confirmar= input("Hiciste una venta por Backoffice o es un error? \n1-Error \n2-Venta por Backoffice\n" )
        
            if confirmar == "1":
                print("Vuelva a ingresar los números")
                continue
            
            elif confirmar == "2":
                print(f"{resultado:.1f}%")
            
            else:
                while confirmar != "1" and confirmar != "2":
                        
                        print("Confirmar presionando 1 o 2")

                    
                        confirmar= input("Hiciste una venta por Backoffice o es un error? \n1-Error \n2-Venta por Backoffice\n" )
                        
                        if confirmar == "1":
                            print("Vuelva a ingresar los números")
                        
                            break
                        
                        elif confirmar == "2":
                            print(f"{resultado:.1f}%")
                            break
        
            if confirmar == "1":
                continue           
        
        
        
        else:
            print(f"{resultado:.1f}%") 
 
        repetir = input("Desea hacer otro cálculo? s/n: ").lower()

        if repetir == "n":
            print("Bye :)")
            break      

calculadora()





    

