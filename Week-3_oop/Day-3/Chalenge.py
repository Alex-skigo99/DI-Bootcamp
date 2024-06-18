# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

from math import pi
import turtle

class Circle:
    def __init__(self, radius:float) -> None:
        self.radius = radius
        self.diameter = radius * pi
    
    def area(self) -> float:
        return 2 * pi * self.radius**2
    
    def __repr__(self) -> str:
        return f"Radius: {self.radius}, diameter: {self.diameter}, area: {self.area()}.\n"
    
    def __add__(self, other):
        return Circle(self.radius + other.radius)
    
    def __gt__(self, other):
        if self.radius > other.radius:
            return True
        else:
            return False
        
    def __eq__(self, other):
        if self.radius == other.radius:
            return True
        else:
            return False

    def __lt__(self, other):
        if self.radius < other.radius:
            return True
        else:
            return False
        
def drow_cicles(cicles:list) -> None:
    x = 1
    for c in circles:
        print(c)
        turtle.pencolor("white")
        turtle.setx(-400 + 200*x)
        turtle.pencolor("blue")
        turtle.circle(c.radius*40)
        x += 1


if __name__ == "__main__":
    s_circle = Circle(1)
    m_circle = Circle(2)
    l_circle = Circle(3)
    circles = [m_circle, l_circle, s_circle]

    print("m area: ", m_circle.area())
    print("s: ", s_circle)
    xl_circle = l_circle + s_circle
    print("xl: ", xl_circle)
    print("m > s: ", m_circle > s_circle)
    print("l < m: ", l_circle < m_circle)
    m2_circle = Circle(2)
    print("m = m2: ", m_circle == m2_circle)

    # unsorted
    turtle.home()
    turtle.speed(10)
    turtle.pensize(5)
    turtle.pencolor("white")
    turtle.sety(150)
    drow_cicles(circles)

    # sorted
    print("Sorted:")
    circles.sort()
    turtle.pencolor("white")
    turtle.sety(-150)
    drow_cicles(circles)
    input("Press enter")
