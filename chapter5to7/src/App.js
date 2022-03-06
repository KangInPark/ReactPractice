import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [select, setSelect] = useState([]);
  const [money, setMoney] = useState(0);
  const [selected, setSelected] = useState(false);
  const onChange = (e) => {
    setSelect(e.target.value.split(" "));
    select[0] === "Select" ? setSelected(false) : setSelected(true);
  };
  const moneyChange = (e) => setMoney(e.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin!</option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <label htmlFor="money">Your Money: </label>
      <input
        id="money"
        placeholder="$"
        value={money}
        onChange={moneyChange}
      ></input>
      <br />
      {selected ? `You can get ${money / select[2]} ${select[0]}!` : ""}
    </div>
  );
}

export default App;
