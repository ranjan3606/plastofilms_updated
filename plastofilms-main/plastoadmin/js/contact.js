var firebaseConfig = {
    apiKey: "AIzaSyCiQn8JJxPoJaIeeW9b_oeIFFvc_3xQN9E",
    authDomain: "vardaanayurveda-d920d.firebaseapp.com",
    projectId: "vardaanayurveda-d920d",
    storageBucket: "vardaanayurveda-d920d.appspot.com",
    messagingSenderId: "937246579401",
    appId: "1:937246579401:web:63ac3f481e8d128d548b18",
    measurementId: "G-C9CKJ0KECV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  


let contactFormInfo = firebase.database().ref('contactform')
  contactFormInfo.on("value", getData);

  function getData(datas){
      let users = datas.val();
      let keys = Object.keys(users);

      for(let i = 0; i<keys.length; i++){
        let contactData = keys[i]
      //   let i = i;
        let name = users[contactData ].name;
        let phone = users[contactData ].phone;
        let email = users[contactData].email;
        let msg = users[contactData].msg;

        let infoResult = document.querySelector('.datas');

        infoResult.innerHTML += `
        <tr>
              <td>${i}</td>
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td>${msg}</td>
        </tr>
        `

    }
  }

