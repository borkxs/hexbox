function byteViewModel() {
  var self = this,
    encoding = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  self.beat = ko.observable( decode( location.hash || "0123 4567 89AB CDEF" ) );

  this.beatArray = ko.computed( function()
    {
    return ( self.beat() || "0" ).split(/\r\n|\r|\n|\s/g);
    }, this );

  ko.computed(function () {
    location.hash = encode( self.beat() || "0" );
  }, self).extend({ throttle: 1 });
}
function encode(v) {
  return v.replace(/\r\n|\r|\n/g,"+/").split(" ").join( "+" );
}
function decode(v) {
  s = (v[0]=="#") ? v.substring(1) : v;
  return s.replace(/\+\\\\/g,"\r").split("+").join(" ");
}
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function foo(i) {
  return pad( parseInt(i,16).toString(2), 4 );
}
function classify(s) {
  return (s=="0") ? "black" : "white" ;
}
function classify2(s) {
  return (s=="/") ? "return" : "" ;
}