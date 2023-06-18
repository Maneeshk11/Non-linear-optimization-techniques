import image_3d_1 from "../assets/3d1.png";
import image_3d_2 from "../assets/3d2.png";
import image_3d_3 from "../assets/3d3.jpg";

const HomePage = () => {
  return (
    <>
      <div className="home1">
        <p>
          In this portfolio, we explore various types of Non-Linear Optimization
          Techniques. As of now, a clear depiction of the Steepest Descent,
          Newton's Method, and Conjugate Gradient are presented. Each method
          consists of a clear explanation as well as the necessary visuals for a
          complete understanding. In due time, we will depict the working of
          other methods.
        </p>
        {/* <h1>Non-Linear Optimization Techniques</h1> */}

        <div className="home2">
          <div>
            <h3>When Do We Use Non-Linear Optimization Techniques?</h3>
            <h4>
              For an optimization problem, Non-Linear optimization techniques
              are used when the objective function f(x) or any of the equality
              constraints are non-linear functions. What this signifies is that,
              for example, if a variable x has the components x1 and x2 then a
              function f(x) = 4 + 2x1 - 8x2 is linear and functions such as f(x)
              = 4x1 + 2x1x2 + 8x2 and 5x13 + 7x2 are said to be non-linear.{" "}
            </h4>
          </div>
          <img src={image_3d_1} alt="" />
        </div>

        <div className="home2">
            <img src={image_3d_2} alt="" />
          <div>
            <h3>Structuring An Optimization Problem:</h3>
            <h4>
              In the process of formulating an optimization problem, it is
              necessary to specify an objective function, denoted as f, which
              depends on a vector of decision variables, denoted as x.
              Additionally, there may be constraints, both equality and
              inequality, which are also functions of x. Typically, the
              objective function is defined with the aim of minimizing its
              value, subject to the given constraints
            </h4>
          </div>
        </div>

        <div className="home2">
        
          <div>
            <h3>Gradient-Based Algorithms:</h3>
            <h4>
              Gradient-based algorithms, also known as descent algorithms,
              involve an iterative approach where the optimization process
              begins at an initial point. A direction of movement is determined
              based on a predefined rule, and the algorithm proceeds by moving
              in that direction towards a relative minimum of the objective
              function along that line. Once the new point is reached, a new
              direction is computed, and the process is repeated. This iterative
              procedure continues until a satisfactory solution is obtained.
            </h4>
          </div>
          <img src={image_3d_3} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
