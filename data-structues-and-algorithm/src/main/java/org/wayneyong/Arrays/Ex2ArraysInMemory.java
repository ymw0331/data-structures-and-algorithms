package org.wayneyong.Arrays;

/***
 * Arrays in Memory
 * 1. Contiguous block in memory, cannot be resized, it has a static length, not scattered around the memory
 * 2. Every element occupies the same amount of space in memory, object reference stored in memory
 * 3. Easily calculate address of the array element based on its index, if an array starts at memory address x, and the size of each element in
 *    the array is y, we can calculate the memory address of the ith element by using the following expression : x + i * y
 * 4. If we know the index of an element, the time to retrieve the element will be the same, no matter where it is in the array
 *
 *  Index :  0    1    2   3  4  5   6
 *  Example: [20, 35, -15, 7, 55, 1, -22]
 *  Start address of array = 12, element size = 4 bytes (4*8 bits)
 *  Address of array[0] = 12
 *  Address of array[1] = 12 + ( 1 * 4 ) = 16
 *  Address of array[2] = 12 + ( 2 * 4 ) = 20
 *  Address of array[3] = 12 + ( 3 * 4 ) = 24
 *  Address of array[4] = 12 + ( 4 * 4 ) = 28
 *  Address of array[5] = 12 + ( 5 * 4 ) = 32
 *  Address of array[6] = 12 + ( 6 * 4 ) = 36
 *
 *
 *  Good : retrieve element based on the index
 */


public class Ex2ArraysInMemory {


}
