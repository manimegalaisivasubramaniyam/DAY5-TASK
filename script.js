
//JSON RESUME
let myresume={
    "basicdetail":
    {
        "name":"manimegalai s",
        "age":28,
        "qualification":"B.E",
        "phone number":73392999,
        "emailid":"manics2012@gmail.com",
        "address":[
            {
                "city":"karur",
                "state":"tamilnadu",
                "pincode":639005
    }],
"education":
{
    "UG degree":"B.E-COMPUTERSCIENCE AND ENGINEERING",
    "college":"v.s.b engineering college-karur",
    "percentage":80
},
    "skills":"java,js,db",
    "language known":"tamil,enlish"

    }
        
    
}
console.log(myresume);
//--------------------------------------------------------------------------
 //JSON ITERATION PROCESS (FOR ,FOREACH,)
 //for
let json=[{"name":"mani","age":27,"qualification":"B.E"},{"name":"ranji","age":27}]
console.log(json.length)
 for(var i=0;i<json.length;i++)
 {
   var obj=json[i];
   console.log(obj.name)
   console.log(obj.age)
 }
 //----------------------------------------------------------------------
 //for each
 json.forEach(element1 => {
    console.log(element1)
 });
 //-----------------------------------------------------------------------
 //for in
 for (const key in json) {
    if (Object.hasOwnProperty.call(json, key)) {
        const element = json[key];
        console.log(element)
    }
 }   
 //----------------------------------------------------------------------
  //for of
  for (const element2 of json) {
    console.log(element2)
  }