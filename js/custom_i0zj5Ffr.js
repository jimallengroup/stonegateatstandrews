/* Example Contact Form Redirect (#5) */

  // This script will redirect your visitors on the successful form submit
  $(document).ajaxSuccess(function() {
    window.location.href = 'https://designmodo.com/affiliate/';
  });