"use strict";
let Guest_List = [`Imran Khan`, `Asif Ali Zardari`, `Nawaz Sharif`];
//  for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`)
// }
let absent_Guest = `Imran Khan`;
let new_Guest = `Kamran Tessori`;
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`)}
// console.log (`Mr. ${absent_Guest} is not coming to the party`);
// console.log(`Good News! We find big table so we are inviting 3 more guests. `)
// I added 8 guest in array
Guest_List.unshift(`Sir Zia Khan`);
Guest_List.splice(2, 0, `Maryam Nawaz`);
Guest_List.push(`Bilawal Butto `);
// I print 6 array 
// for(let i=0; i<Guest_List.length; i++){
// console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`)}
// Sorry message to guest for not inviting.
// console.log(`\nSorry we can not arrange big table, only two peoples will be invited.`);
// I removed guest
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mr. ${remove_Guest}, Your are not invited for Dinner.`);
}
// our invited 2 guest left.
// for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr.` + Guest_List[i] + `,\n\nYou are still invited.\n\nThanks You!\n\n`)}
// I removed array from guest.
Guest_List.splice(0, 2);
console.log(Guest_List);
//Excercise # 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of guest are: ${Guest_List.length}`);
