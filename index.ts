import inquirer from "inquirer";

interface currencyType {
    USD : number,
    EUR : number,
    PKR : number
}

let USD : currencyType = {
    USD: 1,
    EUR: 0.9272,
    PKR: 277.9
}

let PKR : currencyType = {
    USD: 0.0036,
    EUR: 0.0033,
    PKR: 1
}

let EUR : currencyType = {
    USD: 1.0785,
    EUR: 1,
    PKR: 299.733
}

do{
    const input = await inquirer.prompt(
        [
            {
                type: "list",
            name: "from",
            message: "Which currency do you want to exchange?",
            choices: [
                "USD",
                "EUR",
                "PKR"
            ]
            },
            {
                type: "input",
                name: "amount",
                message: "How much currency do you want to exchange?"
            },
            {
                type: "list",
                name: "to",
                message: "From which currency do you want to exchange?",
                choices: [
                    "USD",
                    "EUR",
                    "PKR"
                ]
            }
        ]
    )

    if(input.from === "PKR"){

        if(input.to === "USD"){
            console.log(input.amount * PKR.USD);
        }
        else if(input.to === "EUR"){
            console.log(input.amount * PKR.EUR);
        }
        else{
            console.log(input.amount );
        }
    }
    
    if(input.from === "EUR"){
    
        if(input.to === "USD"){
            console.log(input.amount*EUR.USD);
        }
        else if(input.to === "PKR"){
            console.log(input.amount*EUR.PKR);
        }
        else{
            console.log(input.amount);
        }
    }
    
    if(input.from === "USD"){
    
        if(input.to === "PKR"){
            console.log(input.amount*USD.PKR);
        }
        else if(input.to === "EUR"){
            console.log(input.amount*USD.EUR);
        }
        else{
            console.log(input.amount);
        }
    }
}
while(true);

// console.log(currency.USD);