var connection = require('../dbconfig/db_config');
module.exports.verifyshape = function (req, res) {
    var shape = req.body.shape;
    //var shape = "cube";
    console.log(shape);

    connection.query('SELECT * FROM tbl_shapes WHERE shape_name = ?', [shape], function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query, place: verify_shape'
            })
        } else {

            if (results.length > 0) {
                    res.json({
                        status: true,
                        message: 'Shape exist'
                    })
            }
            else {
                res.json({
                    status: false,
                    message: "Shape does not exits"
                });
            }
        }
    });
}
