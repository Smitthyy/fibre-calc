function calcotdr(){
    let ab=document.getElementById('ab').value;
    let ba=document.getElementById('ba').value;
    let otdrresult=(+ab + +ba)/2;
    document.getElementById('otdrresult').innerHTML=otdrresult;
    return false
}