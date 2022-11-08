import { LightningElement,track } from 'lwc';

export default class divisionTab extends LightningElement {
    @track result;
    @track operation='';
    @track showResult=false;
    handleDiv(event){
        this.operation=event.target.value;
        this.result=Number(this.template.querySelectorAll(".operand")[0].value)/Number(this.template.querySelectorAll(".operand")[1].value);
        this.showResult=true;
    }
}