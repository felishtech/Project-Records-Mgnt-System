var parentDatabase = "SEAHAWK"
function recordStaff2(Name,locations,Phone,Site,desig,Wage,Id,Type,Project,td8c,parentDatabase,trow){
       
      
    var sub_location = locations
    var w_name = Name
    var wage = Wage
    var w_desig = desig
    var id_number = Id
    var p_number = Phone
    var w_site = Site
    var project_name = Project
    var categoryWork = Type

if(sub_location !==""&&w_name !==""&&w_desig !==""&&wage !==""&&id_number !==""&&p_number !==""&&w_site !==""&&project_name !==""&&categoryWork !==""){
      
    //   document.getElementById("loader").style.display = "block"
    //   document.getElementById("okSpan").style.display = "none"
    //   document.getElementById("btnRecordStaff").disabled = true
    td8c.innerHTML = "loading.."
    td8c.style.color = "red"

    var currentdate = new Date(); 
    var childKey =currentdate.getFullYear() +
           "-" 
           +(("0"+currentdate.getMonth()+1)).slice(-2)  + "-" 
            +   ("0"+currentdate.getDate()).slice(-2) 
            +  " "  
            + ("0"+currentdate.getHours()).slice(-2) + ":"  
            + ("0"+currentdate.getMinutes()).slice(-2) + ":" 
            + ("0"+currentdate.getSeconds()).slice(-2);
            
    var date2 = currentdate.getDate()+ "-"
            + (currentdate.getMonth()+1)  + "-" 
            + currentdate.getFullYear()
    var month = (("0"+currentdate.getMonth()+1)).slice(-2)
    var year = currentdate.getFullYear()
   
    
 
    var w_id = "###"
    var database = firebase.database().ref(parentDatabase).child("Weeks").once("value",
    function(Snapshot){
        var date = Snapshot.val().current_week

            var selectedDay =  getInputValue("selectedDay")

            if(selectedDay ===""){
              var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

              var d = new Date();
              var day = weekday[d.getDay()];

            }
            else{
              var day = getInputValue("selectedDay")
            }
     // ==================Special for Nasewa============================
            var database = firebase.database().ref(parentDatabase).child("Weeks").once("value",
            function(Snapshot){
               
              var current_week = Snapshot.val().current_week
              

              var revwID = current_week.replaceAll("/","-")
                var twID = revwID.split('-').reverse().join('-')

                var fullDate = twID.split("-")
                var dayc = fullDate[0]
                var month = fullDate[1]
                var year = fullDate[2]

                  if(dayc.charAt(0) === "0"){
                  var dayc = dayc.replaceAll("0","")
                
                  }
                  if(month.charAt(0) === "0"){
                  var month = month.replaceAll("0","")
                
                  }
                  if(year.charAt(0) === "0"){
                  var year = year.replaceAll("0","")

                  }
                  
              var b_d_date = dayc +"-"+month+"-"+year

             
              var weeks2 = (new Date(b_d_date))
              weeks2.setDate(weeks2.getDate() - 13);
              var curr_date2 = weeks2.getDate();
              var curr_month2 = weeks2.getMonth()+1;
              var curr_year2 = weeks2.getFullYear();
              var past_2_weeks = curr_date2 + "-" + curr_month2 + "-" +curr_year2 
              
              var week1 = new Date(b_d_date);
              week1.setDate(week1.getDate() - 7);
              var curr_date1 = week1.getDate();
              var curr_month1 = week1.getMonth()+1;
              var curr_year1 = week1.getFullYear();
              var past_1_weeks =curr_date1+ "-" + curr_month1 + "-" +  curr_year1 ;

              var revwID2 = past_2_weeks.replaceAll("/","-")
                var twID2 = revwID2.split('-').reverse().join('-')

                var fullDate2 = twID2.split("-")
                var day2 = fullDate2[0]
                var month2 = fullDate2[1]
                var year2 = fullDate2[2]

                  if(day2.charAt(0) === "0"){
                  var day2 = day2.replaceAll("0","")
                
                  }
                  if(month2.charAt(0) === "0"){
                  var month2 = month2.replaceAll("0","")
                
                  }
                  if(year2.charAt(0) === "0"){
                  var year2 = year2.replaceAll("0","")

                  }
                  
              // var past_2_weeks = day2 +"-"+month2+"-"+year2


              var revwID1 = past_1_weeks.replaceAll("/","-")
                var twID1 = revwID1.split('-').reverse().join('-')

                var fullDate1 = twID2.split("-")
                var day1 = fullDate1[0]
                var month1 = fullDate1[1]
                var year1 = fullDate1[2]

                  if(day1.charAt(0) === "0"){
                  var day1 = day1.replaceAll("0","")
                
                  }
                  if(month1.charAt(0) === "0"){
                  var month1 = month1.replaceAll("0","")
                
                  }
                  if(year1.charAt(0) === "0"){
                  var year1 = year1.replaceAll("0","")

                  }
                  
              // var past_1_weeks = day1 +"-"+month1+"-"+year1

              // alert(past_1_weeks+" "+past_2_weeks+" "+parentDatabase+" "+project_name+" "+id_number)

              allowWorker2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c,trow)
              
              // firebase.database().ref(parentDatabase).child("Staffs").child("Casual").child(project_name).child("Weekly Data").child(past_2_weeks).child(id_number).once("value",
              // function(cTasks){
              //   if(cTasks.exists()){

              //        firebase.database().ref(parentDatabase).child("Staffs").child("Casual").child(project_name).child("Weekly Data").child(past_1_weeks).child(id_number).once("value",
              //         function(cTasks2){
                        
              //           if(cTasks2.exists()){
              //             if (confirm(w_name +" has worked for 2 of 2 weeks and should wait for atleast 2 weeks to be admited back. Click 'OKAY' to re-admit or 'CANCEL' to reject")) {

              //               allowWorker2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c)

              //             } 
              //             else {
              //               td8c.innerHTML = "<img src='clock.png' id='clocker' style='display: inline; height: 10px; cursor:pointer' title='Mark presesnt'>  "
              //               td8c.style.color = "black"

              //             }
              //           }
              //           else{
              //             if (confirm(w_name +" has worked for 1 of 2 weeks")) {

              //               allowWorker2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c)

              //             } 
              //             else {
              //               td8c.innerHTML = "<img src='clock.png' id='clocker' style='display: inline; height: 10px; cursor:pointer' title='Mark presesnt'>  "
              //               td8c.style.color = "black"

              //             }

              //           }



                      
              //         })
              //   }
              //   else{
              //     firebase.database().ref(parentDatabase).child("Staffs").child("Casual").child(project_name).child("Weekly Data").child(past_1_weeks).child(id_number).once("value",
              //         function(cTasks2){
                        
              //           if(cTasks2.exists()){
              //             if (confirm(w_name +" has worked for 1 of 2 weeks")) {

              //               allowWorker2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c)

              //               } 
              //               else {
                            
              //                 td8c.innerHTML = "<img src='clock.png' id='clocker' style='display: inline; height: 10px; cursor:pointer' title='Mark presesnt'>  "
              //                 td8c.style.color = "black"
              //               }

              //           }
              //           else{
                         
              //             allowWorker2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c)

              //           }



                      
              //         })

              //   }

                       

               
              // })
             
             

           })

     
         
        
       });


   


      
    }
    else{

      // getWorkForce()
      alert("Please fill all fields")
      // document.getElementById("categoryWork").value = ""
      // document.getElementById("loader").style.display = "none"
      // document.getElementById("okSpan").style.display = "block"
      // document.getElementById("btnRecordStaff").disabled = false
      td8c.innerHTML = "<img src='clock.png' id='clocker' style='display: inline; height: 10px; cursor:pointer' title='Mark presesnt'>  "
      td8c.style.color = "black"
    }

  
  
   

}
function getInputValue(id)
{
return document.getElementById(id).value;

}

