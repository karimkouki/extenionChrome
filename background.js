
chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
        response
        console.log(response);
        chrome.storage.local.set({TokenKey: response.TokenValue}, function () {
            // console.log('Value is set to ' + value.toString());
        });

        chrome.storage.local.set({UsernameKey: response.username}, function () {


//console.log(chrome.storage.sync.length);


            chrome.storage.sync.get(['optionsNotif'], function(resultNotif) {
                console.log('Value currently is ' + resultNotif.optionsNotif);
                var n=resultNotif.optionsNotif;

                chrome.storage.sync.get(['optionsSon'], function(resultSon) {
                    console.log('Value currently is ' + resultSon.optionsSon);
                    var s=resultSon.optionsSon;
                    if(!n){
                        var op={type:"basic",
                            title: "Bienvenue "+response.username,
                            message: "Agena3000",
                            iconUrl:'retail-extension/img/img.png',
                            silent:false};

                        console.log(op);
                        chrome.notifications.create(op);

                    }



                    var op={type:n.type,
                        title: "Bienvenue "+response.username,
                        message: "Agena3000",
                        iconUrl:'retail-extension/'+n.iconUrl,
                        silent:s.silent};

                    console.log(op);
                    chrome.notifications.create(op);

                });
            });


            // console.log('Value is set to ' + value.toString());

        });
        chrome.storage.local.set({PasswordKey: response.password}, function () {
            // console.log('Value is set to ' + value.toString());
        });


    });





