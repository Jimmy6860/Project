name = raw_input('Please input your name ')
name_list = name.split()
if len(name) > 0:
    for i in name_list:
        print('Hello, ' + i)
else:
    print('Hello, unknown')



