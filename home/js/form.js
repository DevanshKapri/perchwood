$(document).ready(function () {
  // Function to handle form submission
  $("#enquiry-form").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = {
      location: $("select[name='location']").val(),
      checkIn: $("input[name='checkIn']").val(),
      checkOut: $("input[name='checkOut']").val(),
      person: $("input[name='person']").val(),
      phone: $("input[name='phone']").val(),
    };

    // Make AJAX request to submit form data
    $.ajax({
      type: "POST",
      url: "https://script.google.com/macros/s/AKfycbwFUp82kVoHd8L2ufN_lxpAxLIAI6owBr_XI1nCsklZ_5bd3EZmlUAh7AfDRcVDpb0z/exec",
      data: formData,
      success: function (response) {
        // Show success message in popup
        alert(response);
      },
      error: function (xhr, status, error) {
        // Show error message in popup
        alert("An error occurred: " + error);
      },
    });
  });
});
