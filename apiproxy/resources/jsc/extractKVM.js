 var getAppName=context.getVariable("App.name");
 
 if(getAppName ==='Sahajahan'){
     context.setVariable("flag","here");
 }else{
      context.setVariable("flag","there");
 }