import { LightningElement,api } from 'lwc';

export default class SimpleCalculator extends LightningElement {
valueEntered;

    
onParentInput(event){
    this.valueEntered=event.target.value;
}
handleValueFromChild(event) {
    this.valueEntered="";

}
handleAdd() {
this.template.querySelector('c-addition').handleSum();
}
handleSub() {
    this.template.querySelector('c-subtraction').handleSum();
    }
    handleMul() {
        this.template.querySelector('c-multiplication').handleSum();
        }
        handleDiv() {
            this.template.querySelector('c-division').handleSum();
            }
            
}