function x(){

   chrome.storage.local.get(['UsernameKey'], function(result) {
         console.log('Value username is ' + result.UsernameKey);
         var username=result.UsernameKey;

         chrome.storage.local.get(['PasswordKey'], function(result) {
                console.log('Value password is ' + result.PasswordKey);
                var password=result.PasswordKey;
                chrome.storage.local.get(['TokenKey'], function(result) {
                       console.log('Value token is ' + result.TokenKey);



                       var  token= result.TokenKey;





                  // urltest= /^(?:(?:http?):\/\/)localhost:4200?$/;
                    //console.log(chrome.tabs.getAllInWindow(undefined, function(tabs)));

                    chrome.tabs.getAllInWindow(undefined, function(tabs) {
                        var ouver=0;
                        for (var i = 0, tab; tab = tabs[i]; i++) {
                         var   xrt='localhost:4200/';
                        // console.log(tab.url.length);
                            console.log(tab.url);



                            if ((tab.url.indexOf(xrt)==7)&& (tab.url!='http://localhost:4200/login')) {
                               /* chrome.storage.sync.set({UsernameKey: ""}, function() {
                                     console.log('Value is set to ' + "");
                                 });


                                 chrome.storage.sync.set({PasswordKey: ""}, function() {
                                     console.log('Value is set to ' + "");
                                 });

                                 chrome.storage.sync.set({TokenKey: ""}, function() {
                                     console.log('Value is set to ' + "");
                                 });
                                 localStorage.setItem("tokenvalue", "");

*/ouver=1;
                                console.log('fentre localhost ouver sur le navigateur ');


                            }
                            else {
                                console.log('fentre localhost nést pas ouver sur le navigateur ');

                            }
                        }


                            /*   if (tab.url.indexOf(xrt)!=7) {
                                    chrome.browserAction.setIcon({path:"img/img2.png"});
                                    chrome.browserAction.setBadgeBackgroundColor({color:[128, 128, 128,0]});
                                    chrome.browserAction.setBadgeText({text:"OFF"});
                                    chrome.storage.sync.set({UsernameKey: ""}, function() {
                                        console.log('Value is set to ' + "");
                                    });


                                    chrome.storage.sync.set({PasswordKey: ""}, function() {
                                        console.log('Value is set to ' + "");
                                    });

                                    chrome.storage.sync.set({TokenKey: ""}, function() {
                                        console.log('Value is set to ' + "");
                                    });
                                    localStorage.setItem("tokenvalue", "");


                                }
    */

                    //setTimeout(getToken, 2000);

                            if (token==null||ouver==0){




                                chrome.browserAction.setIcon({path:"retail-extension/img/img2.png"});
                                chrome.browserAction.setBadgeBackgroundColor({color:[128, 128, 128,0]});
                                chrome.browserAction.setBadgeText({text:"OFF"});
                                console.log("yessss");
                               /* chrome.storage.sync.set({UsernameKey: ""}, function() {
                                    console.log('Value is set to ' + "");
                                });


                                chrome.storage.sync.set({PasswordKey: ""}, function() {
                                    console.log('Value is set to ' + "");
                                });

                                chrome.storage.sync.set({TokenKey: ""}, function() {
                                    console.log('Value is set to ' + "");
                                });
                                localStorage.setItem("tokenvalue", "");*/


                            }
else {



//console.log(windows.getLastFocused(function(fenetre){lancerFonction(callback,fenetre);}));
//console.log(chrome.tabs.getSelected(fenetre.id,function(tab){lancerFonction(callback,fenetre,tab);}));

                                function getToken() {


                                    var loginUrl = "http://10.20.38.191/api/login";
                                    var xhr = new XMLHttpRequest();

                                    xhr.open('POST', loginUrl, true);
                                    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                                    xhr.addEventListener('load', function () {
                                        var responseObject = JSON.parse(this.response);
                                        if (responseObject.token) {


                                            localStorage.setItem("tokenvalue", responseObject.token);
                                        } else {

                                            localStorage.setItem("tokenvalue", "");
                                        }


                                    });

                                    var sendObject = JSON.stringify({username: username, password: password});


                                    xhr.send(sendObject);
                                    // setTimeout(getToken, 2000);
                                }

                                getToken();


                                /*
                                  chrome.storage.sync.get(['optionsNotif'], function(result) {
                                         // console.log('Value currently is ' + resultNotif.optionsNotif);
                                         var ntf=result.optionsNotif;
                                         chrome.storage.sync.get(['optionsSon'], function(result) {
                                                // console.log('Value currently is ' + resultSon.optionsSon);

                                                var sounds=result.optionsSon;

                                                if (resultSon.optionsSon && resultNotif.optionsNotif){

                                                       var op={type:ntf.type,
                                                              title:ntf.title,
                                                              message:ntf.message,
                                                              iconUrl:ntf.iconUrl,
                                                              silent:sounds.silent};
                                                       console.log(op);


                                                }
                                                else{

                                                       var op={type:"basic",
                                                              title:"Bienvenue "+username,
                                                              message :"le système de notification est active",
                                                              iconUrl:"retail-extension/img.png",
                                                              silent: false
                                                       };
                                                       console.log(op);

                                                }
                                                chrome.notifications.create(op,calback);
                                                function calback() {
                                                       console.log('yess!');}
                                         });

                                  });
                                */


                                function getSecret() {

                                    var tokenvalue = localStorage.getItem("tokenvalue")

                                    var url = "http://10.20.38.191/api/societes/indicateurs?item=produit"
                                    var xhr = new XMLHttpRequest();
                                    xhr.open('GET', url, true);
                                    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                                    xhr.setRequestHeader("Authorization", "Bearer " + tokenvalue);
                                    {
                                        /*xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
                                        xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
                                        xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
                                        xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                                        xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");


                                    */
                                    }

                                    xhr.addEventListener('load', function () {
                                        if (xhr.readyState === xhr.DONE) {
                                            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
                                                chrome.browserAction.setIcon({path: "retail-extension/img/img.png"});
                                                chrome.browserAction.setBadgeBackgroundColor({color: [208, 0, 24, 255]});
                                                chrome.browserAction.setBadgeText({text: "ON"});


                                                /* window.open( "popup.html")*/
                                                var responseObject = JSON.parse(this.response);
                                                if (responseObject) {


                                                    if (!localStorage['i']) {
                                                        //i est un conteur de test ce test normalement fait un seul fois

                                                        localStorage['nb'] = 0;
                                                        //nb prend 0 pour la premiere fois apre s'il ya un changement il prendre la neauveau valeur
                                                        localStorage['i'] = 1;
                                                        console.log(localStorage['i']);
                                                        console.log('ce la premier test sur le compilateur i');

                                                        console.log(responseObject.match(/\d+/g)[1]);
                                                        console.log(responseObject.match(/\d+/g)[0]);
                                                        var x = parseInt(responseObject.match(/\d+/g)[1]) + parseInt(responseObject.match(/\d+/g)[0]);
                                                        console.log(localStorage['nb']);
                                                        if (parseInt(localStorage['nb']) != x) {
                                                            console.log("nb est différent de x");

                                                            localStorage['nb'] = x;

                                                            console.log(localStorage['nb']);
                                                            console.log(localStorage['i']);
                                                            console.log(x);
                                                            //resultElement.innerHTML ='la premier fois'
                                                            //http://localhost:4200
                                                            var chaine = x.toString();


                                                            timer = setTimeout(chrome.browserAction.setBadgeText({text: chaine}), 1000 * 100);





                                                            chrome.storage.sync.get(['optionsNotif'], function(resultNotif) {
                                                                console.log('Value currently is ' + resultNotif.optionsNotif);
                                                                var n=resultNotif.optionsNotif;

                                                                chrome.storage.sync.get(['optionsSon'], function(resultSon) {
                                                                    console.log('Value currently is ' + resultSon.optionsSon);
                                                                    var s=resultSon.optionsSon;
                                                                    if(!n){
                                                                        var op={type:"basic",
                                                                            title: chaine + " Produit Ajoute",
                                                                            message: "Agena3000",
                                                                            iconUrl:'retail-extension/img/img.png',
                                                                            silent:false};

                                                                        console.log(op);
                                                                        chrome.notifications.create(op);}



                                                                    var op={type:n.type,
                                                                        title: chaine + " Produit Ajoute",
                                                                        message: "Agena3000",
                                                                        iconUrl:'retail-extension/'+n.iconUrl,
                                                                        silent:s.silent};

                                                                    console.log(op);
                                                                    chrome.notifications.create(op);

                                                                });
                                                            });


                                                        }


                                                    } else {
                                                        var x = parseInt(responseObject.match(/\d+/g)[1]) + parseInt(responseObject.match(/\d+/g)[0]);
                                                        console.log(localStorage['nb']);
                                                        if (parseInt(localStorage['nb']) != x) {
                                                            console.log(" changement");


                                                            localStorage['nb'] = x;

                                                            console.log(localStorage['nb']);
                                                            console.log(localStorage['i']);
                                                            console.log(x);

                                                            var chaine = x.toString();

                                                            chrome.browserAction.setBadgeText({text: chaine});


                                                            chrome.storage.sync.get(['optionsNotif'], function(resultNotif) {
                                                                console.log('Value currently is ' + resultNotif.optionsNotif);
                                                                var n=resultNotif.optionsNotif;

                                                                chrome.storage.sync.get(['optionsSon'], function(resultSon) {
                                                                    console.log('Value currently is ' + resultSon.optionsSon);
                                                                    var s=resultSon.optionsSon;
                                                                    if(!n){
                                                                        var op={type:"basic",
                                                                            title: chaine + " Produit Ajoute",
                                                                            message: "Agena3000",
                                                                            iconUrl:'retail-extension/img/img.png',
                                                                            silent:false};

                                                                        console.log(op);
                                                                        chrome.notifications.create(op);}



                                                                    var op={type:n.type,
                                                                        title: chaine + " Produit Ajoute",
                                                                        message: "Agena3000",
                                                                        iconUrl:'retail-extension/'+n.iconUrl,
                                                                        silent:s.silent};

                                                                    console.log(op);
                                                                    chrome.notifications.create(op);

                                                                });
                                                            });

                                                        }
                                                    }


                                                } else {
                                                    // Erreur ou redirection HTTP. Il est possible de gérer ces cas,
                                                    // mais le but est de rester le plus simple possible ici
                                                    console.error(xhr.status, xhr.statusText);


                                                }

                                            }


                                        }
                                    })


                                    xhr.send(null);
                                    //localStorage.setItem('nb', nb);


                                    //setTimeout(getSecret,2000*2);

                                }

                                getSecret();






}

                    });

                });
         });
  });      setTimeout(x, 2000);
}

x();








