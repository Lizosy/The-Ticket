$(document).ready(function() {
  // Initialize the current section index
  var currentSection = 0;

  // Function to show the next section
  function showNextSection() {
    $('.input-section').eq(currentSection).addClass("fold-up");
    currentSection++;
    $('.input-section').eq(currentSection).removeClass("folded");
  }

  // Function to show the success message
  function showSuccessMessage() {
    $('.success').css("marginTop", "20px");
    $('.reset-button-section').css('display', 'block');
  }

  // Event handler for the email input
  $('.email').on("input", function() {
    if ($(this).val()) {
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  });

  // Event handler for the email next button
  $('.next-button.email').click(function() {
    showNextSection();
  });

  // Event handler for the full name input
  $('.fullname').on("input", function() {
    if ($(this).val()) {
      $('.icon-fullname').addClass("next");
    } else {
      $('.icon-fullname').removeClass("next");
    }
  });

  // Event handler for the full name next button
  $('.next-button.fullname').click(function() {
    showNextSection();
  });

  // Event handler for the password input
  $('.password').on("input", function() {
    if ($(this).val()) {
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  });

  // Event handler for the password next button
  $('.next-button.password').click(function() {
    showNextSection();
  });

  // Event handler for the repeat password input
  $('.repeat-password').on("input", function() {
    if ($(this).val()) {
      $('.icon-repeat-lock').addClass("next");
      $('.next-button.repeat-password').css('pointer-events', 'auto'); // Enable the button
    } else {
      $('.icon-repeat-lock').removeClass("next");
      $('.next-button.repeat-password').css('pointer-events', 'none'); // Disable the button
    }
  });

  // Event handler for the repeat password next button
  $('.next-button.repeat-password').click(function() {
    showNextSection();
    showSuccessMessage();
  });
});
