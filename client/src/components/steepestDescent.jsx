import axios from "axios";
// import  ImageCont  from "../../../server/static/contour_plot.png"

const SteepestDescent = () => {
  function submitValues(e) {
    e.preventDefault();
    const functionVal = e.target.parentElement.children[0].children[1].value;
    const xVal = Number(e.target.parentElement.children[1].children[1].value);
    const yVal = Number(e.target.parentElement.children[1].children[2].value);

    const dataSender = {
      functionV: functionVal,
      x: xVal,
      y: yVal,
    };
    const dataSenderObj = JSON.stringify(dataSender);

    fetch("http://localhost:5000/formData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataSenderObj,
    })
    .then(response => response.json())
      .then((data) => {
        console.log(data.data);
        const funcSpace = document.querySelector(".funcFill");
        const pointSpace = document.querySelector(".guessFill");
        const stepsSpace = document.querySelector(".stepsFinal");
        funcSpace.innerHTML = data.data[0];
        pointSpace.innerHTML = data.data[1];
        stepsSpace.innerHTML = "";
        for (let i=2; i<17; i++) {
          const stepItem = document.createElement("h3");
          stepItem.innerHTML = data.data[i];
          stepsSpace.appendChild(stepItem);
        }
        const contourFill = document.querySelector('.contourFill')
        const contImg = document.createElement("img");
        // const srcc = "../../../server/static/contour_plot.png"
        contImg.className = "imager"
        const srcc = "http://localhost:5000/static/contour_plot.png"
        contImg.src = srcc;
        contourFill.innerHTML = "";
        contourFill.appendChild(contImg);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
      });
  }

  return (
    <>
      <div className="mm">
        <div className="mleft">
          <h1>STEEPEST DESCENT METHOD</h1>
          <div className="textMethod">
            <p>
              Steepest descent optimization is an iterative optimization
              algorithm used to find the minimum of an objective function. It
              relies on the gradient of the objective function to search for the
              optimal solution. The algorithm starts at an initial point and
              iteratively updates the solution by taking steps proportional to
              the negative gradient of the objective function.
            </p>
          </div>
          <div className="textSteps">
            <h3>To compute the minimum of any non-linear function, we can follow
              the steps below:</h3>
            <p>
               1. Compute the gradient of the objective function
              at the current point:  ∇f(x₀). <br /> 2. Determine the direction of the
              steepest descent by taking the negative of the gradient: d =
              -∇f(x₀). <br /> 3. Choose an appropriate step size or learning rate to
              determine the distance to move in the descent direction. <br /> 4. Update
              the current point by moving in the direction of the steepest
              descent. <br /> 5. Repeat steps 2-5 until convergence or until the
              pre-determined iterations are reached.
              </p>
          </div>
          <h4>Note - The gradient vector represents the first-order partial derivatives of the objective function with respect to each variable.</h4>
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
            <div className="stepsDiv">
              <h3>Steps:</h3>
              <div className="stepsFinal"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SteepestDescent;
