var friends = ('../app/data/friends');

module.exports = function (app) {

  app.get('/data/friends', function (req, res) {
    res.json(tableDAta);
  });

  app.post('/api/clear', function () {
    // Empty out the arrays of data
    tableData = [];

    console.log(tableData);
  });
};
