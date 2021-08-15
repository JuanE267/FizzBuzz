const fizzbuzz = (a) => {

    for (let i = 1; i <= a; i++) {

        if ((i % 3) == 0 && (i % 5) == 0) {

            console.log(`FizzBuzz - ${i}`);

        } else if ((i % 5) == 0) {

            console.log(`Buzz - ${i}`);

        } else if ((i % 3) == 0) {

            console.log(`Fizz - ${i}`);

        } else {

            console.log(i);
        }


    }

}

let a;

fizzbuzz(prompt('inserte un numero: ', a, ''));