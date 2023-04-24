

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
    etape--;
    loadContent("#content",pages[etape].html);
}

const suivant = () => {
    console.log('suivant');
    etape++;
    loadContent("#content",pages[etape].html);
}

const addFct = () => {
    $('#prev').click(precedent);
    $('#next').click(suivant)
}

const loadContent = (div, page) => {
    $(div).load(page,() => {
        $('#titre').html(pages[etape].titre)
    });
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
  


const init = () => {
    $('#commandes').load('commandes.html',addFct);
   // onReadyDomElement('.btn-commandes', addFct);
    loadContent("#content",pages[etape].html)
    //$('#prev').promise().done((self) => { console.log(self.html('grut')); });
    // $.when($('#prev') != null).then(  console.log($('#prev').value) )
}

let etape = 0;

const pages = [
    {titre: "Page 1 et ça marche", html: "content/content-1.html"},
    {titre: "Page 2", html: "content/content-2.html"},
    {titre: "Page 3", html: "content/content-3.html"},

]




init();