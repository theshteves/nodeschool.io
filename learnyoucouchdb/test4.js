/*---[INTRODUCTION TO REDUCE]---(4/4)

Views are the primary tool used for querying and reporting on CouchDB documents.

Create a view for the database programming-languages-learn-couchdb which will just output all
the things in that database. After that, apply a reduce step which counts all the elements.

The database was already created by this exercise in your CouchDB.

The database is located at http://localhost:5984/programming-languages-learn-couchdb

Example result:

    {
      "rows": [{
        "key": null,
        "value": 3
      }]
    }

The _id for the design document should should be _design/languages
and the name for the view should be languages.

This will result in a view that can be queried at
http://localhost:5984/programming-languages-learn-couchdb/_design/languages/_view/languages
*/

// Map function
function (doc) {
    emit(null, doc.name)
}

// Reduce function
function(keys, values, rereduce) {
    return values.length
}
