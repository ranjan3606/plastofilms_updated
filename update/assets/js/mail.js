    var firebaseConfig = {
      apiKey: "AIzaSyCAtVHEx9v8w8Yk0_tIedzdq4jXu5DGXjI",
      authDomain: "plasto-e5a10.firebaseapp.com",
      projectId: "plasto-e5a10",
      storageBucket: "plasto-e5a10.appspot.com",
      messagingSenderId: "314043664428",
      appId: "1:314043664428:web:35d31f6ac837ecff3ae989",
      measurementId: "G-7139071TKS"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        
        let contactFormInfo = firebase.database().ref('contactdata')

        document.querySelector('#form').addEventListener('submit', submitForm)
        
        function submitForm(e){
          e.preventDefault()
        
          let fullname = document.querySelector("#name").value;
          let yourphone = document.querySelector("#phone").value;
          let youremail = document.querySelector("#email").value;
          let subject = document.querySelector("#subject").value;
          let yourdes = document.querySelector("#des").value;
              
          contactSubmit(fullname, yourphone, subject, youremail, yourdes)
        
          let contact = document.querySelector('#form').reset()
          if(!contact){
            window.location.href = "thank.html";
    
          }else{
            alert("not submit")
          }
        }
        
        function contactSubmit(fullname, yourphone, subject, youremail, yourdes){
          let newContactFornInfo = contactFormInfo.push()
        
          newContactFornInfo.set({
            fullname:fullname,
            yourphone: yourphone,
            youremail:youremail,
            subject:subject,
            yourdes:yourdes
          })
        }

