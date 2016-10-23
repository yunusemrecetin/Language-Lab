languageLab.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TAB_1': 'Source File',
    'TAB_2': 'Text to Source',
    'MENU' : 'MENU'
  });
 
  $translateProvider.translations('de', {
    'TAB_1': 'TAB 1',
    'TAB_2': 'TAB 2',
    'MENU' : 'MENU'
  });
 
 $translateProvider.translations('tr', {
    'TAB_1': 'Kaynak Dosyadan',
    'TAB_2': 'Yazıdan Dosyaya',
    'MENU' : 'MENÜ'
  });

  $translateProvider.preferredLanguage('en');

}]);