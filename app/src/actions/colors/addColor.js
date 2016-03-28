module.exports = function(colorName, id) {
  return {
    type: 'ADD_COLOR',
    _id: id,
    colorName
  };
};
