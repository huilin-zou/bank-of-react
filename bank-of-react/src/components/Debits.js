import React, { useState, useEffect } from "react";

function Debits(props) {
  const [data, setData] = useState([""]);
  const [localAmount, setLocalAmount] = useState(0); //user input amount
  const [description, setDescription] = useState("");
  const [debits, setDebits] = useState([""]); //statically update
  const [balanceFromApi, setBalanceFromApi] = useState(0); //get user balance from api
  const [total, SetTotal] = useState(0);

  //fetch api
  useEffect(() => {
    const url = "https://moj-api.herokuapp.com/debits";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp[0]));
      setBalanceFromApi(data.amount);
   
  }, [data]);

  useEffect(()=>{
    console.log("data", data.amount);
    
    console.log("amount in account", typeof balanceFromApi);
  },[localAmount])

  //statically updating
  const onChangeAmount = (e) => {
    setLocalAmount(parseInt(e.target.value));
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const addDebit = (e) => {
    const newDebits = [...debits];

    newDebits.push({ localAmount, description });

    setDebits(newDebits);
    SetTotal(localAmount + balanceFromApi);
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
      <p style={{ color: "white" }}>{`${data.userName}`}</p>

      <label style={{ color: "white" }}>Amount:</label>
      <p style={{ color: "white" }}>${`${data.amount}`}</p>

      {debits.map((debit, key) => {
        return (
          <div key={key}>
            {debit.description}:{debit.localAmount}
          </div>
        );
      })}

      <form style={{ color: "white" }}>
        <label style={{ color: "white" }}>
          Amount
          <input
            className="form-control"
            type="number"
            name="localAmount"
            onChange={onChangeAmount}
            style={{ color: "black" }}
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
            style={{ color: "black" }}
            required
          />
        </label>

    

        <button className="btn btn-outline-dark" onClick={addDebit}>
          Submit
        </button>
      </form>

      <p style={{ fontSize: "18px" }}>Updated amount: ${total}</p>
    </div>
  );
}

export default Debits;