import React, { useState, useEffect } from "react";

function Credits() {
  const [creditData, setCreditData] = useState([0]);
  const [inputAmount, setInputAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [credits, setCredits] = useState([]);
  const [creditAmountFromApi, setCreditAmountFromApi] = useState(0); //get user balance from api
  const [total, SetTotal] = useState(0);

  function creditLimitFunc() {
    const creditLimit = 2000;
    // console.log("creditLimit",creditLimit)
    return creditLimit;
  }
  //creditLimitFunc()

  useEffect(() => {
    const url = "https://moj-api.herokuapp.com/credits";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setCreditData(resp[9]));

    console.log("creditData", creditData);
    setCreditAmountFromApi(creditData.amount);
    console.log("creditAmountFromApi", creditAmountFromApi);
  }, [creditData]);

  useEffect(()=>{
    console.log("data", creditData.amount);
    
    console.log("amount in account", typeof creditAmountFromApi);
  },[inputAmount])

  const onChangeAmount = (e) => {
    setInputAmount(parseInt(e.target.value));
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const addCredit = (e) => {
    const newCredits = [...credits];
    newCredits.push({ amount: inputAmount, description });
    setCredits(newCredits);
    SetTotal(inputAmount + creditAmountFromApi);
    {
      total > 2000
        ? alert("Credit Limit Exceed")
        : console.log("less than 2000");
    }
    e.preventDefault();
  };

  return (
    <div
      style={{
        textAlign: "left",
        paddingLeft: "600px",
        fontSize: "25px",
        paddingTop: "100px",
      }}
    >
      <label style={{ color: "white" }}>User Id:</label>
      <p style={{ color: "white" }}>{`${creditData.id}`}</p>

      <label style={{ color: "white" }}>Credit Limit:</label>
      <p style={{ color: "white" }}>${creditLimitFunc()}</p>

      <label style={{ color: "white" }}>Card Balance:</label>
      <p style={{ color: "white" }}>${`${creditData.amount}`}</p>

      {credits.map((credit, key) => {
        return (
          <div key={key}>
            {credit.description}:{credit.amount}
          </div>
        );
      })}
      <form style={{ color: "white" }}>
        <label style={{ color: "white" }}>
          Amount
          <input
            className="form-control"
            type="number"
            name="amount"
            onChange={onChangeAmount}
            required
          />
        </label>
        <br></br>
        <label style={{ color: "white" }}>
          Description
          <input
            className="form-control"
            type="text"
            name="description"
            onChange={onChangeDescription}
            required
          />
        </label>
        <br></br>

        <button className="btn btn-outline-dark" onClick={addCredit}>
          Submit
        </button>
      </form>

      <p style={{fontSize:"18px"}}>Updated card balance: ${total}</p>
    </div>
  );
}

export default Credits;