import { useState } from "react";

export default function Calculator() {
  const [output, setOutput] = useState();

  function convertMeasure() {
    const select = parseInt(document.getElementById("select").value);
    const userInput = document.getElementById("measure");
    const input = userInput.value;

    if (userInput.value === "") {
      alert("Please Enter a Value to Convert");
    }

    let answer;
    console.log(select);
    switch (select) {
      case 0:
        answer = `${input} Tablespoons(Tbsp) = ${input * 3} Teaspoons(tsp)`;
        break;
      case 1:
        answer = `${input} Cup(s) (c) = ${input * 8} Fluid Ounces(fl oz)`;
        break;
      case 2:
        answer = `${input} Pints(pt) = ${input * 2} Cups`;
        break;
      case 3:
        answer = `${input} Pints(pt) = ${input * 16} Fluid Ounces(fl oz)`;
        break;
      case 4:
        answer = `${input} Quarts(qt) = ${input * 2} Pints(pt)`;
        break;
      case 5:
        answer = `${input} Quarts(qt) = ${input * 4} Cups(c)`;
        break;
      case 6:
        answer = `${input} Quarts(qt) = ${input * 32} Fluid Ounces(fl oz)`;
        break;
      case 7:
        answer = `${input} Gallons(gal) = ${input * 4} Quarts`;
        break;
      case 8:
        answer = `${input} Gallons(gal) = ${input * 128} Fluid Ounces(fl oz)`;
        break;
      case 9:
        answer = `${input} Pounds(lb) = ${input * 16} Ounces(oz)`;
        break;
      case 10:
        answer = `${input} Metric Tablespoon(s) = ${
          input * 3
        } Metric Teaspoon(s)`;
        break;
      case 11:
        answer = `${input} Metric Tablespoon(s) = ${
          input * 15
        } Milliliter(s) (ml)`;
        break;
      case 12:
        answer = `${input} Metric Cup(s) = ${input * 250} Milliliter(s) (ml)`;
        break;
      case 13:
        answer = `${input} Liter(s) = ${input * 1000} Milliliter(s)`;
        break;
      case 14:
        answer = `${input} Liter(s) = ${input * 4} Metric Cup(s)`;
        break;
      case 15:
        answer = `${input} Kiloliter(s) = ${input * 1000} Liter(s)`;
        break;
      case 16:
        answer = `${input} Gram(s) = ${input * 1000} Milligram(s)`;
        break;
      case 17:
        answer = `${input} Teaspoon(s) = ${input * 4.9} Milliliter(s)`;
        break;
      case 18:
        answer = `${input} Cup(s) = ${input * 0.94} Metric Cup(s)`;
        break;
      case 19:
        answer = `${input} Fluid Ounce(s) = ${input * 30} Milliliter(s)`;
        break;
      case 20:
        answer = `${input} Quart(s) = ${input * 0.95} Liter(s)`;
        break;
      case 21:
        answer = `${input} Gallon(s) = ${input * 3.8} Liter(s)`;
        break;
      case 22:
        answer = `${input} Ounce(s) = ${input * 28} Gram(s)`;
        break;
      case 23:
        answer = `${input} Pound(s) = ${input * 0.45} Kilogram(s)`;
        break;
      case 24:
        answer = `${input} Fluid Ounces(fl oz) = ${input / 8} Cup(s) (c)`;
        break;
      default:
        alert("Please select a conversion");
    }
    userInput.value = "";
    setOutput(answer);
  }

  return (
    <section className="calcSection container-fluid d-flex align-items-center mt-5">
      <div className="container-fluid convertPage">
        <div className="mx-auto container-fluid d-flex flex-column gap-5">
          <h1 className="convertTitle text-center mt-2">Common Units Of Measurment</h1>

          <input
            className="form-control convertInp"
            type="number"
            id="measure"
            placeholder="Enter value to convert"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                convertMeasure();
              }
              // console.log(e);
            }}
          />

          <select className="form-select convertInp" id="select">
            <option>Select A Conversion</option>
            <option value="0">Tbsp - Tsp</option>
            <option value="1">Cups - Fluid Ounces</option>
            <option value="2">Pints - Cups</option>
            <option value="3">Pints - Fluid Ounces</option>
            <option value="4">Quarts - Pints</option>
            <option value="5">Quarts - Cups</option>
            <option value="6">Quarts - Fluid Ounces</option>
            <option value="7">Gallons - Quarts</option>
            <option value="8">Gallons - Fluid Ounces</option>
            <option value="9">Pounds - Ounces</option>
            <option value="10">Metric Tbsp - Metric Tsp</option>
            <option value="11">Metric Tbsp - Milliliters</option>
            <option value="12">Metric Cups - Milliliters</option>
            <option value="13">Liters - Milliliters</option>
            <option value="14">Liters - Metric Cups</option>
            <option value="15">Kiloliters - Liters</option>
            <option value="16">Grams - Milligrams</option>
            <option value="17">Teaspoons - Milliliters</option>
            <option value="18">Cups - Metric Cup</option>
            <option value="19">Fluid Ounces - Milliliters</option>
            <option value="20">Quarts - Liters</option>
            <option value="21">Gallons - Liters</option>
            <option value="22">Ounces - Grams</option>
            <option value="23">Pounds - Kilograms</option>
          </select>
          <button className="test btnStyle convertBtn" onClick={convertMeasure}>
            Convert
          </button>
        </div>
        <h3 className="test text-center mt-5 convOutput">{output}</h3>
      </div>
    </section>
  );
}
