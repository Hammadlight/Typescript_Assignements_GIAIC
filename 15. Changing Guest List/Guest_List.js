var Guest_List = ["Randy Orton", "Tom Cruise", "Goldberg"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr." + Guest_List[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n");
}
var absent_Guest = "Tom Cruise";
var new_Guest = "Kamran Tessori";
Guest_List[0] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr." + Guest_List[i] + ",\n\nIt is our pleasure to invite you in our party.\n\nThanks You!\n\n");
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party"));
