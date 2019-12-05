$.ajax({
   type: 'GET',
<<<<<<< HEAD:js/HandlebarsCode/galleryCode.js
   url: '../data/sampleDataV7.json',
=======
   url: './data/projects.json',
>>>>>>> staging:assets/js/gallery-code.js
   dataType: 'json',
   success: function( data ) {

      $(document).ready( function() {
      // Gallery items build
      var thumbnailSource = $('#galleryTemplate').html();
      var thumbnailTemplate = Handlebars.compile(thumbnailSource);
      var thumbnailHTML = thumbnailTemplate(data);
      $('#gallery-body').prepend(thumbnailHTML);
      })

   }
})
