class Factorial:
    def __init__(self, num):
        self.num = num

    def calculate(self):
        fact =1
        for i in range(1, self.num +1):
         fact = fact * i
        return fact
        

