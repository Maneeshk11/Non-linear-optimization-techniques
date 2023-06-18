import sys
import numpy as np
import numpy.linalg as la
import scipy.optimize as sopt
import sympy as scm
import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as pt
from mpl_toolkits.mplot3d import axes3d

def answerFunc(S, XX, YY):
    SNew = S.replace("x", "x[0]")
    sFinal = SNew.replace("y", "x[1]")

    x, y = scm.symbols('x y')
    fun = eval(S)
    print(fun)
    diff_X = scm.diff(S, x)
    diff_Y = scm.diff(S, y)
    diff_X = str(diff_X)
    diff_Y = str(diff_Y)
    d1_X = diff_X.replace("x", "x[0]")
    d2_X = d1_X.replace("y", "x[1]")
    d1_Y = diff_Y.replace("x", "x[0]")
    d2_Y = d1_Y.replace("y", "x[1]")

    def f(x):
        return eval(sFinal)

    def df(x):
        return np.array([eval(d2_X), eval(d2_Y)])

    # fig = pt.figure()

    xmesh, ymesh = np.mgrid[-10:10:50j,-10:10:50j]
    fmesh = f(np.array([xmesh, ymesh]))

    pt.axis("auto")
    pt.contour(xmesh, ymesh, fmesh)
    pt.savefig('./static/contour_plot.png')

    guesses = [np.array([XX, YY])]

    def f1d(alpha):
        return f(x + alpha * s)

    mma = 0
    while mma < 15:
        x = guesses[-1]
        s = -df(x)
        alpha_opt = sopt.golden(f1d)
        next_guess = x + alpha_opt * s
        guesses.append(next_guess)
        mma += 1

    for word in guesses:
        print(word)

    pt.axis("equal")
    pt.contour(xmesh, ymesh, fmesh, 50)
    it_array = np.array(guesses)
    pt.plot(it_array.T[0], it_array.T[1], "x-")

    # Save the figure
    pt.savefig('./static/plot.png')

    # pt.show()


# def main():
#     print("Enter the function: ")
#     S = input()
#     print("Enter the starting point: ")
#     XX = float(input())
#     YY = float(input())

    

# if __name__=="__main__":
#     main()

if __name__ == "__main__":
    # Read the command-line arguments
    functionV = sys.argv[1]
    XX = float(sys.argv[2])
    YY = float(sys.argv[3])

    answerFunc(functionV, XX, YY)