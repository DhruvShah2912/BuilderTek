public with sharing class ImportmasterBudgetClass {
    @AuraEnabled
    public static object getMasterBudgets(){
        list<buildertek__Master_Budget__c> masterBudgetList;
        If(Schema.sObjectType.buildertek__Master_Budget__c.fields.Name.isAccessible() &&
              Schema.sObjectType.buildertek__Master_Budget__c.fields.Id.isAccessible() &&
              Schema.sObjectType.buildertek__Master_Budget__c.fields.buildertek__Type__c.isAccessible() &&
              Schema.sObjectType.buildertek__Master_Budget__c.fields.Original_Budget__c.isAccessible()){
               masterBudgetList = [select id,
                                            Name,
                                            buildertek__Type__c,
                                            Original_Budget__c,
                                            CurrencyIsoCode
                                            from buildertek__Master_Budget__c
                                            ORDER BY Name
                                            ASC limit 50000];
              }

        List<MasterBudgetsClass> MasterBudgetsClassList = new List<MasterBudgetsClass>();
        for(buildertek__Master_Budget__c masterBudget : masterBudgetList){
            MasterBudgetsClass MasterBudgetsClassRecord = new MasterBudgetsClass();
            MasterBudgetsClassRecord.masterBudgetRecord = masterBudget;
            MasterBudgetsClassRecord.budgetCheck = false;
            MasterBudgetsClassRecord.currencyCode = masterBudget.CurrencyIsoCode;
            MasterBudgetsClassList.add(MasterBudgetsClassRecord);
        }
        List<buildertek__Budget__c> quotesList;
        If(Schema.sObjectType.buildertek__Budget__c.fields.Name.isAccessible() &&
              Schema.sObjectType.buildertek__Budget__c.fields.Id.isAccessible() &&
              Schema.sObjectType.buildertek__Budget__c.fields.buildertek__Project__c.isAccessible() &&
              Schema.sObjectType.buildertek__Budget__c.fields.buildertek__Type__c.isAccessible() &&
              Schema.sObjectType.buildertek__Master_Budget__c.fields.Original_Budget__c.isAccessible()){
                         quotesList = [SELECT Id,
                                        Name,
                                        buildertek__Project__r.Name,
                                        buildertek__Type__c,
                                        CurrencyIsoCode,
                                        Original_Budget__c
                                        FROM buildertek__Budget__c
                                        WHERE buildertek__Type__c = 'Master'];

              }
        for(buildertek__Budget__c bud : quotesList){
            MasterBudgetsClass MasterBudgetsClassRecord = new MasterBudgetsClass();
            MasterBudgetsClassRecord.budgetRecord = bud;
            MasterBudgetsClassRecord.budgetCheck = false;
            MasterBudgetsClassRecord.currencyCode = bud.CurrencyIsoCode;
            MasterBudgetsClassList.add(MasterBudgetsClassRecord);
        }
        return  MasterBudgetsClassList;
    }

    @AuraEnabled
    public static MessageClass importMasterBudgetLines(List<String> budgetIds, String recordId){
        MessageClass msg = new MessageClass();
        try{
            List<buildertek__Budget_Item__c> masterBudgetList;


                masterBudgetList = [SELECT id,
                                        Name,
                                        buildertek__UOM__c,
                                        buildertek__Budget_Line_Group__c,
                                    	buildertek__Group__c,
                                        buildertek__Product__c,
                                        buildertek__Quantity__c,
                                        buildertek__Amount_In__c,
                                        buildertek__Cost_Code__c,
                                        buildertek__Unit_Price__c,
                                        buildertek__Description__c,
                                        buildertek__Forecast_To_Complete__c,buildertek__Contractor__c,buildertek__Sub_Contract__c
                                        FROM buildertek__Budget_Item__c
                                        WHERE buildertek__Budget__c IN: budgetIds];

            List<buildertek__Master_Budget_Line__c> masterBudgetLineList;

                masterBudgetLineList= [SELECT id,
                                                Name,
                                                buildertek__UOM__c,
                                                buildertek__Master_Budget_Item_Group__c,
                                       			buildertek__Group__c,
                                                buildertek__Product__c,
                                                buildertek__Quantity__c,
                                                buildertek__Amount_In__c,
                                                buildertek__Budget_Item_Name__c,
                                                buildertek__Cost_Code__c,
                                                buildertek__Unit_Price__c,
                                                buildertek__Description__c,
                                                buildertek__Forecast_To_Complete__c,buildertek__Contractor__c,buildertek__Sub_Contract__c
                                                FROM buildertek__Master_Budget_Line__c
                                                WHERE buildertek__Master_Budget__c IN: budgetIds];

            List<buildertek__Budget_Item__c> BudgetItemist =  new List<buildertek__Budget_Item__c>();
            List< buildertek__Budget_Line_Group__c> budgetGroup;

                budgetGroup= [SELECT Id, Name FROM  buildertek__Budget_Line_Group__c WHERE Name = 'No Grouping'];

            if(!masterBudgetLineList.isEmpty()){
                for(buildertek__Master_Budget_Line__c masterBudgetLine : masterBudgetLineList){
                    buildertek__Budget_Item__c BudgetItem = new buildertek__Budget_Item__c();
                    BudgetItem.Name = masterBudgetLine.Name;
                    BudgetItem.buildertek__UOM__c = masterBudgetLine.buildertek__UOM__c;
                    if(masterBudgetLine.buildertek__Group__c != null){
                       BudgetItem.buildertek__Group__c = masterBudgetLine.buildertek__Group__c;
                    }else{
                        BudgetItem.buildertek__Group__c = budgetGroup[0].Id;
                    }
                    BudgetItem.buildertek__Budget__c = recordId;
                    BudgetItem.buildertek__Product__c = masterBudgetLine.buildertek__Product__c;
                    BudgetItem.buildertek__Quantity__c = masterBudgetLine.buildertek__Quantity__c;
                    BudgetItem.buildertek__Amount_In__c = masterBudgetLine.buildertek__Amount_In__c;
                    BudgetItem.buildertek__cost_Code__c = masterBudgetLine.buildertek__cost_Code__c;
                    BudgetItem.buildertek__Unit_Price__c = masterBudgetLine.buildertek__Unit_Price__c;
                    BudgetItem.buildertek__Description__c = masterBudgetLine.buildertek__Description__c;
                    BudgetItem.buildertek__Forecast_To_Complete__c = masterBudgetLine.buildertek__Forecast_To_Complete__c;
                    BudgetItem.buildertek__Cost_Code__c	 = masterBudgetLine.buildertek__Cost_Code__c;
                    BudgetItem.buildertek__Contractor__c	 = masterBudgetLine.buildertek__Contractor__c;
                    BudgetItem.buildertek__Sub_Contract__c	 = masterBudgetLine.buildertek__Sub_Contract__c;
                    BudgetItemist.add(BudgetItem);
                }
            }
            if(!masterBudgetList.isEmpty()){
                for(buildertek__Budget_Item__c masterBudget : masterBudgetList){
                    buildertek__Budget_Item__c BudgetItem = new buildertek__Budget_Item__c();
                    BudgetItem.Name = masterBudget.Name;
                    BudgetItem.buildertek__UOM__c = masterBudget.buildertek__UOM__c;
                    if(masterBudget.buildertek__Group__c != null){
                       BudgetItem.buildertek__Group__c = masterBudget.buildertek__Group__c;
                    }else{
                        BudgetItem.buildertek__Group__c = budgetGroup[0].Id;
                    }
                    //BudgetItem.buildertek__Group__c = masterBudget.buildertek__Group__c;
                    BudgetItem.buildertek__Budget__c = recordId;
                    BudgetItem.buildertek__Product__c = masterBudget.buildertek__Product__c;
                    BudgetItem.buildertek__Quantity__c = masterBudget.buildertek__Quantity__c;
                    BudgetItem.buildertek__Amount_In__c = masterBudget.buildertek__Amount_In__c;
                    BudgetItem.buildertek__cost_Code__c = masterBudget.buildertek__cost_Code__c;
                    BudgetItem.buildertek__Unit_Price__c = masterBudget.buildertek__Unit_Price__c;
                    BudgetItem.buildertek__Description__c = masterBudget.buildertek__Description__c;
                    BudgetItem.buildertek__Cost_Code__c = masterBudget.buildertek__Cost_Code__c;
                    BudgetItem.buildertek__Forecast_To_Complete__c = masterBudget.buildertek__Forecast_To_Complete__c;
                    BudgetItem.buildertek__Contractor__c	 = masterBudget.buildertek__Contractor__c;
                    BudgetItem.buildertek__Sub_Contract__c	 = masterBudget.buildertek__Sub_Contract__c;
                    BudgetItemist.add(BudgetItem);
               }
            }
            if(BudgetItemist.size() > 0){

                    insert BudgetItemist;

                msg.Status = 'Success';
                msg.Message = 'Budget Lines Imported Successfully';
            }else{
                msg.Status = 'Failed';
                msg.Message = 'There were no Budget Lines for the selected Budget';
            }
            return msg;
        }catch(Exception exp){
            msg.Status = 'Failed';
            msg.Message = exp.getMessage();
            return msg;
        }
    }

    public class MasterBudgetsClass{
         @AuraEnabled
         public buildertek__Budget__c budgetRecord {get;set;}
         @AuraEnabled
         public buildertek__Master_Budget__c masterBudgetRecord {get;set;}
         @AuraEnabled
         public boolean budgetCheck {get;set;}
         @AuraEnabled
         public String currencyCode {get;set;}
    }

    public class MessageClass{
        @AuraEnabled
        public String Status {get;set;}
         @AuraEnabled
        public string Message {get;set;}

    }
}