(function () {

    angular.module('app.i18n', ['pascalprecht.translate'])
        .config(['$translateProvider', i18nConfig])
        .controller('LangCtrl', ['$scope', '$translate','$state', LangCtrl]);

        // English, Español, 日本語, 中文, Deutsch, français, Italiano, Portugal, Русский язык, 한국어
        // Note: Used on Header, Sidebar, Footer, Dashboard
        // English:          EN-US
        // Spanish:          Español ES-ES
        // Chinese:          简体中文 ZH-CN
        // Chinese:          繁体中文 ZH-TW
        // French:           français FR-FR

        // Not used:
        // Portugal:         Portugal PT-BR
        // Russian:          Русский язык RU-RU
        // German:           Deutsch DE-DE
        // Japanese:         日本語 JA-JP
        // Italian:          Italiano IT-IT
        // Korean:           한국어 KO-KR


        function i18nConfig($translateProvider) {

            $translateProvider.useStaticFilesLoader({
                prefix: 'assets/i18n/',
                suffix: '.json'
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy(null);
        }


        function LangCtrl($scope, $translate,$state) {
            $scope.lang = 'English';

            $scope.logout = function(){
                console.log("logout")
                 LoginServices.logout()
              //   $state.go('login');

            }

            this.openMenu = function($mdOpenMenu, ev) {
                originatorEv = ev;
                $mdOpenMenu(ev);
            };

            $scope.langs = [
                'English',
                'Español',
                '中文',
                '日本語'
            ]
            
            $scope.setLang = function(index) {
                var lang = this.langs[index];
                switch (lang) {
                    case 'English':
                        $translate.use('en');
                        break;
                    case 'Español':
                        $translate.use('es');
                        break;
                    case '中文':
                        $translate.use('zh');
                        break;
                    case '日本語':
                        $translate.use('ja');
                        break;
                }
                return $scope.lang = lang;
            };

            $scope.getFlag = function() {
                var lang;
                lang = $scope.lang;
                switch (lang) {
                    case 'English':
                        return 'flags-american';
                        break;
                    case 'Español':
                        return 'flags-spain';
                        break;
                    case '中文':
                        return 'flags-china';
                        break;
                    case '日本語':
                        return 'flags-japan';
                        break;
                }
            };

        }

})(); 
