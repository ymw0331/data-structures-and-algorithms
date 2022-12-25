package org.wayneyong.SortAlgorithms;

/**
 * [ 20, 35, -15, 7, 55 ,1, -22]
 * firstUnsortedIndex = 1 - this is the first index of the unsorted partition
 * i = 0 - index used to traverse sorted partition form right to left
 * newElement = 35 - the value we want to insert into the sorted partition - array[firstUnsortedIndex]
 * <p>
 * Insertion Sort
 * - In-place algorithm
 * - O(n^2) time complexity - quadratic
 * - It will take 100 steps to sort 10 times, 10,000 steps to sort 100 items, 1,000,000 steps to sort 1000 items
 * - Stable algorithm
 */


public class Ex3InsertionSort {

    public static void main(String[] args) {
        int[] intArray = {20, 35, -15, 7, 55, 1, -22};

        for (int firstUnsortedIndex = 1; firstUnsortedIndex < intArray.length; firstUnsortedIndex++) {
            int newElement = intArray[firstUnsortedIndex];
            int i;
            for (i = firstUnsortedIndex; i > 0 && intArray[i - 1] > newElement; i--) {
                intArray[i] = intArray[i - 1];
            }
            intArray[i] = newElement;
        }

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }
}
