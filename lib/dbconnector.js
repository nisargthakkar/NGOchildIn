'use strict';

const mysql = require('mysql');
let connection;

module.exports = {
    createConnection: function() {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'childin'
        });

        connection.connect();
    },

    query: function(query, callback) {
        connection.query(query, function(err, rows, fields) {
            if (err) return callback(err);
            return callback(null, rows);
        });
    },

    destroyConnection: function() {
        connection.close();
    }

}
