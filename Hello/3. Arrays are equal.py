arr1 = [2, 5, 7, 9, 11]
arr2 = [2, 5, 7, 8, 11]
arr3 = [2, 5, 11, 9, 7]

def are_two_arrays_equal(arr1, arr2):
    if sorted(arr1) == sorted(arr2):
        return True
    else:
        return False


print(are_two_arrays_equal(arr1, arr3))