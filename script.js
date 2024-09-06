const prompt = require('prompt-sync')();
class Comparison {
    constructor(num1, num2, num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    }
    compare () {
        //Miramos si todos los numeros son iguales como primera condicion
        if (this.num1 === this.num2 && this.num2 === this.num3) {
            console.log("All numbers are equal.");
        }else{
            //Comparamos: el primer if con todos los 1, el segundo con los 2, y el tercero con el numero 3
            if (this.num1 >= this.num2 && this.num1 >= this.num3) {
                //Si el primer número es el mayor, verificamos si el segundo número es mayor o igual que el tercero
                if (num2 >= num3) {
                    this.printOrder(this.num1, this.num2, this.num3);
                }else{
                    this.printOrder(this.num1, this.num3, this.num2);
                }
            }else if(this.num2 >= this.num3 && this.num2 >= this.num1) {
                //// Si el segundo número es el mayor, comparamos el primero y el tercero para ver cuál es mayor
                if (this.num1 >= this.num3) {
                    this.printOrder(this.num2, this.num1, this.num3);
                }else{
                    this.printOrder(this.num2, this.num3, this.num1);
                }
            } else { 
                //If con tercer numero: luego comparamos el primero y el segundo para ver cuál es mayor
                if (this.num2 >= this.num1) {
                    this.printOrder(this.num3, this.num2, this.num1);      
                }else{
                    this.printOrder(this.num3, this.num1, this.num2); 
                }
            }
        }   
    }
    //aqui me los pasa ordenados y para lower order los invierto y yapp<3
    printOrder(a, b, c) {
        console.log("The major order is: ", a, b, c);
        console.log("The lower order is: ", c, b, a);
    }

}
num1 = parseInt(prompt("Enter the first number: "));
num2 = parseInt(prompt("Enter the second number: "));
num3 = parseInt(prompt("Enter the third number: "));

const example = new Comparison(num1, num2, num3);
example.compare();

