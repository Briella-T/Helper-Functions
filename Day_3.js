function area_of_circle(num){
    return Math.PI * num ** 2;
}

function salesTaxOnly(x, y){
    return (x / 100) * y;
}

function salesTaxTotal(x, y){
    return ((x / 100) * y ) + y;
}

function getAlphaNumericPassword(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++){
        password += chars.charAt (Math.floor(Math.random()* chars.length));
    }
    return password;
}

