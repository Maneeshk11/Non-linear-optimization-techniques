import axios from "axios";

const Newtons = () => {
    function submitValues(e) {
      // e.preventDefault();
      // const functionVal = e.target.parentElement.children[0].children[1].value;
      // const xVal = Number(e.target.parentElement.children[1].children[1].value);
      // const yVal = Number(e.target.parentElement.children[1].children[2].value);

      // const dataSender = {
      //   functionV: functionVal,
      //   x: xVal,
      //   y: yVal,
      // };
      // const dataSenderObj = JSON.stringify(dataSender);

      // fetch("http://localhost:5000/formData", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: dataSenderObj,
      // })
      //   .then((response) => {
      //     // Handle the response from the server
      //   })
      //   .catch((error) => {
      //     // Handle any errors that occur during the request
      //   });
    }

  return (
    <>
      <div className="mm">
        <div className="mleft">
          <h1>NEWTON'S METHOD</h1>
          <div className="textMethod">
            <p>
              Newton's Method is an iterative optimization method used to find
              the root of an objective function. Given a starting point/initial
              guess of the root and an objective function f(x), the method
              refines the guess in each iteration until it finds the appropriate
              root.
            </p>
          </div>
          <div className="textSteps">
            <h3>
              To compute the root of any non-linear function using Newton’s
              Method, we can follow the steps below:
            </h3>
            <p>
              1. Choose an initial guess for the solution. <br /> 2. Compute the
              gradient and the Hessian matrix of the objective function at the
              current guess. <br /> 3. Solve the equation to retrieve the
              direction vector: Hessian matrix * direction_vector = - gradient
              vector <br /> 4. Update the current guess by adding the direction
              vector to it: newGuess = currentGuess + direction_vector <br /> 5.
              Repeat steps 2-4 until the desired root or the pre-determined
              iterations are reached.
            </p>
          </div>
          <h4>
            Note - The gradient vector represents the first-order partial
            derivatives of the objective function with respect to each variable,
            and the Hessian matrix represents the second-order partial
            derivatives.
          </h4>
        </div>
        <div className="mright">
          <form action="" className="questionForm">
            <div>
              <label for="">Enter the function: </label>
              <input type="text" id="functionInput" />
            </div>
            <div className="guess">
              <label for="">Initial guess: </label>
              <input type="text" placeholder="x" id="xInput" />
              <input type="text" placeholder="y" id="yInput" />
            </div>
            <button className="submitFunc" href="" onClick={submitValues}>
              Submit
            </button>
          </form>
          <div className="ansDiv">
            <div className="funcDiv">
              <h3>Function:</h3>
              <h3 className="funcFill"></h3>
            </div>
            <div className="guessDiv">
              <h3>Initial Guess:</h3>
              <h3 className="guessFill"></h3>
            </div>
            <div className="contourDiv">
              <h3>Contour Plot:</h3>
              <div className="contourFill"></div>
            </div>
            <div className="graphDiv">
              <h3>Path followed:</h3>
              <div className="graphFill"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newtons;
