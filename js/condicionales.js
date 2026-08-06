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


let now = new Date();
let numDay = now.getDay();

switch (numDay) {
    case 6:
        alert("Sábado");
        break;

    case 0:
        alert("Domingo");
        break;
    
    case 1:
        alert("Lunes");
        break;
    
    
    case 2:
    alert("Martes");
    break;
    

    default:
        alert("Otro día");
        break;
}