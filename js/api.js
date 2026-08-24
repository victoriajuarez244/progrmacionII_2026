async function name(params) {
    const api_id="a49f2089297b7216a6e25354544799ce"
    const url='httsp//apiopenweathermap.org/data/2.5/weather q '${ciudad} 'appid='${api_id} 'united = metric langres'

}
//console log(url);
try{
    const reponse = await fetch(url);
    console.log(reponse);
    if (respose.ok){

        const data= await reponse.json();
    }console.log(data);
    /*tarjeta.innerhtml ='    <h3>${data.name}</h3>'
    <img src "http://openweathermap.org/img/wn/${data.weather[1]}@2x.png "*/

    mostrarCard(data);

} else{tarjeta.innerhtml="hubo un error";}
catch (err) {tarjeta.innerhtml="error en la consulta;" = err;}
else {alert{"seleciona una ciudad"}};

function mostrarCard(data) {
    const(name,sys:{CountQueuingStrategy,su})
    
}