a = -1
b = 1
c = 0

n = int(input("Enter a number: "))
for i in range(1,n+1):
    c = a + b
    a = b
    b = c
    print(c)