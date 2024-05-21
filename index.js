function isAutomorphic(number){
    const square = number* number;
    return square.toString().endsWith(number.toString());
}

function main(){
    const number = parseInt(process.argv[2],10);

    if(isNaN(number))
    {
        console.log("please provide a valid number");
        process.exit(1);

    }
    if (isAutomorphic(number)) {
        console.log(`${number} is an automorphic number.`);
    } else {
        console.log(`${number} is not an automorphic number.`);
    }
}

main();