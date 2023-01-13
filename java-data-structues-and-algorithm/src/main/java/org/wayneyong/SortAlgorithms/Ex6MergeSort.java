package org.wayneyong.SortAlgorithms;

/***
 * Merge Sort:
 * - Divide and conquer algorithm
 * - Recursive algorithm
 * - Two phases: Splitting and Merging
 * - Splitting phase leads to faster sorting during the Merging phase
 * - Splitting is logical. We don't create new arrays
 *
 * Splitting Phase:
 * - Start with an unsorted array
 * - Divide the array into two arrays, which are unsorted: The first array is the left array, and the second array is the right array.
 * - Split the left and right arrays into two arrays each
 * - Keep splitting until all the arrays have only one element each - these arrays are sorted
 *
 * Merging Phase:
 * - Merge every left/right pair of sibling arrays into a sorted array
 * - After the first merge, we'll have a bunch of 2-element sorted arrays
 * - Then merge those sorted arrays(left/right siblings) to end up a bunch of 4-element sorted arrays
 * - Repeat until you have a single sorted array
 * - Not in-place. Uses temporary arrays
 *
 *
 * Example:
 *   [ 20, 35, -15, 7, 55 ,1, -22]
 *  start = 0, end = 7 (array.length)
 *  midpoint = (start + end) /2 = 3
 *
 *  Elements 0 to 2 will go into left array, and elements 3 to 6 will go into right array
 *
 * Merging Process:
 * - We merge siblings left and right arrays
 * - We create a temporary array large enough to hold all the elements in the arrays we're merging
 * - We set i to the first index of the left array, and j to the first index of the right array
 * - We compare left[i] to right[j]. If left is smaller, we copy it to the temp array and increment i by 1. If right is smaller, we copy it
 *  to the temp array and increment j by 1
 * - We repeat this process until all elements in the two arrays have been processed
 * - At this point, the temporary array contains the merged values in sorted order
 * - We then copy this temporary array back to the original input array, at the correct positions
 * - If the left array is at positions x to y, and the right array is at positions y + 1 to z, then after the copy, positions x to z will be
 *  sorted in the original array
 * - Process is now repeated for the left array and right array
 * - Eventually, every element has been the pivot, so every element will be its correct sorted position
 * - As with merge sort, we'll end up partitioning the array into a series of 1-element arrays
 * - Does this in-place (unlike merge-sort)
 *
 * Advantage: Dont need large memory to perform quick sort
 *
 * */

public class Ex6MergeSort {
    public static void main(String[] args) {
        int[] intArray = {20, 35, -15, 7, 55, 1, -22};
        mergeSort(intArray, 0, intArray.length);
        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }

    // { 20, 35, -15, 7, 55, 1, -22 }
    public static void mergeSort(int[] input, int start, int end) {
        if (end - start < 2) {
            return;
        }
        int mid = (start + end) / 2;
        mergeSort(input, start, mid);
        mergeSort(input, mid, end);
        merge(input, start, mid, end);
    }

    // { 20, 35, -15, 7, 55, 1, -22 }
    public static void merge(int[] input, int start, int mid, int end) {

        if (input[mid - 1] <= input[mid]) {
            return;
        }
        int i = start;
        int j = mid;
        int tempIndex = 0;

        int[] temp = new int[end - start];
        while (i < mid && j < end) {
            temp[tempIndex++] = input[i] <= input[j] ? input[i++] : input[j++];
        }
        System.arraycopy(input, i, input, start + tempIndex, mid - i);
        System.arraycopy(temp, 0, input, start, tempIndex);
    }

}
