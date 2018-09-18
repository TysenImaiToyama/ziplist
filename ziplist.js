const listOne = [1, 2, 3];

const listTwo = ["a", "b", "c"];

function zipList(one, two)
{
  let theList = [];
  for (let i = 0; i < one.length; i++)
  {
    theList.push(one[i]);
    theList.push(two[i]);
  }
  return theList;
}

console.log(zipList(listOne,listTwo));

function zipListTheEasyWay(one, two)
{
  let theList = _.flatten(_.zip(one, two));
  return theList;
}

console.log(zipListTheEasyWay(listOne,listTwo));