// You can modify the upload files to pdf's, docs etc
//Currently it will upload only images

$(document).ready(function($) {

    // Upload btn on change call function
    $(".ImgUpload").change(function() {
      var filename = readURL(this);
      $(this).parent().children('label').html(filename);
    });
  
    // Read File and return value  
    function readURL(input) {
      var url = input.value;
      var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
      if (input.files && input.files[0] && (
        ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "gif" || ext == "pdf"
        )) {
        var path = $(input).val();
        var filename = path.replace(/^.*\\/, "");
        // $('.fileUpload label').html('Uploaded Proof : ' + filename);
        return filename;
      } else {
        $(input).val("");
        return "Only image/pdf formats are allowed!";
      }
    }
    // Upload btn end
  
  });
