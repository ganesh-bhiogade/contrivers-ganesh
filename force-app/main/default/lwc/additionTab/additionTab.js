import { LightningElement,track } from 'lwc';

export default class additionTab extends LightningElement {
    @track result;
    @track operation='';
    @track showResult=false;
    handleAdd(event){
        this.operation=event.target.value
        this.result=parseInt(this.template.querySelectorAll(".operand")[0].value)+parseInt(this.template.querySelectorAll(".operand")[1].value);
        this.showResult=true;
    }
}