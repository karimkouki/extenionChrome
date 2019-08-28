
chrome.storage.local.set({optionsNotif: ""}, function() {

});
chrome.storage.local.set({optionsSon: ""}, function() {

});

chrome.storage.sync.get(['optionsNotif'], function(resultNotif) {
    console.log('Value currently is ' + resultNotif.optionsNotif);
    var n=resultNotif.optionsNotif;

    chrome.storage.sync.get(['optionsSon'], function(resultSon) {
        console.log('Value currently is ' + resultSon.optionsSon);
        var s=resultSon.optionsSon;



        var op={type:n.type,
            title:"Agena3000",
           iconUrl:n.iconUrl,
            silent:s.silent};

        console.log(op);
        chrome.notifications.create(op,calback);
        function calback() {
            console.log('yess!');}
    });
});







(function() {
    $(document).ready(function() {
        // Params ($selector, boolean)


        function setSwitchState(el, flag) {
            el.attr('checked', flag);
        }
        chrome.storage.sync.get(['key'], function(result) {
            if (result.key !== null && result.key){
                setSwitchState($('#Notification'), true);
            }
            else
                setSwitchState($('#Notification'), false);
        });


        $('#Notification').on('change', function() {
            var isChecked = $(this).is(':checked');
            var selectedData;
            var $switchLabel = $('#Notification');
            console.log('isChecked: ' + isChecked);





            if(isChecked) {
                var options={
                    type:"basic",
                    iconUrl:"img/img.png",

                };
                console.log(options);
                chrome.storage.sync.set({optionsNotif: options}, function() {
                    console.log('Value is set to ' + options);
                });



                selectedData = $switchLabel.attr('data-on');
            } else {
                selectedData = $switchLabel.attr('data-off');
                var options={

                };
                console.log(options);
                chrome.storage.sync.set({optionsNotif: options}, function() {
                    console.log('Value is set to ' + options);
                });


            }

            chrome.storage.sync.set({key: isChecked}, function() {
                console.log('test Value is set to ' + isChecked);
            });
        });


        // Usage
        setSwitchState($('#Notification'), true);
    });

})();




(function() {
    $(document).ready(function() {
// Params ($selector, boolean)
        function setSwitchState(el, flag) {
            el.attr('checked', flag);
        }
        chrome.storage.sync.get(['key1'], function(result) {
            if (result.key1 !== null && result.key1){
                setSwitchState($('#Son'), true);
            }
            else
                setSwitchState($('#Son'), false);
        });


        $('#Son').on('change', function() {
            var isChecked = $(this).is(':checked');
            var selectedData;
            var $switchLabel = $('#Son');
            console.log('isChecked: ' + isChecked);





            if(isChecked) {
                var options={

                    silent:false

                };
                chrome.storage.sync.set({optionsSon: options}, function() {
                    console.log('Value is set to ' + options);
                });



                selectedData = $switchLabel.attr('data-on');
            } else {
                var options={
                    message:"le son active",

                    silent:true

                };
                chrome.storage.sync.set({optionsSon: options}, function() {
                    console.log('Value is set to ' + options);
                });
                selectedData = $switchLabel.attr('data-off');

            }

            chrome.storage.sync.set({key1: isChecked}, function() {
                console.log('Value is set to ' + isChecked);
            });
        });


// Usage
        setSwitchState($('#Son'), true);
    });

})();



