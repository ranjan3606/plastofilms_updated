

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

  function saveData(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      window.location.replace("./index.html")
    }).catch((err) => {
      alert(err)
    })
  }

  function signOut(){
    firebase.auth().signOut().then(function(){
      window.location.replace("./login.html")
    })
  }


  

  let contactFormInfo = firebase.database().ref('contactdata')
  contactFormInfo.on("value", getData);

  function getData(datas){
      let users = datas.val();
      let keys = Object.keys(users);

      for(let i = 0; i<keys.length; i++){
        let contactData = keys[i]
      //   let i = i;
        let fullname = users[contactData ].fullname;
        let yourphone = users[contactData ].yourphone;
        let youremail = users[contactData].youremail;
        let subject = users[contactData].subject;
        let yourdes = users[contactData].yourdes;
        

        let infoResult = document.querySelector('.contact');

        infoResult.innerHTML += `
        <tr>
            <td>${fullname}</td>
            <td>${yourphone}</td>
            <td>${youremail}</td>
            <td>${subject}</td>
            <td>${yourdes}</td>
        </tr>
        `

    }
  }

  
  