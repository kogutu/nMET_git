/**
 * Created by DirectSEO on 13.09.2015.
 */
console.log('run on server');
Meteor.methods({

    Books: function(post) {

        console.log(post);
    }
    ,

    insertBookForm: function(post){

        console.log(post);
    }
});


Meteor.publish('books', function() {
    console.log(Books.find({}).fetch());
    return Books.find({});
});