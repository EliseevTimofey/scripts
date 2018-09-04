var shooters = [],i;

function makeArmy() {

  

  for ( i = 0; i < 11; i++) {
    var shooter = function me() {
      alert( me.i );
    };
    shooter.i = i;
shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();
