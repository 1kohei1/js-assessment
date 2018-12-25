exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  },

  remove: function(arr, item) {
    return arr.filter(i => i !== item);
  },

  removeWithoutCopy: function(arr, item) {
    const indexes = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        indexes.push(i);
      }
    }
    for (let i = 0; i < indexes.length; i++) {
      arr.splice(indexes[i] - i, 1);
    }
    return arr;
  },

  append: function(arr, item) {
    return [...arr, item];
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    return [item, ...arr];
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(i => i === item).length;
  },

  duplicates: function(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (arr.indexOf(item, i + 1) >= 0 && duplicates.indexOf(item) === -1) {
        duplicates.push(item);
      }
    }
    return duplicates;
  },

  square: function(arr) {
    return arr.map(n => n * n);
  },

  findAllOccurrences: function(arr, target) {
    const indexes = [];

    arr.forEach((n, index) => {
      if (n === target) {
        indexes.push(index);
      }
    })

    return indexes;
  }
};
