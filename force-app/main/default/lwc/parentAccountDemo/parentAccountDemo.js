import { LightningElement } from 'lwc';

export default class ParentAccountDemo extends LightningElement {
   
contactName;
  showFeatures = false;


  contactCreatedParent(event){
     this.contactName= event.target.value;
    // event.detail
    
  }
 

 }

