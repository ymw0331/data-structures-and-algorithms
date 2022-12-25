package org.wayneyong.SortAlgorithms;

/**
 * [ 20, 35, -15, 7, 55 ,1, -22]
 * lastUnsortedPartitionIndex =  6 - this is lst index of the unsorted partition
 * i = 1 - index used to transverse the array from left to right
 * largest = 0 - index of largest element in unsorted partition
 * <p>
 * Selection Sort
 * - In-place algorithm
 * - O(n^2) time complexity - quadratic
 * - It will take 100 steps to sort 10 items, 10,000 steps to sort 100 items, 1,000,000 steps to sort 1000 items
 * - Doesn't require as much swapping as bubble sort
 * - Unstable algorithm
 */

public class Ex2SelectionSort {

    public static void main(String[] args) {

        int[] intArray = {0, 35, -15, 7, 55, 1, -22};

        //O(n^2) two loops
        for (int lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
            int largest = 0;

            for (int i = 1; i <= lastUnsortedIndex; i++) {
                if (intArray[i] > intArray[largest]) {
                    largest = i;
                }
            }
            swap(intArray, largest, lastUnsortedIndex);
        }

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }

    }

    public static void swap(int[] array, int i, int j) {
        if (i == j) {
            return;
        }
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


