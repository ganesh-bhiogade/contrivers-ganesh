import { LightningElement } from 'lwc';

export default class Counter extends LightningElement {
    
    count=0;
    handleClick(event) {
        
        this.count= this.count+2;
    }
}