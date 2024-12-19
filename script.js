function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show the selected section with a transition
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
    
    function doPost(e) {
      var sheet = SpreadsheetApp.getActiveSheet();
      var name = e.parameter.name;
      var email = e.parameter.email;
      var message = e.parameter.message;
      
      sheet.appendRow([name, email, message]);
      return ContentService.createTextOutput("Success");
    }
  }
  