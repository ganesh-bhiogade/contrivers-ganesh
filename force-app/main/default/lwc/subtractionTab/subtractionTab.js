import { LightningElement,track } from 'lwc';

export default class subtractionTab extends LightningElement {
    @track result;
    @track operation='';
    @track showResult=false;
    handleSub(event){
        this.operation=event.target.value
        this.result=parseInt(this.template.querySelectorAll(".operand")[0].value)-parseInt(this.template.querySelectorAll(".operand")[1].value);
        this.showResult=true;
    }
}
