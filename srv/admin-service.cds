using { sap.capire.bookshop as my } from '../db/schema';
  service AdminService  {
  entity Books as projection on my.Books;
   @cds.odata.valuelist
  entity Authors as projection on my.Authors;
 
}
