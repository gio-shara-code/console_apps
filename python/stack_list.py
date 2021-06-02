class Element:
    def __init__(self, value: int):
        self.value = value
        self.previous = None

    def toString(self):
        return f'Element(value: {self.value}, previous: {self.previous})'


class Stack:
    def __init__(self, top: Element):
        self.top = top
        pass

    def push(self, newElement: Element):
        currentTop = self.top
        if(currentTop):
            newElement.previous = currentTop
            self.top = newElement
        else:
            self.top = newElement

    def pop(self):
        if self.top == None:
            print("The List is empty")
        previous = self.top.previous
        self.top = None
        if(previous):
            self.top = previous

    def printAllList(self):
        currentTop = self.top
        if(currentTop):
            while currentTop:
                print(currentTop.value)
                currentTop = currentTop.previous
        else:
            print("The List is emtpy")

    def currentTopToString(self):
        return f'{self.top.toString()}'


stack = Stack(Element(0))
stack.push(Element(3))
stack.printAllList()
stack.pop()
stack.printAllList()
