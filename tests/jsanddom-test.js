/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
     ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
/********************************
reverseString Test.............
********************************/
test("reverseString Test", 5, function() { 
     equal(typeof reverseString, 'function', 'Verify the reverseString function is present'); 
     ok(reverseString('Sejal'), 'lajeS', 'Expect a valid result'); 
     // Even number of characters 
     equal(reverseString('PatelS'), 'SletaP', 'Check even # Chars'); 
     // Odd number of characters 
     equal(reverseString('Sejal'), 'lajeS', 'Check odd # Chars'); 
     // Two Words 
     equal(reverseString('Sejal Patel'), 'letaP lajeS', 'Check with two words'); 
 });
/********************************
findMinValue Test.............
********************************/ 
test( "findMinValue Test", 2, function() { 
     // Verify the method exists 
     equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );  
     // Make sure the result returns the lowest value 
     var min_value_test_array = [3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]; 
     ok( findMinValue( min_value_test_array ), -1.1, 'Expected -1.1 as the result, the result was: ' + findMinValue( min_value_test_array ) ); 
}); 
/********************************
findDistinctValues Test.............
********************************/ 
test("findDistinctValues", 3, function(){ 
     equal(typeof findDistinctValues, 'function', 'Verify the findDistinctValues function is present'); 
     deepEqual(findDistinctValues([3, 5, 7, 20, .18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12]), [3, 5, 7, 20, 0.18, 1, -1.1, 12, Infinity], 'Check that we got a unique set of numbers'); 
     deepEqual(findDistinctValues([1,3,'dupe',5,5,'5',7,3,8,'dupe']), [1,3,'dupe',5,'5',7,8], 'Check that strings evaluate uniquely'); 
}); 
/********************************
doFizzBuzz Test.............
********************************/ 
test("doFizzBuzz Test", 1, function(){ 
     equal(typeof doFizzBuzz, 'function', 'Verify the doFizzBuzz function is present'); 
}); 
/********************************
removeFruits Test.............
********************************/ 
test("removeFruits", 2, function() { 
     equal(typeof removeFruits, 'function', 'Verify the removeFruits function is present'); 
     var fruits = ['apple', 'orange', 'pear', 'peach', 'plum', 'banana', 'melon']; 
     deepEqual(removeFruits(fruits, ['pear', 'apple', 'melon']), ['orange', 'peach', 'plum', 'banana'], 'Verify we revmoved the correct fruits from the list'); 
}); 
/********************************
pushOntoArray Test.............
********************************/ 
test("pushOntoArray", 3, function() { 
     equal(typeof pushOntoArray, 'function', 'Verify the pushOntoArray function is present'); 
     var arr = [1, 2, 3, 4, 5]; 
     pushOntoArray(arr, 6); 
     deepEqual(arr, [1, 2, 3, 4, 5, 6], 'Check single value push'); 
     pushOntoArray(arr, [7,8,9]); 
     deepEqual(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Check array push'); 
 }); 
/********************************
splitListStrUsingComma Test.............
********************************/ 
test("splitListStrUsingComma", 3, function(){ 
     equal(typeof splitListStrUsingComma, 'function', 'Verify the splitListStrUsingComma function is present'); 
     var str = 'The, quick, brown, fox jumped over'; 
     deepEqual(splitListStrUsingComma(str), ['The',' quick',' brown',' fox jumped over'], 'Check split string'); 
     deepEqual(splitListStrUsingComma(''), [], 'Check empty string results'); 
}); 
/********************************
sum Test.............
********************************/ 
test("sum", 2, function() { 
     equal(typeof sum, 'function', 'Verify the sum function is present'); 
     equal(sum(1, 1, 2, 3, 5, 7), 19, 'Check that sum works correctly'); 
}); 
/********************************
isOnlyWhitespace Test.............
********************************/ 
test("isOnlyWhitespace Test", 3, function() { 
     equal(typeof isOnlyWhitespace, 'function', 'Verify the isOnlyWhitespace function is present'); 
     equal(isOnlyWhitespace('   \t\r  \n   \t \n   '), true, 'Check with only white space characters'); 
     equal(isOnlyWhitespace('   \t\r  fn   \t \n   '), false, 'Check with regular characters'); 
}); 
/********************************
Closure Test.............
********************************/ 
test("Closure Test", 6, function() { 
     equal(typeof MyClosure, 'function', 'Verify MyClosure constructor'); 
     var my1 = MyClosure(42); 
     var my2 = MyClosure('different value'); 
     equal(my1.privateFunction, undefined, 'Verify our function is private'); 
     equal(my1.privateProperty, undefined, 'Verify our property is private'); 
     equal(my1.answerToLife(), 42, 'Verify public method works with passed in value'); 
     equal(my1.getPrivate(), 'private', 'Verify our access to the private property works'); 
     equal(my2.answerToLife(), 'different value', 'Make sure our class objects are unique'); 
}); 
/********************************
Test.............
********************************/ 
test("DataTable Test", 7, function(){ 
     equal(typeof DataTable, 'function', 'Verify DataTable constructor'); 
     var table = DataTable(); 
     // Check private properties 
     equal(table.columns, undefined, 'Check columns is private'); 
     equal(table.rows, undefined, 'Check rows is private'); 
     // Check publis methods 
     equal(typeof table.addColumns, 'function', 'Check addColumns is public method'); 
     equal(typeof table.addRow, 'function', 'Check addRow is public method'); 
     equal(typeof table.getData, 'function', 'Check getData is public method'); 
     // Add our data 
     table.addColumns('column1', 'column2', 'column3'); 
     table.addRow('value1A', 'value1B', 'value1C'); 
     table.addRow('value2A', 'value2B', 'value2C'); 
     var result = [{ 
         column1: 'value1A', 
         column2: 'value1B', 
         column3: 'value1C' 
     }, { 
         column1: 'value2A', 
         column2: 'value2B', 
         column3: 'value2C' 
 }]; 
     deepEqual(table.getData(), result, 'Check that we get valid table object'); 
}); 
/********************************
Test.............
********************************/ 
test("Footer link selectors", 16, function() { 
     equal(typeof getFooterCheckAllAnchor, 'function', 'Verify getFooterCheckAllAnchor function is present'); 
     var selectors = getFooterCheckAllAnchor(),i, sel; 
     for(i=1; i<=selectors.length; i++) 
     { 
         sel = selectors[i-1]; 
         equal(sel.length, 2, 'Check selector ' + i + ' has two anchors'); 
         equal(sel[0].id, 'check', 'Check selector ' + i + ' has "Check All" anchor in first position'); 
         equal(sel[1].id, 'uncheck', 'Check selector ' + i + ' has "Uncheck All" anchor in second position'); 
     } 
}); 
