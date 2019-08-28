


chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    response
    console.log(response);
    chrome.storage.local.set({TokenKey: response.TokenValue}, function () {
        // console.log('Value is set to ' + value.toString());
    });

    chrome.storage.local.set({UsernameKey: response.username}, function () {
        // console.log('Value is set to ' + value.toString());
        var options={
            type:"basic",
            title:"bienvenue "+response.username,
            message :"Agena3000",
            iconUrl:"retail-extension/img/img.png"
        };
        chrome.notifications.create(options,calback);
        function calback() {
            console.log('1er');


        }

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
                        var tokenElement = document.getElementById('token');



                        chrome.browserAction.setIcon({path:"img/img2.png"});
                        chrome.browserAction.setBadgeBackgroundColor({color:[128, 128, 128,0]});
                        chrome.browserAction.setBadgeText({text:"OFF"});
                        console.log("yessss");
                        tokenElement.innerText = "Vous n'êtes pas connecte";
                        tokenElement.style.margin="10px";
                        tokenElement.style.textAlign="center";
                       var img=document.activeElement('imagb');
                        img.style.align="center";
                        img.style.marginLeft="0.1px";
                        img.style.marginRight="0.1px";
                        img.style.padding="1px";
                       img.style.paddingRight='1px';




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
                                var tokenElement = document.getElementById('token');

                                if (responseObject.token) {

                                    tokenElement.innerText = "Vous êtes connecte";
                                    tokenElement.style.margin="10px";
                                    tokenElement.style.textAlign="center";


                                    console.log("oui connexion");
                                    localStorage.setItem("tokenvalue", responseObject.token );
                                    /* var op={type:n.type,
                                         iconUrl:n.iconUrl,
                                         title:'bienvenue '+username,
                                         message:'Vous êtes connecte',
                                         silent:s.silent};

                                     console.log(op);
                                     chrome.notifications.create(op);
 */



                                    localStorage.setItem("tokenvalue", responseObject.token);
                                } else {
                                    tokenElement.innerText = "Vous n'etes Pas Connecté";
                                    tokenElement.style.margin="10px";
                                    tokenElement.style.textAlign="center";


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


                            var tokenvalue = localStorage.getItem("tokenvalue");
                            var table = document.getElementById('table');
                            var fp = document.getElementById('fp');
                            var el = document.getElementById('el');
                            var pt = document.getElementById('pt');

                            var titab1 = document.getElementById('titab1');
                            var titab2= document.getElementById('titab2');
                            var titab3 = document.getElementById('titab3');



                            var tokenElement = document.getElementById('token');
                            var resultElement = document.getElementById('result');

                            var nbElem = document.getElementById('nbElem');
                            var nbElemDetail = document.getElementById('nbElemDetail');
                            var total = document.getElementById('total');



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

                                                    table.innerHTML=border.solid;
                                                    fp.innerHTML="Fiches Produits";
                                                    el.innerHTML="Eléments logistiques";
                                                    pt.innerText="Produits";
                                                    nbElem.innerHTML=responseObject.match(/\d+/g)[1];
                                                    nbElemDetail.innerHTML= responseObject.match(/\d+/g)[0];
                                                    total.innerHTML=x;

                                                    resultElement.innerHTML = x+" Produit a est Ajoute";


                                                    console.log("nb est différent de x");

                                                    localStorage['nb'] = x;

                                                    console.log(localStorage['nb']);
                                                    console.log(localStorage['i']);
                                                    console.log(x);
                                                    //resultElement.innerHTML ='la premier fois'
                                                    //http://localhost:4200
                                                    var chaine = x.toString();


                                                    timer = setTimeout(chrome.browserAction.setBadgeText({text: chaine}), 1000 * 60);


                                                    /*  var op={type:n.type,
                                                          iconUrl:n.iconUrl,
                                                          title:chaine+" Produit Ajoute",
                                                          message:"this prety cool",
                                                          silent:s.silent};

                                                      console.log(op);
                                                      chrome.notifications.create(op);
  */





                                                }


                                            } else {
                                                var x = parseInt(responseObject.match(/\d+/g)[1]) + parseInt(responseObject.match(/\d+/g)[0]);
                                                console.log(localStorage['nb']);
                                                console.log(localStorage['nb']);
                                                table.style.border="solid collapse";
                                                table.style.margin="20px";
                                                titab1.style.backgroundColor="#ddd";
                                                titab1.style.margin="0.2px";
                                                titab2.style.backgroundColor="#ddd";
                                                titab2.style.margin="0.2px";
                                                titab3.style.backgroundColor="#ddd";
                                                titab3.style.margin="0.2px";
                                                resultElement.innerHTML="Il n'y a pas de changement";
                                                resultElement.style.margin="20px";
                                                resultElement.style.textAlign="center";
                                                fp.innerHTML="Fiches Produits";
                                                fp.style.margin="2px";
                                                fp.style.color="white";
                                                fp.style.textAlign="center";
                                                el.innerHTML="Eléments Logistiques";
                                                el.style.margin="2px";
                                                el.style.textAlign="center";
                                                el.style.color="white";
                                                pt.innerText="Produits";
                                                pt.style.textAlign="center";
                                                pt.style.margin="2px";
                                                pt.style.color="white";
                                                total.innerHTML=x;
                                                total.style.textAlign="center";
                                                nbElem.innerHTML=parseInt(responseObject.match(/\d+/g)[1]);
                                                nbElem.style.textAlign="center";
                                                nbElemDetail.innerHTML=parseInt(responseObject.match(/\d+/g)[0]);
                                                nbElemDetail.style.textAlign="center";


                                                if (parseInt(localStorage['nb']) != x) {
                                                    console.log(" changement");


                                                    localStorage['nb'] = x;

                                                    console.log(localStorage['nb']);
                                                    console.log(localStorage['i']);
                                                    console.log(x);

                                                    var chaine = x.toString();

                                                    chrome.browserAction.setBadgeText({text: chaine});

                                                    /*   var op={type:n.type,
                                                           iconUrl:n.iconUrl,
                                                           title:chaine+" Produit Ajoute",
                                                           message:"this prety cool",
                                                           silent:s.silent};

                                                       console.log(op);
                                                       chrome.notifications.create(op);
   */



                                                    table.style.border="solid collapse";
                                                    table.style.margin="20px";
                                                    titab1.style.backgroundColor="#ddd";
                                                    titab1.style.margin="0.2px";
                                                    titab2.style.backgroundColor="#ddd";
                                                    titab2.style.margin="0.2px";
                                                    titab3.style.backgroundColor="#ddd";
                                                    titab3.style.margin="0.2px";
                                                    resultElement.innerHTML = chaine+" Produit a est Ajoute";
                                                    resultElement.style.margin="20px";
                                                    resultElement.style.textAlign="center";
                                                    fp.innerHTML="Fiches Produits";
                                                    fp.style.margin="2px";
                                                    fp.style.color="white";
                                                    fp.style.textAlign="center";
                                                    el.innerHTML="Eléments Logistiques";
                                                    el.style.margin="2px";
                                                    el.style.textAlign="center";
                                                    el.style.color="white";
                                                    pt.innerText="Produits";
                                                    pt.style.textAlign="center";
                                                    pt.style.margin="2px";
                                                    pt.style.color="white";
                                                    total.innerHTML=x;
                                                    total.style.textAlign="center";
                                                    nbElem.innerHTML=parseInt(responseObject.match(/\d+/g)[1]);
                                                    nbElem.style.textAlign="center";
                                                    nbElemDetail.innerHTML=parseInt(responseObject.match(/\d+/g)[0]);
                                                    nbElemDetail.style.textAlign="center";







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








