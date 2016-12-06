$(function() {
  $("form[username='validate-name']").validate({
    rules: {
      username: "required",
    messages: {
      username: "Please enter your name",
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
