def find_second_smallest(args):
    assort = sorted(args)

    return assort[1]


print(find_second_smallest([0, 3, -2, 4, 3, 2]))  # 0
print(find_second_smallest([10, 22, 10, 20, 11, 22]))  # 10