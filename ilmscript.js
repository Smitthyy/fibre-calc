function calcilm(){
    var km=document.getElementById('km').value;
    var attenuation=document.getElementById('atten').value;
    var reference=document.getElementById('ref').value;
    var atten_km=attenuation*km;
    var ilmresult=(atten_km-reference);
    document.getElementById('resultilm').innerHTML=ilmresult;
    return false
}