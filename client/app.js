/**
 * Created by DirectSEO on 12.09.2015.
 */

Template.dragList.helpers({
   items:function(){
        return [{name:"jacek"},{name:"pawel"},{name:"mateusz"}];
       }
})
;
Template.dragList.onRendered(function(){
    dragula([document.querySelector('#left1'), document.querySelector('#right1')]);
});



    Books.attachSchema(new SimpleSchema({
        title: {
            type: String,
            label: "Title",
            max: 200
        },
        author: {
            type: String,
            label: "Author"
        },
        copies: {
            type: Number,
            label: "Number of copies",
            min: 0
        }
    }));
Meteor.subscribe('books');


// This code only runs on the client
Template.body.helpers({
    books: function () {

        return Books.find({}).fetch();
    }
});