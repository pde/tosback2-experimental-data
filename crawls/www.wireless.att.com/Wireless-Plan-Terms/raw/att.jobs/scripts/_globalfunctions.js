    /* Add common JS functions here */

$(document).ready(function() {
    //Settign focus on the first enabled text box
    //$("input[type='text']:enabled:first").focus();


    if ($.browser.msie && $.browser.version == "6.0") {
        $('#default #article').append('<a href="http://www.browserupgrade.info/ie6/" target="_blank"><img src="/images/old-vers-browser-msg.gif" width="528" height="38" alt="You do not have access to the full version of our site due to using an older browser. Please upgrade your browser by clicking here." /></a>');
    }

    //Initialize Linked in Popup

    if ($('#linkedin-att').length > 0) {
        try {
            new LinkedIn.CompanyInsiderPopup("linkedin-att", "at&t");
        }
        catch (err) {
            //Handle errors here
        }
    }



    //Testimonials
    $("#wraper-testimonials a").hover(
          function() {

              var position = $("#" + this.id).position();
              $("#tooltip").css("left", (position.left - 30) + "px");
              $("#tooltip").css("top", (position.top - 51) + "px");
              var AltText = $("#" + this.id + " img").attr("alt");

              var titleAlign = "one-line";
              if (AltText.length > 17)
                  titleAlign = "two-line";
              //alert(titleAlign);
              $("#tooltip").html($("<p class=" + titleAlign + ">" + AltText + "</p>"));
              $("#tooltip").show();
          },
          function() {
              $("#tooltip").hide();
          }
    );


    $('.external').click(function(e) {
        e.preventDefault();
        window.open($(this).attr("href"));
    });

    /*Home page */
    $('#btn-slide, #btn-slideclose').click(function(e) {
    $('#slider').css("z-index", "999999");
        if($("#sd-facebook").html().length==0)
            $("#sd-facebook").html('<iframe src="http://www.facebook.com/plugins/likebox.php?id=122379087373&amp;width=421&amp;connections=50&amp;stream=true&amp;header=false&amp;height=480" title="from-facebook" scrolling="no" frameborder="0" id="frm-facebook" ></iframe>');
        
        var sRight = -500;
        if ($("#slider").css("right") == "-500px")
            sRight = 0;
        e.preventDefault();
        $("#slider").animate({
            right: sRight
        }, 500, 'easeInQuart', function() { });

    });


    //Lightbox setup

    $("#various1").fancybox({
        'titlePosition': 'inside',
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

    $(".modal-iframe").fancybox({
        'width': 438,
        'height': 363,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe'
    });

    $(".modal-iframe-video").fancybox({
        'width': 438,
        'height': 463,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe'
    });

    $(".modal-iframe-testimonials").fancybox({
        'width': 441,
        'height': 371,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe'
    });

    $(".modal-iframe-big").fancybox({
        'width': 680,
        'height': 480,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe'
    });

    $(".modal-iframe-full").fancybox({
        'width': 880,
        'height': 690,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe'
    });



    $(".modal-iframe-admin").fancybox({
        'width': 750,
        'height': 700,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe'
    });



    $(".modal-iframe-admin-small").fancybox({
        'width': 750,
        'height': 300,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'type': 'iframe'
    });

    $(".modal-swf").fancybox({
        'padding': 0,
        'overlayOpacity': 0.7,
        'overlayColor': '#000',
        'width': 786,
        'height': 545,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

    //Accordian Setup
    $(".accordion").accordion({ autoHeight: false, active: 0 });

    //SearchJobs
    $('#ctl00_ctl07_btnSearchJobGo').click(function(e) {

        var SearchATS = "http://www.connect.att.jobs/search/";
        var CurrentATS = $('#pnav-jobsearch').attr("href");
        if (CurrentATS.indexOf("connect.att.jobs") != -1)
            SearchATS = CurrentATS + "?lang=en&keyword=";
        //alert(SearchATS);
        e.preventDefault(); //Prevent non-javascript action
        var SEOSearchURL = SearchATS + $('#ctl00_ctl07_txtSearchJobKeyword').val();
        openPopup(SEOSearchURL);
    });

    //LocalSearch Go

    $('#ctl00_ctl08_btnSearchJobGo').click(function(e) {

        var SearchATS = "http://www.connect.att.jobs/search/";
        var CurrentATS = $('#pnav-jobsearch').attr("href");
        if (CurrentATS.indexOf("connect.att.jobs") != -1)
            SearchATS = CurrentATS + "?lang=en&keyword=";
        //alert(SearchATS);
        e.preventDefault(); //Prevent non-javascript action
        var SEOSearchURL = SearchATS + $('#ctl00_ctl08_txtSearchJobZip').val();
        openPopup(SEOSearchURL);
    });


    $(".ddl-position-int ul").addClass("left");

    $(".ddl-position-int").click(function(e) {

        $(".ddl-position-int ul").removeClass("left");
        $(".ddl-position-int ul").addClass("position-menu");
        $(".ddl-position").append("<span class='interest-close'>X</span>");
        $(".interest-close").click(function(e) {

            $(".ddl-position-int ul").addClass("left");
            $(".ddl-position-int ul").removeClass("position-menu");
            $(".interest-close").hide();
        });
    });


    /* GA Event Tracking */
    $(".btn-go").click(function(e) {
        var vKeyWord = $("#ctl00_txtSearchWebsite").val();
        _gaq.push(['_trackEvent', 'SITE-SEARCH-KEYWORDS', vKeyWord, '']);
        //alert("added");
    });

    $("#careerarea li").click(function(e) {
        vCA = this.id;
        _gaq.push(['_trackEvent', 'CAREER-AREA-ICON', vCA, '']);
    });

    $("#careerarea-big li").click(function(e) {
        vCA = this.id;
        _gaq.push(['_trackEvent', 'CAREER-AREA-ICON-BIG', vCA, '']);
        //alert(vCA);
    });

    /*Sub Navigation Menu Expand-Collapse*/

    $('.secondarynav h3').click(function(i) {
        var bgImage = $(this).css("backgroundImage");

        var parentElement = $(this).parent().attr("id");

        if (bgImage.indexOf("-on") == -1) {
            var newBG = "url(/images/ico-secondarynav-arrow-on.gif)";
            $(this).css("backgroundImage", newBG);
            $("#" + parentElement + " ul").animate({
                opacity: 1,
                left: '+=50',
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            }); ;
        }
        else {
            var newBG = "url(/images/ico-secondarynav-arrow-off.gif)";
            $(this).css("backgroundImage", newBG);
            $("#" + parentElement + " ul").animate({
                opacity: 0.25,
                left: '+=50',
                height: 'toggle'
            }, 500, function() {
                // Animation complete.
            });
        }



    });


    /* Animations */
    $("#article-bg").animate({ opacity: 1.0 }, 2000);
    //$("h1").animate({ opacity: 1.0 }, 1500);

    //$(".career-area-fade").animate({ opacity: 1.0 }, 500);

    /* Social Slider Icons */

    $("#ico-selected").css("left", 56);

    $("#sd-facebook").show();

    $("#social-icons li a").click(function(e) {

        $("#social-icons li a").removeClass("active");
        $(".sframe").hide();
        e.preventDefault(); //Prevent non-javascript action
        var selID = this.id;
        $("#" + selID).addClass("active");
        selID = selID.replace("si", "sd");
        if (selID == "sd-twitter") {
            $("#sd-twitter").html('<iframe frameborder="0" src="/widget/twitter.aspx" id="frm-twitter"></iframe>');
        }
        else if (selID == "sd-linkedin") {
            $("#sd-linkedin").html('<iframe frameborder="0" src="http://www.linkedin.com/companies/at%26t?" id="frm-linkedin"></iframe>');
        }
        else if (selID == "sd-youtube") {
            $("#sd-youtube").html('<iframe frameborder="0" src="http://feedaggregator.att.centralcast.net/youtubedisplay.aspx?feedid=2&amp;count=10&amp;feedListName=none " id="frm-youtube"></iframe>');
        }
        else if (selID == "sd-facebook") {
            $("#sd-facebook").html('<iframe src="http://www.facebook.com/plugins/likebox.php?id=122379087373&amp;width=421&amp;connections=50&amp;stream=true&amp;header=false&amp;height=480" title="from-facebook" scrolling="no" frameborder="0" id="frm-facebook" ></iframe>');
        }

        $("#" + selID).show();
    });

});



/* Talent Network */
function backButton() {
    document.forms[0].reset();
    $('#contact_form').css('display', 'block');
    $('#phonethankyou').css('display', 'none');

}

function openPopup(vURL) {
    
    window.open(vURL, "popup");
}

function changeParentUrl(url) {
    parent.document.location = url;
}

function openPopup(vURL, vWidth, vHeight) {
    window.open(vURL, "popup", "menubar=1,resizable=1,top=120,width=" + vWidth + ",height=" + vHeight + ",scrollbars=yes");
}

function openPopup(vURL, vWidth, vHeight, vLeft, vTop) {
    window.open(vURL, "popup", "menubar=1,resizable=1,left=" + vLeft + ",top=" + vTop + ",width=" + vWidth + ",height=" + vHeight + ",scrollbars=yes");
}


$.extend({
getUrlVars: function(vURL) {
        var vars = [], hash;
        var hashes = vURL.slice(vURL.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(vName,vURL) {
    return $.getUrlVars(vURL)[vName];
    }
});


function createFlash(vWidth, vHeight, vSWF) {
    //   alert(vSWF);
    var flashvars = false;
    var params = {
        codebase: "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'",
        quality: "high",
        menu: "false",
        align: "middle",
        scale: "noScale",
        wmode: "opaque",
        bgcolor: "#ffffff",
        flashvars: ""
    };
    var attributes = {};
    swfobject.embedSWF(vSWF, "flashcontent", vWidth, vHeight, "8", "/flash/app_expressinstall.swf", flashvars, params, attributes);
}

function createFlashVideo(vWidth, vHeight, vFLV, vImage) {

    var flashvars = false;
    var params = {
        codebase: "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'",
        quality: "high",
        menu: "false",
        align: "middle",
        wmode: "opaque",
        scale: "noScale",
        bgcolor: "#EBBE0D",
        salign: "TL",
        flashvars: "videoURL=/media/" + vFLV + "&autoPlay=false&startPhotoSource=/images/video/" + vImage + "&hideControls=false&backgroundColor1=0x333333&backgroundColor2=0x222222"
    };
    var attributes = {};
    swfobject.embedSWF("/flash/Player.swf", "flashcontent", vWidth, vHeight, "8", "media/app_expressinstall.swf", flashvars, params, attributes);
}

function createFlashSWFmtvU(vWidth, vHeight, vSWF) {
    var flashvars = false;
    var params = {
        codebase: "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'",
        quality: "high",
        menu: "false",
        align: "left",
        wmode: "transparent",
        bgcolor: "transparent",
        flashvars: "CONFIG_URL=http://www.mtvu.com/player/embed/configuration.jhtml%3fid%3D1572002%26vid%3D181946"
    };
    var attributes = {};
    swfobject.embedSWF(vSWF, "flashcontent", vWidth, vHeight, "8", "media/app_expressinstall.swf", flashvars, params, attributes);
}



function createFlashCA(vWidth, vHeight, vSWF, vProfile) {
    //   alert(vSWF);
    var flashvars = { imagepath: vProfile };
    var params = {
        codebase: "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'",
        quality: "high",
        menu: "false",
        align: "middle",
        scale: "noScale",
        wmode: "opaque",
        bgcolor: "#ffffff",
        base: "."
    };
    var attributes = {};
    swfobject.embedSWF(vSWF, "flashcontent", vWidth, vHeight, "9", "/flash/app_expressinstall.swf", flashvars, params, attributes);
}

function clickButton(e, buttonid) {
    var evt = e ? e : window.event;
    var bt = document.getElementById(buttonid);
    if (bt) {
        if (evt.keyCode == 13) {
            bt.click();
            return false;
        }
    }
}



function openPopup(vURL, vWidth, vHeight) {
    window.open(vURL, "popup", "menubar=1,resizable=1,top=120,width=" + vWidth + ",height=" + vHeight + ",scrollbars=yes");
}

function openPopup(vURL, vWidth, vHeight, vLeft, vTop) {
    window.open(vURL, "popup", "menubar=1,resizable=1,left=" + vLeft + ",top=" + vTop + ",width=" + vWidth + ",height=" + vHeight + ",scrollbars=yes");
}


$.extend({
    getUrlVars: function(vURL) {
        var vars = [], hash;
        var hashes = vURL.slice(vURL.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(vName, vURL) {
        return $.getUrlVars(vURL)[vName];
    }
});