function allowWorker2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c,trow){
  
    var database = firebase.database().ref(parentDatabase).child("Attendance").child(project_name).child("Dates").child(date).child(id_number).child(day).once("value",
    function(Snapshot){

  var dayValue = Snapshot.val()
  
  if(dayValue ==="Present"){
    // document.getElementById("loader").style.display = "none",
    // document.getElementById("okSpan").style.display = "block"
    // document.getElementById("btnClock").disabled = false
    alert(w_name+" already clocked for "+day)
    // document.getElementById("categoryWork").value = ""
    td8c.innerHTML = "<img src='clock.png' id='clocker' style='display: inline; height: 10px; cursor:pointer' title='Mark presesnt'>  "
    td8c.style.color = "black"
    // document.getElementById("loader").style.display = "none"
    // document.getElementById("okSpan").style.display = "block"
    // document.getElementById("btnRecordStaff").disabled = false
  }
  else{
    // alert(dayValue)
    
      trow.style.color = "red"
      var database = firebase.database().ref(parentDatabase).child("Staffs").child(categoryWork).child(project_name).child("14-3-2022").child(id_number).once("value",
      function(Snapshot){
      if(Snapshot.exists()){
    
  


          
            var currentdate = new Date(); 
                var date2 = ("0"+currentdate.getDate()).slice(-2) + "-"
                            + (("0"+currentdate.getMonth()+1)).slice(-2)  + "-" 
                            + currentdate.getFullYear()
                    
                    var database = firebase.database().ref(parentDatabase).child("Weeks").once("value",
                    function(Snapshot){
                        var date = Snapshot.val().current_week


                        var databaseR = firebase.database().ref(parentDatabase).child("Staffs").child(categoryWork).child(project_name).child("Weekly Data").child(date).child(id_number).once("value",
                        function(Snapshot){

                          if(Snapshot.exists()){
                            updatePayment2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
                            updateAttendance2(id_number,date,project_name,day,td8c)
                            
                          }
                          else{

                            recordByWeek2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c)

                            populateAttendance2  (sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c)
                                                      
                          }})

  
                 });
                                  
                
        
    }
    else{
    
      // var currentdate = new Date(); 
      // var date2 = currentdate.getDate()+ "-"
      //     + (currentdate.getMonth()+1)  + "-" 
      //     + currentdate.getFullYear()
          
              var databaseR = firebase.database().ref(parentDatabase).child("Staffs").child(categoryWork).child(project_name).child("14-3-2022").child(id_number);
              var receivedDatabase = databaseR.update({
              

                designation: w_desig,
                id: id_number,
                location:sub_location,
              
                name:w_name,
                phone:p_number,
                project:project_name,
                site:w_site,
                type:categoryWork,
                wage:wage,
                workID: id_number,
                shift:status

              }).then(
                getWeekForAtt2(sub_location,w_desig,id_number,date2,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
      
              );

    }
      
  
  });
      

  }
  


  
});
}
function recordByWeek2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c){

    var databaseR = firebase.database().ref(parentDatabase).child("Staffs").child(categoryWork).child(project_name).child("Weekly Data").child(date).child(id_number).once("value",
      function(Snapshot){

        if(Snapshot.exists()){

          updatePayment2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)

        }
        else{

          var databaseR = firebase.database().ref(parentDatabase).child("Staffs").child(categoryWork).child(project_name).child("Weekly Data").child(date).child(id_number);
                  var receivedDatabase = databaseR.update({        
                  designation: w_desig,
                  id: id_number,
                  location:sub_location,
                  
                  name:w_name,
                  phone:p_number,
                  project:project_name,
                  site:w_site,
                  type:categoryWork,
                  wage:wage,
                  workID: id_number,
                  shift:status

                  }).then(
                    // getWeekForAtt(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status)
                
                  updateWageBill2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)

                      
                  );

        }

      })

     
}
function updatePayment2 (w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
{
        

        var database = firebase.database().ref(parentDatabase).child("Site Payments").child(project_name).child(date).child(id_number).once("value",
        function(Snapshot){

            var new_wage = (parseInt(Snapshot.val().wage)+parseInt(wage));

                var databaseR = firebase.database().ref(parentDatabase).child("Site Payments").child(project_name).child(date).child(id_number);
                var receivedDatabase = databaseR.update({  


                [day]:wage,
                wage:new_wage
            

                }).then(
                    updateSiteAccounts2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
                    

                );

        });
       

}
function  updateAttendance2(id_number,date,project_name,day,td8c)
{var parentDatabase = "SEAHAWK"
 
  var databaseR = firebase.database().ref(parentDatabase).child("Attendance").child(project_name).child("Dates").child(date).child(id_number);
    var receivedDatabase = databaseR.update({

    
    [day]:"Present",
   

    })
}
function populateAttendance2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c){
    var databaseR = firebase.database().ref(parentDatabase).child("Attendance").child(project_name).child("Dates").child(date).child(id_number);
      var receivedDatabase = databaseR.update({ 

                  
              
                  ["Monday"]:"",
                  ["Tuesday"]:"",
                  ["Wednesday"]:"",
                  ["Thursday"]:"",
                  ["Friday"]:"",
                  ["Saturday"]:"",
                  ["Sunday"]:"",
                  name:w_name,
                  location:sub_location,
                  
                  clock:"out",
              
                  workID: id_number,
              

                  }).then(
                      
                     updateAttendance2(id_number,date,project_name,day,td8c)

                  );
}
function updateSiteAccounts2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
{

var currentdate = new Date(); 
var childKey =currentdate.getFullYear() +
       "-" 
       +(("0"+currentdate.getMonth()+1)).slice(-2)  + "-" 
        +   ("0"+currentdate.getDate()).slice(-2) 
        +  " "  
        + ("0"+currentdate.getHours()).slice(-2) + ":"  
        + ("0"+currentdate.getMinutes()).slice(-2) + ":" 
        + ("0"+currentdate.getSeconds()).slice(-2);

        var dateNow = currentdate.getDate() + "-"
          + (currentdate.getMonth()+1)  + "-" 
          + currentdate.getFullYear()
        var wwage = wage

var databaseR = firebase.database().ref(parentDatabase).child("Constructions").child(project_name).child(w_site).child("Worker").child(id_number).once("value",
function(Snapshot){
        
    if(Snapshot.exists()){

        // var wage2 = (parseInt(Snapshot.val().workID)+parseInt(wage))
        updateSiteLabor2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wwage, w_id,status,day,td8c)
    }
    else{
         
        var databaseR = firebase.database().ref(parentDatabase).child("Constructions").child(project_name).child(w_site).child("Worker").child(id_number);
          var receivedDatabase = databaseR.update({        
          
          date: w_desig,
          
          name:w_name,
          
          workID:wage

          }).then(
              
          updateSiteLabor2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wwage, w_id,status,day,td8c)
              
          );

      
    }
   
  
      
  
  })

}

