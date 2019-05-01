def unique_array(args):
    result = []
    for i in args:
        if i not in result:
            result.append(i)
    return result

print(unique_array([0, 3, -2, 4, 3, 2]))   # [0, 3, -2, 4, 2]
print(unique_array([10, 22, 10, 20, 11, 22]))  #[10, 22, 20, 11]