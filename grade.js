var grade = prompt("what have you got in exam?")
if ((grade >= 80) && (grade <=100)) {
	document.write("WOW! you have got A+ and your grade point is 5.00 now celebrate but do not take it for granted!");
}
else if ((grade >= 70) && (grade <=79)) {
	document.write("WOW! you have got A and your grade point is 4.50");
}
else if ((grade >= 60) && (grade <=69)) {
	document.write("You have got A- and your grade point is 4.0");
}
else if ((grade >= 50) && (grade <=59)) {
	document.write("You have got B and your grade point is 3.5");
}
else if ((grade >= 40) && (grade <=49)) {
	document.write("WOW! you have got C and your grade point is 3.0");
}
else if ((grade >= 33) && (grade <=39)) {
	document.write("WOW! you have got D and your grade point is 2.75");
}
 else if ((grade >= 0) && (Grade <= 32)) {
        document.write("Sorry! You have Failed and your grade point is 0 Try harder!!");
    }
    else {
        document.write("Invalid Input. Please Try Again.");
    }
