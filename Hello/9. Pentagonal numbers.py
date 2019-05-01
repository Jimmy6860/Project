def get_pentagonal_number(n):
    pentagonal = 1
    add = 0
    for i in range(n):
        print pentagonal
        if add > 3:
            add += 3
            pentagonal += add
        else:
            add += 4
            pentagonal += add



get_pentagonal_number(50)

# Sample output:
# 1     5     12    22    35    51    70    92    117   145
# 176   210   247   287   330   376   425   477   532   590
# 651   715   782   852   925   1001  1080  1162  1247  1335
# 1426  1520  1617  1717  1820  1926  2035  2147  2262  2380
# 2501  2625  2752  2882  3015  3151  3290  3432  3577  3725