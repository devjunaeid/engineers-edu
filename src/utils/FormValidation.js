export function regValidation(values){
    const erros = {};
    const namePattern = /^[a-zA-Z ,.'-]+$/;
    const phonePattern = /^[0-9]{11}$/;
    const passPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if(values.user_name == ""){
        erros.user_name = "Name can not be empty!"
    }else if(!namePattern.test(values.user_name)){
        erros.user_name = "Invalid Characters!! Name can only have alphabets."
    }

    if(values.user_id == ""){
        erros.user_id = "Phone number can not be empty!"
    }else if(!phonePattern.test(values.user_id)){
        erros.user_id = "11 char long. Only numbers ex.(01100000000)"
    }

    if(values.password == ""){
        erros.password = "Password can not be empty!"
    }else if(!passPattern.test(values.password)){
        erros.password = "min 8 char, At least one uppercase, lowercase, number and special char."
    }

    return erros;
}

export function loginValidation(values){
    const erros = {};
    const phonePattern = /^[0-9]{11}$/;
    const passPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if(values.user_id == ""){
        erros.user_id = "Phone number can not be empty!"
    }else if(!phonePattern.test(values.user_id)){
        erros.user_id = "11 char long. Only numbers ex.(01100000000)"
    }

    if(values.password == ""){
        erros.password = "Password can not be empty!"
    }else if(!passPattern.test(values.password)){
        erros.password = "min 8 char, At least one uppercase, lowercase, number and special char."
    }
    return erros;
}