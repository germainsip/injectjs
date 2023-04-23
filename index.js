

var waitForEl = function (selector, callback, maxTimes = false) {
    if (jQuery(selector).length) {
      callback();
    } else {
      if (maxTimes === false || maxTimes > 0) {
        (maxTimes != false) && maxTimes-- ;
        setTimeout(function () {
          waitForEl(selector, callback, maxTimes);
        }, 100);
      }
    }
  };

const precedent = () => {
    console.log('précédent');
}

const suivant = () => {
    console.log('suivant');
}

const addFct = () => {
    $('#prev').click(precedent);
    $('#next').click(suivant)
}



var onReadyDomElement = (element, callback) => {
    if (jQuery(element).length) {
      callback(jQuery(element));
    } else {
      setTimeout(function() {
        onReadyDomElement(element, callback);
      }, 100);
    }
  };
  // example
//   onReadyDomElement('#header', function(e) {
//     e.html('OK');
//   });


const init = () => {
    $('#commandes').load('commandes.html');
    onReadyDomElement('.btn-commandes', addFct);
    //$('#prev').promise().done((self) => { console.log(self.html('grut')); });
    // $.when($('#prev') != null).then(  console.log($('#prev').value) )
}

init();