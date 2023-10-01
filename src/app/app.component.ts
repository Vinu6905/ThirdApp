import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //unique Id generated for that component  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThirdApp';

  //Propperty Binding
  propbinding :boolean=false;

  //EventBinding
  vinayak1(){
    alert("Welcome Vinayak")
  }

  //Two way Binding using  ngModel Directive  
    hesaru : any=""
    loginware :any=""

    // Template Refrence Variable using single Way Binding
    Camel(camu:any){
      alert(camu)
    }
  apple1(a:any){
    alert(a)
  }

  //   Template refrence varible Two way Binding 

name1 :any =""
myfunction1(val : any){
  this.name1=val
}
value2 :any=""
chotabheem(datu :any){
  this.value2=datu
}

  //Forof Structural directives
  fruits =["apple" ,"bannana","mango"] 
  players=["sachin" ,"virat" ,"dhoni"]
  vegetables=["tomato" , "brinjal" ,"ladyfinger"]
  name :string="Vinayak"

  //Switch Case
color="blue";
player="virat";
player1="vinayak"
  person ={
  fname : "Sachin",
  lname :"Tendular",
  dob : 1973  
  }
  date =new Date()

  ref ={
    color :"red" ,
    backgroundColor :"blue",
    border : "5px solid black"  
   }


  Ganesha(val :any){
  console.log(val)
  }






}
 

 


 




