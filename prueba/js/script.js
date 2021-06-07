function iniciarMap(){
    var coord = {lat:3.43722 ,lng: -76.5225};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 12,
      center: coord
    });
}
function enviarFormulario(){
  console.log('Enviando formulario...');
}
