package org.wayneyong.SortAlgorithms;

/**
 * Shell Sort (cut down the amount of shifting in InsertionSort)
 * - Variation of insertion sort
 * - Insertion soft chooses which element to insert using a gap of 1
 * - Shell Sort starts out using a larger gap value
 * - As the algorithm runs, the gap is reduced
 * - Goal is to reduce the amount of shifting required
 * Summary:
 * - In-place algorithm
 * - Difficult to nail down the time complexity because it will depend on the gap. Worst case: O(n^2), but it can perform much better than that
 * - Doesn't require as much shifting as insertion sort, so it usually peforms better
 * - Unstable algorithm
 **/

public class Ex4ShellSort {

    public static void main(String[] args) {

        int[] intArray = {20, 25, -157, 55, 1, -22};

        for (int gap = intArray.length / 2; gap > 0; gap /= 2) {

            for (int i = gap; i < intArray.length; i++) {

                int newElement = intArray[i];
                int j = i;

                while (j >= gap && intArray[j - gap] > newElement) {
                    intArray[j] = intArray[j - gap];
                    j -= gap;
                }
                intArray[j] = newElement;
            }
        }

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }
}
