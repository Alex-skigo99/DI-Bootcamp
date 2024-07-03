function greeting(name = 'Student', greet = 'Hello') {
    return `${greet}, ${name}`
}

console.log(greeting(undefined, 'Wellcome'))

function age_mum_dad(my_age) {
    mum_age = my_age * 2;
    dad_age = mum_age * 1.2;
    return [mum_age, dad_age]
}

console.log(age_mum_dad(25))

console.log(this)
