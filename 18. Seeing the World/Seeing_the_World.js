"use strict";
// Store the locations in a array, Make sure the array is not in alphabetical order.
let places = [`Italy`, `Germany`, `Agra`, `Eifel Tower`, `Times square`];
//Print your array in its original order.
console.log(`original ` + places);
//print your array in alphabetical order without modifying the actual list.
console.log(`copy ` + [...places].sort());
//show that your array is still in its original order by printing it.
console.log(`original ` + places);
//print your array in reverse alphabetical order without changing the order of the original list.
console.log(`copy ` + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log(`original ` + places);
//Reverse the order of your list. print the array to show that its order has changed.
console.log(`original ` + places.reverse());
//Reverse the order of your list again. Print the list to show it's back to its original order.
console.log(`original ` + places.reverse());
//sort your array to its stored in alphabetical order.print the array to show that its order has been changed.
console.log(`original ` + places.sort());
//sort to change your array so its stored in reverse alphabetical order' print the list to show its order has changed.
console.log(`original ` + places.sort().reverse());
