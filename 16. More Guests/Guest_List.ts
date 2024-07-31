let Guest_List :string[] = [`Randy Orton`, `Tom Cruise`, `Goldberg`];
//  for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`)
// }
let absent_Guest :string = `Randy Orton` ;
let new_Guest :string = `Kamran Tessori` ;
Guest_List[0] = new_Guest ;
for(let i=0; i<Guest_List.length; i++){
    console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`)}
    console.log (`Mr. ${absent_Guest} is not coming to the party`);
    console.log(`Good News! We find big table so we are inviting 3 more guests. `)
    Guest_List.unshift(`Sir Zia Khan`);
    Guest_List.splice(2 , 0, `Alain`);
    Guest_List.push(`Broick Lesnar `);
    for(let i=0; i<Guest_List.length; i++){
    console.log(`Dear Mr.` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n`)}