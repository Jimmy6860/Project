def get_middle_character(args):
    length = len(args)
    odd = (length - 1)/2
    even = length / 2
    if length%2 == 0:
        return args[even-1:even+1]
    else:
        return args[odd]


print(get_middle_character("12345"))