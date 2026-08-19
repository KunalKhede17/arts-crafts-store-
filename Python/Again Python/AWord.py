for i in range(1, 8):
    for j in range(1, 9):  
        
        if (i == 1 and (j == 3 or j == 4 or j == 5)) or \
           (i == 2 and (j == 2 or j == 6)) or \
           (i == 3 and (j == 2 or j == 6)) or \
           (i == 4 and (j >= 2 and j <= 6)) or \
           (i == 5 and (j == 2 or j == 6)) or \
           (i == 6 and (j == 2 or j == 6)) or \
           (i == 7 and (j == 2 or j == 6)):
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()  