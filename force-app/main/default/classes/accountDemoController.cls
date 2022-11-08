public with sharing class accountDemoController {
  @AuraEnabled(Cacheable=true)
   public static List<Account> getAccountData(String nameStr) {
    nameStr = '%' + nameStr + '%';
          List<Account> accList = [SELECT  Id, Name, Industry, Website From Account WHERE Name LIKE :nameStr];
          if(accList.isEmpty()) {
              throw new AuraHandledException('No Record Found..');
          }
          return accList;
      }
      
  }