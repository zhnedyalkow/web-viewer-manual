
WebViewer({
  path: 'WebViewer/lib', // path to the PDFTron 'lib' folder on your server
  licenseKey: 'Insert commercial license key here after purchase',
  // initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf',

  initialDoc: 'books/example-2.pdf',  // You can also use documents on your server
  backendType: 'ems'
}, document.getElementById('viewer'))
  .then(function (instance) {
    var docViewer = instance.docViewer;
    var annotManager = instance.annotManager;

    instance.enableFilePicker();
    // instance.setFitMode(FitMode.FitWidth);

    // Add search listener - function to be called when search is completed

    function searchListener(searchValue, options, results) {
      console.log(searchValue, options, results);
    };

    instance.addSearchListener(searchListener);

    // Download Pdf with or without annotations added by WebViewer
    instance.downloadPdf(true);

    // Enable annotations feature -Enables annotations feature, affecting the annotation visibility and elements related to annotations.
    instance.enableAnnotations();

    instance.setTheme({
      primary: '#2C2B3A',
      secondary: '#4D4C5F',
      border: '#555555',
      buttonHover: '#686880',
      buttonActive: '#686880',
      text: '#FFFFFF',
      icon: '#FFFFFF',
      iconActive: '#FFFFFF'
    })



    docViewer.on('documentLoaded', function () {
      // call methods relating to the loaded document
      // instance.downloadPdf();

      // Get anotation user 
      var annotationUser = instance.getAnnotationUser();
      
      // current page
      var currentPage = instance.getCurrentPageNumber();

      // Get page count - total number of pages
      var totalPages = instance.getPageCount();

      //  Makes the document viewer display the next and prev page of the document.
      // instance.goToNextPage();
      // instance.goToPrevPage();
      // instance.getFitMode();
    });
  });