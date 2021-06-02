class LinkedList(object):
    def __init__(self, start=None):
        self.start = start

    def append(self, newElement):
        currentEl = self.start
        if(currentEl):
            while currentEl.next:
                currentEl = currentEl.next
            currentEl.next = newElement
        else:
            self.start = newElement

    def printElements(self):
        currentEl = self.start
        if (currentEl):
            while currentEl:
                print(currentEl.value)
                currentEl = currentEl.next
        else:
            print("No elements in the list")

    def printNextElementOf(self, element):
        pass

    def addAll(self, listElemts: [int]):
        pass


class Element(object):
    def __init__(self, value: int):
        self.value = value
        self.next = None


linkedList = LinkedList(Element("Giorgi"))
linkedList.append(Element("Hello"))
linkedList.printElements()
