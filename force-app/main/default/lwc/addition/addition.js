import { LightningElement,api,track } from 'lwc';

export default class addition extends LightningElement {
@api
childValue;
customEventHandler1(event){
    this.dispatchEventnew( CustomEvent("ganesh",{
        //detail contains only primitives
        datail:'value from the child into parent'
    
}));
}
@track firstNumber;
@track secondNumber;
@track result;
handleFirstNumber(event){
    this.firstNumber=event.target.value;

}
handleSecondNumber(event){
    this.secondNumber=event.target.value;
}
@api
handleSum(){
    
    this.result=parseInt(this.firstNumber)+parseInt(this.secondNumber);
}
}