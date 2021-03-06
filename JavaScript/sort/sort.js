'use strict';

// No 1. sort random array

function getRandomArray(length) {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push(Math.round(Math.random() * (length - 1)) + 1);
  }
  return list;
}

// console.log(getRandomArray(10));

function compare(current,next) {
  const isBigger = current > next;
  return isBigger;
}

function arrMatch(list,i,j){
  let num = list[i];
  // 6 , 2
  list[i] = list[j];  // list[i] = 2 , list[j] = 2
  list[j] = num; // 2 , 6
  return list;
}

function sort(list) {
  const sortedList =[];
  let listArr = list;

  for(let i = 0; i < listArr.length; i++){

    // if(list[i+1] === undefined){
    //
    // }
    for(let j = i+1; j < listArr.length; j++){
      // console.log(compare(listArr[i],listArr[i+1]));
      if(compare(listArr[i],listArr[j])){
        // console.log(listArr[i] +'vvvvv'+ listArr[j]);
        listArr = arrMatch(listArr,i,j);
        // console.log(arrMatch(listArr,i,j));
        // console.log(listArr);
      }
    }
  }

  sortedList.push(listArr);
  return sortedList;
}


console.log(sort(getRandomArray(50)));



console.log('--------------------------- 절제선');

// No 2. sort data

const data = [
  {
    "name":"Edward",
    "age":28,
    "team":"FC Diablo",
    "ranking":1,
    "goal": 33,
    "passSuccessRate": '70.5%'
  },
  {
    "name":"Shawn",
    "age":30,
    "team":"FC Company",
    "ranking":6,
    "goal": 18,
    "passSuccessRate": '40.1%'
  },
  {
    "name":"Brad",
    "age":26,
    "team":"FC Bbang",
    "ranking":7,
    "goal": 14,
    "passSuccessRate": '69.2%'
  },
  {
    "name":"Merin",
    "age":31,
    "team":"FC MerDa",
    "ranking":5,
    "goal": 23,
    "passSuccessRate": '53.8%'
  },
  {
    "name":"Messi",
    "age":29,
    "team":"FC Barcelona",
    "ranking":4,
    "goal": 27,
    "passSuccessRate": '52.4%'
  },
  {
    "name":"Ronaldo",
    "age":29,
    "team":"FC Madrid",
    "ranking":3,
    "goal": 29,
    "passSuccessRate": '53.2%'
  },
  {
    "name":"Larsson",
    "age":32,
    "team":"FC Diablo",
    "ranking":2,
    "goal": 31,
    "passSuccessRate": '68.6%'
  }
];
console.table(data);

// 데이터 복사
// const realData = dataObj(copyObj,data);

function copyObj(obj) {
  let copy = {};
  if (typeof obj === 'object' && obj !== null) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        copy[prop] = copyObj(obj[prop]);
      }
    }
  } else {
    copy = obj;
  }
  return copy;
}
function dataObj(copyObj,data){
  let dataArr = [];
  data.map(function(data){
    let dataList = copyObj(data);
    if(typeof dataList.passSuccessRate === 'string'){
      dataList.passSuccessRateNumber = Number(dataList.passSuccessRate.replace('%',''));
    }
    dataArr.push(dataList);
  });
  return dataArr;
}

// console.log(realData);

function sortList(type,data){
  const realData = dataObj(copyObj,data);
  // const dataArr = [];  // data.map(function(item){
  //   console.log(item[type]);
  //
  // });
  realData.sort(function(a, b){
    return a[type] - b[type];
  });
  if(type === 'goal' || type === 'passSuccessRateNumber'){
    return realData.reverse();
  }else{
    return realData;
  }
}

function dataSort(type,data){
  if(type === 'age'){
    return sortList(type,data);
  }else if(type === 'goal'){
    return sortList(type,data);
  }else if(type === 'ranking'){
    return sortList(type,data);
  }
  else if(type === 'passSuccessRateNumber'){
    return sortList(type,data);
  }

}

console.log('age 순위',dataSort('age',data));
console.log('ranking 순위',dataSort('ranking',data));
console.log('goal 순위',dataSort('goal',data));
console.log('패스 성공률 순위',dataSort('passSuccessRateNumber',data));


console.log('원본 데이터', data);
