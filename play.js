const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};


// create array
const hobbies = ['cooking', 'sport'];
for (let hobbie of hobbies) {
    console.log(hobbie);
}

hobbies.push('Swimming');

// copy array
const cpyArray = hobbies.slice();
const cpyArray1 = [hobbies];
const cpyArray2 = [...hobbies];

const toArray1 = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

const toArray2 = (...args) => {
    return args;
}

const printName1 = (person) => {
    return person.name;
}

const printName2 = ({ name }) => {
    return name;
}

const { name, age } = person;

const [ hobby1, hobby2 ] = hobbies;

// output
// console.log( hobbies.map(hobby => 'Hobby: ' + hobby) );
// console.log(hobbies);
// console.log(cpyArray);
// console.log(cpyArray1); // [[ 'cooking', 'sport', 'Swimming' ]]
// console.log(cpyArray2); // [ 'cooking', 'sport', 'Swimming' ]
// console.log(toArray1(1, 2, 3, 4)); // [ 1, 2, 3 ]
// console.log(toArray2(1, 2, 3, 4)); // [ 1, 2, 3, 4 ]
// console.log(printName1(person)); // Max
// console.log(printName2(person)); // Max
// console.log(name, age); // Max 29
// console.log(hobby1, hobby2); // cooking sport

// asyncs code and promises
const fetchData1 = callback => {
    setTimeout(() => {
        callback("Done!");
    }, 1_500);
}

setTimeout(() => {
    console.log("Timer is done");
    fetchData1(text => {
        console.log(text);
    });
}, 2_000);

const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1_500);
    });

    return promise;
}

setTimeout(() => {
    console.log("Timer is done");
    fetchData2()
        .then(text => {
            console.log(text);
            return fetchData2();
        })
        .then(text2 => {
            console.log(text2);
        });
});