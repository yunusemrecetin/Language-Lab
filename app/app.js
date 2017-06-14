var languageLab = angular.module('languageLab', ['languageLab.controllers']);

languageLab.constant('Config', {
    'APP_NAME' : 'Language Lab'
});

languageLab.run(function($rootScope, $state) {

  /**
   * UI Input
   */
  $rootScope.fileInput = function() {
    var fileInputTextDiv = document.getElementById('file_input_text_div');
    var fileInput = document.getElementById('file_input_file');
    var fileInputText = document.getElementById('file_input_text');
    fileInput.addEventListener('change', changeInputText);
    fileInput.addEventListener('change', changeState);

    function changeInputText() {
      var str = fileInput.value;
      var i;
      if (str.lastIndexOf('\\')) {
        i = str.lastIndexOf('\\') + 1;
      } else if (str.lastIndexOf('/')) {
        i = str.lastIndexOf('/') + 1;
      }
      fileInputText.value = str.slice(i, str.length);
      console.log("File URL : " + fileInput.value);
    }

    function changeState() {
      if (fileInputText.value.length != 0) {
        if (!fileInputTextDiv.classList.contains("is-focused")) {
          fileInputTextDiv.classList.add('is-focused');
        }
      } else {
        if (fileInputTextDiv.classList.contains("is-focused")) {
          fileInputTextDiv.classList.remove('is-focused');
        }
      }
    }
  }

  /**
   * Excel to Json Parse
   */
  $rootScope.excelToJson = function(){
    var url = "http://localhost:8080/assets/demo_sheets.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e) {
      var arraybuffer = oReq.response;

      /* convert data to binary string */
      var data = new Uint8Array(arraybuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");

      /* Call XLSX */
      var workbook = XLSX.read(bstr, {type:"binary"});

      // Xlsx to Json
      var result = {};
      workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if(roa.length > 0){
          result[sheetName] = roa;
        }
      });

      console.log(JSON.stringify(result, 2, 2));
      jsonToAndroid(JSON.stringify(result, 2, 2));
      /* DO SOMETHING WITH workbook HERE */
    }

    oReq.send();

    function jsonToAndroid(jsonText){
      var parseJson = JSON.parse(jsonText)['Sheet1'];
      var stringXml = "";

      var allKeys = ["key","en","ar"];
      for(var i=0;i<allKeys.length;i++) {
        for(j=0;j<jsonText.Sheet1.length;j++) { 
        console.log(allKeys[i] + ' - ' + jsonText.Sheet1[j][allKeys[i]]);
        }
      }

    }

  }

});

languageLab.config(function($urlRouterProvider, $routeProvider) {

    $routeProvider
    .when("/home", {
        templateUrl : "page-list/home-page.html",
        controller : "HomePageCtrl"
    });

    $urlRouterProvider.otherwise('/home');

});






