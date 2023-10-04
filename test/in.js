$(document).ready(function() {
  // Event handler for the email input
  $('.email').on("input", function() {
    if ($(this).val()) {
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  });

  // Add cursor pointer on hover for next buttons
  $('.next-button').hover(function() {
    $(this).css('cursor', 'pointer');
  });

  // Event handler for the email next button
  $('.next-button.email').click(function() {
    console.log("Something");
    $('.email-section').addClass("fold-up");
    $('.password-section').removeClass("folded");
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
    console.log("Something");
    $('.password-section').addClass("fold-up");
    $('.repeat-password-section').removeClass("folded");
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
    console.log("Something");
    $('.repeat-password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  });

  // Event handler for the reset button
  $('.reset-button').click(function() {
    // Clear form fields and reset button states
    $('.email').val('');
    $('.password').val('');
    $('.repeat-password').val('');
    $('.animated-button .next-button').removeClass('next');
  });

  // Event handler for the refresh icon within the repeat password section
  $('.icon-repeat-lock i').click(function() {
    // Perform the same reset behavior as clicking the "fa fa-paper-plane" icon
    $('.repeat-password-section').addClass('fold-up');
    $('.success').css('marginTop', 0);
  });
});
