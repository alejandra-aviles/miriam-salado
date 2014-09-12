jQuery(document).ready(function($) {
  $('.royalSlider').royalSlider({
    keyboardNavEnabled: true,
    autoScaleSliderWidth: 650,
    autoScaleSliderHeight: $(this).data("royal-slider-height") || 450,
    globalCaption: true,
    autoScaleSlider:true,
    imageScaleMode:'fill',
    controlsInside: false,
    controlNavigation: 'thumbnails',
    thumbs: {
        autoCenter: false
    },
    arrowsNavAutoHide: false,
    transitionType:'fade'
  });

  $('.royalSlider-teaser').royalSlider({
    keyboardNavEnabled: true,
    autoScaleSliderWidth: 650,
    globalCaption: true,
    imgWidth:650,
    autoScaleSlider:true,
    imageScaleMode:'fill',
    controlsInside: false,
    arrowsNavHide: true,
    fadeEffect:true,
    transitionType:'fade',

    autoPlay: {
        enabled: true,
        speed:40
    }    
  });

});