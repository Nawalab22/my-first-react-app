const  sayMogadishu = ({text1,text2,text3}) => {
  console.log(text1);
  sayKismayo(props);
}

const sayKismayo = (props) => {
  console.log(props.text2);
  sayHargeisa(props);
}

const sayHargeisa = (props) => {
  return "<h1>" + props.text3 + "</h1>"
}

const props = {
  text1 : "i am Mogadishu", 
  text2 : "i am Kismayo",
  text3 : "i am Hargeisa",
}




sayMogadishu(props)
export {sayMogadishu,sayHargeisa,sayKismayo}