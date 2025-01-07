export const isValid = (email) =>{
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    return emailPattern.test(email); 
}

export const getInitial = (name) =>{
    if(!name){
        return "";
    }

    const word = name.split(" ")
    let initial = ""

    for(let i = 0;i<Math.min(word.length,2);i++){
        initial += word[i][0]
    }

    return initial.toUpperCase()
}