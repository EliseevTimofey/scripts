var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];
alert(JSON.stringify(team,function(key,value){
if(key==soldier||key==leader) return undefined;
return value;
}));