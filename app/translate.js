languageLab.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'TAB_1': 'Source File',
    'TAB_2': 'Text to Source',
    'MENU' : 'MENU'
  });
 
  $translateProvider.translations('de', {
    'TAB_1': 'Quelle Ordner',
    'TAB_2': 'Text zur Quelle',
    'MENU' : 'MENÜ'
  });
 
 $translateProvider.translations('tr', {
    'TAB_1': 'Kaynak Dosyadan',
    'TAB_2': 'Yazıdan Dosyaya',
    'MENU' : 'MENÜ'
  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');

}]);

