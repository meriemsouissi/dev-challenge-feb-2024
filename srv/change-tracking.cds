 using { AdminService } from './admin-service';


annotate AdminService.Books with{

     title @changelog;
     descr @changelog;
     author @changelog: [author.name]  ;
   
}


  
 