Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

function choseOne(engineers, draft, count){

  let choosenList = [];
  for (let x = 0; x < count; x++) {
    let engNumber = Math.floor(Math.random() * engineers.length);
    choosenList[x] = engineers.swap(engNumber, engineers.length - 1).pop();
    draft.push(choosenList[x]);
  }

  return choosenList;
}

function choseFromDraft(weeklySupport, count, midWeek) {

  let choosenList = [];

  if(midWeek === 3){
    let duplicat = [];
    for (let x = 0; x < count; x++) {
      duplicat.push(weeklySupport.pop());
    }
    
    for (let x = 0; x < count; x++) {
      choosenList[x] = weeklySupport.pop();
    }

    Array.prototype.push.apply(weeklySupport, duplicat);
  }
  else{
    for (let x = 0; x < count; x++) {
      choosenList[x] = weeklySupport.pop();
    }
  }

  return choosenList;
}

function selectEngineer(engineers, count, draft, weeklySupport, midWeek){
  let selectedEngineers;

  if (midWeek > 2 && draft.length > count) {

    if (weeklySupport.length == 0){
      Array.prototype.push.apply(weeklySupport, draft);
    }

    selectedEngineers = choseFromDraft(weeklySupport, count, midWeek);

    return selectedEngineers;
  }
  else if (engineers.length < count) {
    let temp = [];

    for (let x = 0; x < count; x++) {
      temp.push(draft.pop());
    }

    Array.prototype.push.apply(engineers, draft);

    selectedEngineers = choseOne(engineers, draft, count);

    Array.prototype.push.apply(engineers, temp);
    draft.length = 0;
    return selectedEngineers;

  }
   else {
    selectedEngineers = choseOne(engineers, draft, count);
    return selectedEngineers;
  }

  
}

module.exports.get = function (event, context, callback) {

const engineers = [{ name: 'e1' }, { name: 'e2' }, { name: 'e3' }, { name: 'e4' }, { name: 'e5' },
                   { name: 'e6' }, { name: 'e7' }, { name: 'e8' }, { name: 'e9' }, { name: 'e10' }],
  count = 2,
  shiftDays = 15,
  finalResult = [],
  today = new Date(),
  weeklySupport = [],
  draft = [];

  let midWeek = 0;
  
  for (let i = 0, midWeek = 0; i < shiftDays; i++ , midWeek++) {

    let date = { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() + i };
    let selectedGroup = selectEngineer(engineers, count, draft, weeklySupport, midWeek);
    
    finalResult.push({ 'Date': new Date(date.year, date.month, date.day), 'eng' : selectedGroup });
    midWeek = (midWeek === 6) ? 0 : midWeek


  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(finalResult)
  });
};