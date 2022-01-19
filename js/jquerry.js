//form
$(document).ready(function () {
  // variables
  let emailCheck = $(".email-check");
  let phoneCheck = $(".phonenumber-check");
  let nameCheck = $(".fullname-check");
  let messageCheck = $(".message-check");
  let phoneValue = phoneCheck.val();
  let messageValue = messageCheck.val();
  let nameValue = nameCheck.val();
  let emailValue = emailCheck.val();

  // name check
  emailCheck.on("blur", () => {
    console.log(emailValue);
    if (emailValue == "") {
      emailCheck.css("border-bottom", "2px solid #e74c3c");
      // html = innerHTML
      $(".two").html("an email is required");
      $("#exclamation2").css("display", "block");
    } else {
      $(".two").html("");
      emailCheck.css("border", "none");
    }
  });
  // name check
  nameCheck.on("blur", () => {
    if (nameValue == "") {
      nameCheck.css("border-bottom", "2px solid #e74c3c");
      // html = innerHTML
      $(".one").html("a name is required");
      $("#exclamation1").css("display", "block");
    } else {
      $(".one").html("");
      nameCheck.css("border", "2px solid #e74c3c");
    }
  });
  //phone Check
  phoneCheck.on("blur", () => {
    if (phoneValue == "") {
      phoneCheck.css("border-bottom", "2px solid #e74c3c");
      // html = innerHTML
      $(".three").html("a phone number is required");
      $("#exclamation3").css("display", "block");
    } else {
      $(".three").html("");
      phoneCheck.css("border", "none");
    }
  });
  //   messageCheck
  messageCheck.on("blur", () => {
    if (messageValue == "") {
      messageCheck.css("border-bottom", "2px solid #e74c3c");
      // html = innerHTML
      $(".four").html("a message is required");
      $("#exclamation4").css("display", "block");
    } else {
      $(".four").html("");
      messageCheck.css("border", "none");
    }
  });
});
