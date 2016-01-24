$(function()
{
    //alert('elad');

    //var username = sessionStorage.getItem('clicked');
   // alert( sessionStorage.getItem('clicked'));

    var map;
    var marker;
    var item;
    var markers = [];

    function initialize()
    {
        /*
        $.get( "././database/geteventsbyuser.php?id="+username, function( item )
        {
*/
            var myLatlng =  {lat : 31.8,lng: 35.17};


            var mapProp = {
                //center:new google.maps.LatLng(32.0878802,34.7955294),
                center: myLatlng,
                zoom:10,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };


            map = new google.maps.Map(document.getElementById("maptest"),mapProp);


            var infoWindow = new google.maps.InfoWindow({map: map});

            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    debugger;
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    //alert(position.coords.latitude);
                    //alert(position.coords.longitude);

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('.המיקום שלי');
                    map.setCenter(pos);
                }, function() {
                    handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
                // Browser doesn't support Geolocation
                //alert('Browser doesnt support Geolocation');
                handleLocationError(false, infoWindow, map.getCenter());
            }
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'אשנה הגדרות אפשר מיקום במכשיר' :
                'Error: Your browser doesn\'t support geolocation.');


           // item = JSON.parse(item);
            //var Price = item[0]['Price']
        /*
            for(var i = 0 ; i < (item.length) ; i++){



                var lat = item[i]['lat'];
                var lng = item[i]['lng'];
                if(lat == null || lng == null || lat == 0 || lng == 0) continue;
                var myLatlng = new google.maps.LatLng(lat,lng);
                var name = item[i]['name'];
                var startTime = item[i]['startTime'];
                var endTime = item[i]['endTime'];
                var description = item[i]['description'];
                var participants = item[i][10];
                //var participants = item[i]['userName'];

                addMarker(myLatlng , name ,startTime ,endTime , description,participants);


            }
            */
/*
        });



*/
       // addMarker( mapProp);


    }
    google.maps.event.addDomListener(window, 'load', initialize);

});
    /*
        function addMarker(position , name , startTime ,endTime , description,participants){

            var participantsSring = '';
            for(var i = 0 ; i < (participants.length) ; i++){
                participantsSring = participantsSring + participants[i]['userName'] + '</br>'

            }

            var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h4 id="firstHeading" class="firstHeading" style="color:#DF7401"><b>'+name.toString()+'</b></h4>'+
                '<div id="bodyContent">'+
                '<b style="color:#0404B4">' +
                'מועד התחלה : '+
                 '</b>' +
                startTime+
                ' </br>'+
                '<b style="color:#0404B4">' +
                'מועד סיום : '+
                '</b>' +
                endTime+
                ' </br>'+
                '<b style="color:#0404B4">' +
                'תיאור האירוע:'+
                '</b>' +
                description+
                ' </br>'+
                '<b style="color:#0404B4">' +
                ' :משתתפים' +
                '</b>' +
                '</br>' +
                participantsSring
                '</div>'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString,maxWidth: 350
            });

            var  marker =  new google.maps.Marker({
                position: position,
                map: map,
                title: name
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });

            markers.push(marker);
            marker.setMap(map);


        }
        */
    /*
    $( "#filterMap" ).click(function() {



        var startTimeFilter = $('#datetimepicker1').data("DateTimePicker").getDate();
        var endTimeFilter =  $('#datetimepicker2').data("DateTimePicker").getDate();
        startTimeFilter =  Date.parse(startTimeFilter);
        endTimeFilter =  Date.parse(endTimeFilter);



        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }

        markers = [];
        $.get( "././database/geteventsbyuser.php?id="+username, function( item )
        {

            var myLatlng =  {lat : 31.8,lng: 35.17};


            var mapProp = {
                //center:new google.maps.LatLng(32.0878802,34.7955294),
                center: myLatlng,
                zoom:9,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            };


            map = new google.maps.Map(document.getElementById("maptest"),mapProp);

            item = JSON.parse(item);
            //var Price = item[0]['Price']
            for(var i = 0 ; i < (item.length) ; i++){



                var lat = item[i]['lat'];
                var lng = item[i]['lng'];
                if(lat == null || lng == null || lat == 0 || lng == 0) continue;
                var myLatlng = new google.maps.LatLng(lat,lng);
                var name = item[i]['name'];
                var startTime = item[i]['startTime'];
                var endTime = item[i]['endTime'];
                var description = item[i]['description'];
                var participants = item[i][10];
                var startDate  = Date.parse(startTime);
                var endDate = Date.parse(endTime);

                if((startTimeFilter <= startDate && endTimeFilter >= endDate )) {
                    addMarker(myLatlng , name ,startTime ,endTime , description,participants);
                }




            }

        });


        /*

        cDate = Date.parse(check);

        if((cDate <= lDate && cDate >= fDate)) {
            return true;
        }




    });
     */
