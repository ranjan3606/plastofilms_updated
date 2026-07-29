//firebase code here
  
    firebase.auth.Auth.Persistence.LOCAL;
    
    $(document).ready(function(){
      $("#btn-login").click(function(){
          var email = $("#email").val();
          var password = $("#password").val();
          
          if(email !=  "" && password != ""){
               var result = firebase.auth().signInWithEmailAndPassword(email, password);
   
               result.catch(function(error){
                   var errorCode = error.code;
                   var errorMessage = errormessage;
                   
                   console.log(errorCode);
                   console.log(errorMessage)
                   window.alert("Message : " + errorMessage )
                   
               });
          }else{
              window.alert("hey there")
          }
     });
  
      $("#btn-logout").click(function(){
          firebase.auth().signOut();
      });
     
    })
  
  
    var ref = firebase.database().ref('blogs')
      ref.on("value", gotData);
  
    function gotData(data){
        let info = data.val();
        let keys = Object.keys(info);
  
        for(let i = 0; i<keys.length; i++){
          let infoData = keys[i]
          let name = info[infoData ].name;
          let email = info[infoData ].email;
          let phone = info[infoData ].phone;
          let requirement = info[infoData ].requirement
  
          let infoResult = document.querySelector('.result');
  
          infoResult.innerHTML += `
          <tr>
              <td>${name}</td>
              <td>${email}</td>
              <td>${phone}</td>
              <td>${requirement}</td>
          </tr>
          `
  
      }
    }


    var contactRef = firebase.database().ref('contactdata')
      contactRef.on("value", getData);
  
    function getData(datas){
        let users = datas.val();
        let keys = Object.keys(users);
  
        for(let i = 0; i<keys.length; i++){
          let contactData = keys[i]
          let name = users[contactData ].name;
          let email = users[contactData ].email;
          let phone = users[contactData].phone;
          let message = users[contactData ].message
  
          let infoResult = document.querySelector('.contacts');
  
          infoResult.innerHTML += `
          <tr>
              <td>${name}</td>
              <td>${email}</td>
              <td>${phone}</td>
              <td>${message}</td>
          </tr>
          `
  
      }
    }
  
  
    
      