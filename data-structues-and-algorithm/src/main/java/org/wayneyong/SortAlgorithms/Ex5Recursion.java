package org.wayneyong.SortAlgorithms;

/**
 * Factorial of 3 = 3 * 2 * 1
 * Factorial Algorithm
 * 1. if num is equal to 0, the factorial is 1. Stop. We have the result. Otherwise....
 * 2. set the multiplier to 1
 * 3. set the factorial to 1
 * 4. while multiplier is not equal to num, do steps 5 and 6
 * 5. multiply factorial by multiplier and assign the result to factorial
 * 6. add 1 to multiplier
 * 7. Stop. the result is factorial
 */

public class Ex5Recursion {
    public static void main(String[] args) {
        System.out.println(iterativeFactorial(3));
        System.out.println(recursiveFactorial(3));
    }
    //1! = 0! * 1 = 1
    //2! = 2 * 1 = 2 * 1!
    //3! = 3 * 2 * 1 = 3 * 2 * 1!
    //4! = 4 * 3 * 2 * 1 = 4 * 3!

    // n! = n * (n - 1)!

    public static int recursiveFactorial(int num) {
        if (num == 0) {
            return 1;
        }

        return num * recursiveFactorial(num - 1);
    }

    //iterative implementation
    public static int iterativeFactorial(int num) {
        if (num == 0) {
            return 1;
        }
        int factorial = 1;
        for (int i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}


