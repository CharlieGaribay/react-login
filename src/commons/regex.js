const regex = {
  email: /^[a-zA-Z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  password: {
    minLenght: "^(?=.{6,})",
    numeric: "^(?=.*[0-9])",
    specialCharacter: "^(?=.*[!”\"#$%&/()=?¿^*@‚[]{ };:_><,.-|`+.])",
    string100Ladrillos: /100Ladrillos/,
    consecutiveCharacters: /^(([a-zA-Z0-9])\2?(?!\2))+$/
    // sequential numbers and letters
  },
}

export default regex;