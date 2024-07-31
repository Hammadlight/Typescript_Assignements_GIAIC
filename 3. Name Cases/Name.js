var personName = "";
personName = prompt("What is your name?") || "";
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
if (personName !== null && personName !== "") {
    alert("Hello ".concat(personName, ", Here are your name in:\nLowercase: ").concat(lowercase, "\nUppercase:  ").concat(uppercase, "\nTitlecase:  ").concat(titlecase));
}
else {
    alert("please fill your name !");
}