function updateSiteLabor2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wwage, w_id,status,day,td8c){ 
    var database = firebase.database().ref(parentDatabase).child("Constructions").child(project_name).child(w_site).child("Labor Cost").once("value",
        function(Snapshot){
            var newS = Snapshot.val().wage
            // alert(newS)
          
            var newCost = (parseInt(newS)+parseInt(wwage)).toFixed(0).toString()

           
          
                    var databaseR = firebase.database().ref(parentDatabase).child("Constructions").child(project_name).child(w_site).child("Labor Cost");
                    var receivedDatabase = databaseR.update({
                    

                    wage:newCost,
                    

                    }).then(
                        getCurrentWeek2(wwage,project_name,day,td8c)
                   
                    
                        
                     );

          
            
         
        });
   
}
function getCurrentWeek2(wwage,project_name,day,td8c){
    var database = firebase.database().ref(parentDatabase).child("Weeks").once("value",
    function(Snapshot){
        var c_week = Snapshot.val().current_week
    
        updateWeeksLabor2(wwage,c_week,project_name,day,td8c)
    });
}
function updateWeeksLabor2(wwage,c_week,project_name,day,td8c){

var database = firebase.database().ref(parentDatabase).child("Weeks").child(project_name).child(c_week).once("value",
    function(Snapshot){
            
        if(Snapshot.exists()){
            var newS = Snapshot.val().wage
           
            var wwage2 = (parseInt(newS)+parseInt(wwage)).toFixed(0)
            // alert(parseInt(wwage2))
        }
        else{
          var wwage2 = wwage
        }
        
        
        //
                var databaseR = firebase.database().ref(parentDatabase).child("Weeks").child(project_name).child(c_week);
                var receivedDatabase = databaseR.update({
                

                wage:wwage2
                

                }).then(
                
                alert("Successfuly marked present for "+day),
                //     document.getElementById("w_name").value = "",
                // document.getElementById("wage").value = "",
                // document.getElementById("w_desig").value = "",
                //     document.getElementById("id_number").value = "",
                //     document.getElementById("p_number").value = "",
                // document.getElementById("sub_location").value = "",
                td8c.innerHTML = "<img src='clock.png' id='clocker' style='display: inline; height: 10px; cursor:pointer' title='Mark presesnt'>  ",
                td8c.style.color = "black"


                // document.getElementById("loader").style.display = "none",
                // document.getElementById("okSpan").style.display = "block",
                // document.getElementById("btnRecordStaff").disabled = false
                //         document.getElementById("project_name").value = "",
                        // document.getElementById("categoryWork").value = ""
                    
                 );

      
        
     
    });

}
function updateWageBill2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
{
   if(categoryWork ==="Casual"){
        var databaseR = firebase.database().ref(parentDatabase).child("Site Payments").child(project_name).child(date).child(id_number);
                var receivedDatabase = databaseR.update({  

                
            
                ["Monday"]:"0",
                ["Tuesday"]:"0",
                ["Wednesday"]:"0",
                ["Thursday"]:"0",
                ["Friday"]:"0",
                ["Saturday"]:"0",
                ["Sunday"]:"0",
                allowances:"0",
                name:w_name,
                phone:p_number,
            
                status:"pending",
                wage:"0",
            
                workID: id_number,
            

                }).then(
                    updatePayment2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
                    
            
                );
   }
   else{

    if(categoryWork ==="in-house"){
        var databaseR = firebase.database().ref(parentDatabase).child("Site Payments").child(project_name).child(date).child(id_number);
                var receivedDatabase = databaseR.update({  

                
            
                ["Monday"]:"0",
                ["Tuesday"]:"0",
                ["Wednesday"]:"0",
                ["Thursday"]:"0",
                ["Friday"]:"0",
                ["Saturday"]:"0",
                ["Sunday"]:"0",
                allowances:"0",
                name:w_name,
                phone:p_number,
            
                status:"pending",
                wage:"0",
            
                workID: id_number,
            

                }).then(
                    updatePayment2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
                    
            
                );
   }
   else{
          alert("SUCCESSFUL.."),
         
        //    document.getElementById("project_name").value = "",
          // document.getElementById("categoryWork").value = ""
          td8c.innerHTML = "<img src='clock.png' id='clocker' style='display: inline; height: 10px; cursor:pointer' title='Mark presesnt'>  "
          td8c.style.color = "black"
        //   document.getElementById("loader").style.display = "none"
        //   document.getElementById("okSpan").style.display = "block"
        //   document.getElementById("btnRecordStaff").disabled = false
   }

   }
    
}
function updatePayment2 (w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
{
    

    var database = firebase.database().ref(parentDatabase).child("Site Payments").child(project_name).child(date).child(id_number).once("value",
    function(Snapshot){

        var new_wage = (parseInt(Snapshot.val().wage)+parseInt(wage));

            var databaseR = firebase.database().ref(parentDatabase).child("Site Payments").child(project_name).child(date).child(id_number);
            var receivedDatabase = databaseR.update({  


            [day]:wage,
            wage:new_wage,
            status:"pending",
        

            }).then(
                updateSiteAccounts2(w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c)
                

            );

    });
   

}
function getWeekForAtt2(sub_location,w_desig,id_number,date2,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,day,td8c){
    var database = firebase.database().ref(parentDatabase).child("Weeks").once("value",
      function(Snapshot){
          var date = Snapshot.val().current_week
      
          recordByWeek2(sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c)

          populateAttendance2  (sub_location,w_desig,id_number,date,w_name,p_number,project_name,w_site,categoryWork,wage, w_id,status,date2,day,td8c)
      });
  }

  
