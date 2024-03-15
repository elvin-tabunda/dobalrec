function sendEmail() {
  // Check if all required fields are filled
  var userName = document.getElementById('userName').value;
  var userEmail = document.getElementById('userEmail').value;
  var userPhone = document.getElementById('userPhone').value;
  var userLocation = document.getElementById('userLocation').value;
  var userLotArea = document.getElementById('userLotArea').value;
  var userNumCorner = document.getElementById('userNumCorner').value;
  var userPurpose = document.getElementById('userPurpose').value;

  if (!userName || !userEmail || !userPhone || !userLocation || !userLotArea || !userNumCorner || !userPurpose) {
      // If any required field is empty, display an error message
      Swal.fire({
          title: "Error!",
          text: "Please fill in all required fields.",
          icon: "error"
      });
      return; // Stop further execution
  }

  // All required fields are filled, proceed with sending email
  var params = {
      userName: userName,
      userEmail: userEmail,
      userPhone: userPhone,
      userLocation: userLocation,
      userLotArea: userLotArea,
      userNumCorner: userNumCorner,
      userPurpose: userPurpose
  };

  // Send email using emailjs
  emailjs.send('service_b4dfmak', 'template_qseqp0k', params).then(function() {
      Swal.fire({
          title: "Request Sent!",
          text: "Please click 'Ok' to continue!",
          icon: "success"
      });
  });
}



























// function sendEmail(){
//     var params = {
//       userName : document.getElementById('userName').value,
//       userEmail : document.getElementById('userEmail').value,
//       userPhone : document.getElementById('userPhone').value,
//       userLocation : document.getElementById('userLocation').value,
//       userLotArea : document.getElementById('userLotArea').value,
//       userNumCorner : document.getElementById('userNumCorner').value,
//       userPurpose : document.getElementById('userPurpose').value
//     }
//     emailjs.send('service_m4g4lpv', 'template_y5a041h', params).then(function() {
//       Swal.fire({
//         title: "Request Sent!",
//         text: "Please click 'Okay' to continue!",
//         icon: "success"
//       });
//     })
//   }