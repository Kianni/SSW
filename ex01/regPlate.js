class RegisterPlate {
constructor(regPlate){
  this.rp = regPlate;
  }
display=()=>console.log(this.rp);
}
let citroen = new RegisterPlate('01234500');
citroen.display();