"""You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list."""
import math


def binary_search_1(array, value):
    low = 0
    high = len(array) - 1
    middle = math.floor((high + low) / 2)
    while(high > low):
        if(value == array[middle]):
            return middle
        elif (value > array[middle]):
            low = middle
            middle = round((high + low) / 2)
        else:
            high = middle
            middle = math.floor((high + low) / 2)
    return -1


def binary_search_2(array, value):
    # binary search with splitting the list
    temp_list = []
    middle = math.floor(len(array)/2)
    pass


test_list = [1, 3, 9, 11, 15, 19, 21, 23, 25]
test_val1 = 25
test_val2 = 15
print(binary_search_1(test_list, test_val1))
print(binary_search_1(test_list, test_val2))
