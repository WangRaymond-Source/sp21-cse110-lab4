## part 1a
1. values added: 20 
2. final result: 20
3. values added: 20
4. Error because the "result" cannot be access at line 13 as "result" has a let keyword which means that "result" in the code can only be access within the if statement block that it is declared in.
5. Error because result is declared with const which means it cannot be reassign which is what we try to do in line 9.
6. Error because const has the similar effects as the let keyword which means result at line 13 cannot be access as it is not with the block at which result was declared.
## part 1b
1. At line 12 it will print out 3 because i is a var, it can be accessed everywhere in the function and the loop will stop running when i hits 3 which is the length prices given.
2. At line 13 it will print out 150 because discountedPrice will update one last time when it hits 300 in the list. Since discountedPrice is a var it will contain the latest updated value, in this case it is 150 and the variable can be accessed everywhere in the function.
3. At line 14 it will print out 150 because finalPrice is a var, it can be accessed anywhere in the function and it can be reassigned. When it is reassigned in the for loop, it will contain 150.
4. It will return the discounted list [50,100,150]. This function will return an updated list of new prices that are discounted because the for loop the function will run the given prices list and apply the discount to them and append the new prices to a new list and then return that new list.Since discounted is a var it can be accessed everywhere in the function, it is able to be returned.
5. The code will cause an Error as i is a let and it can only be access within the for loop block.
6. The code will cause an Error as discountedPrice is a let and it can only be access within the for loop block.
7. At line 14 it will print out 150 because finalPrice is a let and it is defined in the function where it can be accessed everywhere in the function. When it is reassigned in the for loop, it will contain 150.
8. It will return the discounted list [50,100,150]. This function will return an updated list of new prices that are discounted because the for loop the function will run the given prices list and apply the discount to them and append the new prices to a new list and then return that new list. Since discounted is a let which is defined within the function where it can be accessed everywhere in the function, it is able to be returned.
9. The code wil Error because i cannot be accessed at line 11 due to i being a "let". i can only be accessed in the for loop block (line5-8).
10. At line 12 it will print out 3 which is the length of the prices list. This is possible because const is similar to let and it can be accessed within the function as it is define in the function where it can be accessed anywhere in the function.
11. This will return the new list of prices in which discounted hold [50,100,150]. This will return an new list of prices in which the discount is applied to all prices in the orignal list of prices.
12. 
    1.  student.name
    2.  student["Grad Year"]
    3.  student.greeting();
    4.  student["Favorite Teacher"].name
    5.  student.courseLoad[0]
13. 
    1. "32" , because a string is added to a number, the number gets converted to a string then gets concatention is done; therefore, we get the string "32".
    2. 1 , because subtract will convert all possible operand to an integer then perform subtraction, if we cannot convert all possible operand to an integer we will then get NaN.
    3. 3 , because null in javaScript is converted to 0; therefore, 3 + 0 = 3.
    4. "3null" , because a string plus a null, null gets converted to a string and then concatentation is performed; therefore getting the string "3null".
    5. 4 , because true can be converted to 1; therefore, 1  + 3 = 4.
    6. 0 , because false and null gets converted to 0; therefore, adding 0 + 0 = 0.
    7. "3undefined", because a undefined is converted to a string when adding a string; therefore, concatention is done, and we get the string "3undefined".
    8. NaN, because when subtracting all operands gets converted to integer if possible and then do subtract, if not then we will get NaN.
14. 
    1.  true, because the string 2 gets converted to the number 2 and then we compare.
    2.  false, because the it will compare the first character from both side and then compare it.
    3.  true, because the string 2 will become an integer 2; therefore, making it true.
    4.  false, because one of them is a string and the other is a number; therefore, this strict equality will be false.
    5.  false, because true gets converted to the number 1 and 1 is not equal to 2.
    6.  true, because both types are boolean and true will equal to boolean conversion of any number greater than 0;
15. The difference between == and === is that, === will compare types first and if types are different it will automatically be false. Overall, === is similar to  == but instead it compares type first.
16. js file in part1
17. The code will return the list newArr which is [2,4,6]. In the code we declared 2 functions and one function take in the other function as input. in the function that takes in a function, we have a new array variable called newArr and we will run a for loop on the input array and in the loop we will run all the inputs of the inputed array in the function that was passed in and we will store the return values of the input function in the newArr array and then return the new array after for loop and we will get [2,4,6], as the input function bascially doubles a number.
18. js file in part1
19. It will output 1 4 3 2


