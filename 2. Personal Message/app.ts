let PersonName :string = '';
PersonName = prompt('What is your name?') || '';
if(PersonName !== null && PersonName !== ''){
    alert(`Hello ${PersonName}, Would you like to learn some python today?`)
}
else {
    alert(`You have to fill your name !`)
}