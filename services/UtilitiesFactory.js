tacoBout.factory('UtilitiesFactory', function() {
  return {
    findById: function(collection, id) {
      for (car i = 0; i < collection.length; i++) {
        if (collection[i].id == id) {
          return collection[i];
        }
      }
      return null;
    }
  };
});
