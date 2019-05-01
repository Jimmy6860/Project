def count_of_vowels(args):
    counter = 0
    vowels = 'aeiouAEIOU'

    for i in args:
        for j in vowels:
            if i == j:
                counter += 1

    return counter


print(count_of_vowels("Propulsion Academy"))
