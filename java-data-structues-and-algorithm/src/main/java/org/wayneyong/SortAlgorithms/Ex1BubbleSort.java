package org.wayneyong.SortAlgorithms;

/**
 * [ 20, 35, -15, 7, 55 ,1, -22]
 * unsortedPartitionIndex =  6 - this is lst index of the unsorted partition
 * i = 0 - index used to transverse the array from left to right
 * As algorithm progresses, it partitions the array into a sorted partition and unsorted partition, logically sorted
 * Compare the element of index 0 to element of index 1, If element of index 1 is greater of index 0, swap the element,
 * otherwise not, same subsequently
 * Increment i, comparing i with elemental i, swap it if larger than it
 * * <p>
 * Bubble Sort
 * - In place algorithm
 * - O(n^2) time complexity - quadratic
 * - It will take 100 steps to sort 10 items, 10,000 steps to sort 100 items, 1,000,000 steps to sort 1000 items
 * - Algorithm degrades quickly
 * - Stable Sort preserve the original position
 */


public class Ex1BubbleSort {
    public static void main(String[] args) {

        int[] intArray = {0, 35, -15, 7, 55, 1, -22};

        //outer loop, each iteration, traverse the array, from 6 to 0 bubble the largest value that's unsorted into sorted partition
        for (int lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
            //inner loop, started 0 until hit the last unsortedIndex
            for (int i = 0; i < lastUnsortedIndex; i++) {
                //compare element of index i with index i+1
                if (intArray[i] > intArray[i + 1]) {
                    swap(intArray, i, i + 1);
                }
            }
        }

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }

    //swap method
    public static void swap(int[] array, int i, int j) {
        if (i == j) {
            return;
        }
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
