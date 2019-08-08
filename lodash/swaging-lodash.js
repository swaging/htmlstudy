var swaging = {
   compact: function(ary) {
    return ary.filter(it => it)
  },
  chunk: function(array, size = 1){
    var result = []
    var count = 1
    for (var i = 0 ; i < array.length ; i += size){
       result.push(array.slice(i,i + size))
    }
    return result
  },
  difference: function (array, ...values){
    var compare = []
    var result = []
    for (var val of values){
      for (it of val){
        if (!compare.includes(it)){
          compare.push(it)
        }
      }
    }
    for (var arr of array){
      if (!compare.includes(arr)){
        result.push(arr)
      }
    }
    return result
  },
  drop: function (array,n = 1){
    var result = []
    for (var i = n ; i <array.length ; i ++){
      result.push(array[i])
    }
    return result
  },
  dropRight: function (array,n = 1){
    var result = []
    for (var i = 0 ; i <array.length - n ; i ++){
      result.push(array[i])
    }
    return result
  },
  fill: function (array,values,start = 0,end = array.length){
    for (var i = start; i < end ; i++){
      array[i] = values
    }
    return array
  },
  flatten: function (array){
    var result = []
    for (let keys of array){
      if (Object.getPrototypeOf(keys) != Array.prototype){
        result.push(keys)
      } else {
        for (let val of keys){
          result.push(val)
        }
      }
    }
    return result
  },
}