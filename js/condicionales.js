function calculadora(A,B,Operador){
let resultado;
switch(Operador){
    case "+":
        resultado = A + B;
        break;
    
    case "-":
        resultado = A - B;
        break;

    case "*":
        resultado = A * B;
        break;

    case "/":
    resultado = A / B;
        break;

        case "/":
            if (B == 0) {
                resultado = "No se puede dividir por 0";
            } else {
                resultado = A / B;
            }
            break;

    default:
    resultado = "Operador incorrecto";



}




}



let compra = 15000;

let descuento = compra > 10000 ? compra * 0.20 : 0;

let total = compra - descuento;

alert("Total a pagar: $" + total);











// function mayor(A, B, C) {
//     if (A > B && A > C) {
//         alert("El mayor es: " + A);
//     } else if (B > A && B > C) {
//         alert("El mayor es: " + B);
//     } else {
//         alert("El mayor es: " + C);
//     }
// }


// console.log("El mayor es:", mayor(1, 8, 5));



// 2 par o impar if(numero % 2 ===0)

// 3 es mayor de edad

// 4 +>numero <-

// swich(c){

// case c:
// breach
// case c:
// breach
// case c:
// default:
//}

//  dia de la semana 
// let now=new date()
// let numday =now.getday();
// swich(numday):
// {case 6 :
// (sabado)
// breach;
//case 0:
//(domingo)//
//breach; //
//default : (otros dias)
//breach
// }//


// let now = new Date();
// let numDay = now.getDay();

// switch (numDay) {
//     case 6:
//         alert("Sábado");
//         break;

//     case 0:
//         alert("Domingo");
//         break;
    
//     case 1:
//         alert("Lunes");
//         break;
    
    
//     case 2:
//     alert("Martes");
//     break;
    

//     default:
//         alert("Otro día");
//         break;
// }


// function mostrarDia() {

//     let now = new Date();
//     let numDay = now.getDay();

//     switch (numDay) {

//         case 0:
//             alert("Domingo");
//             break;

//         case 1:
//             alert("Lunes");
//             break;

//         case 2:
//             alert("Martes");
//             break;

//         case 3:
//             alert("Miércoles");
//             break;

//         case 4:
//             alert("Jueves");
//             break;

//         case 5:
//             alert("Viernes");
//             break;

//         case 6:
//             alert("Sábado");
//             break;

//         default:
//             alert("Otro día");
//     }
// }

// mostrarDia();

// function calculadora(A, B, operador) {

//     let resultado;

//     switch (operador) {

//         case "+":
//             resultado = A + B;
//             break;

//         case "-":
//             resultado = A - B;
//             break;

//         case "*":
//             resultado = A * B;
//             break;

//         case "/":
//             resultado = A / B;
//             break;

//         default:
//             resultado = "Operador incorrecto";
//     }

//     alert("Resultado: " + resultado);
// }


// Ejemplo
// let num1 = 5;
// let operador = "*";
// let num2 = 3;

// calculadora(num1, num2, operador);