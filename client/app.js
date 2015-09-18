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
        name: {
            type: String
        },
        phone: {
            type: String,
            optional: true
        },
        address: {
            type: Object
        },
        'address.street': {
            type: String
        },
        'address.street2': {
            type: String,
            optional: true
        },
        'address.city': {
            type: String
        },
        'address.state': {
            type: String,
            allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
            autoform: {
                afFieldInput: {
                    firstOption: "(Select a State)"
                }
            }
        },
        'address.postalCode': {
            type: String,
            label: "ZIP"
        },
        contacts: {
            type: Array,
            optional: true
        },
        'contacts.$': {
            type: Object
        },
        'contacts.$.name': {
            type: String
        },
        'contacts.$.phone': {
            type: String
        }
    }));
Meteor.subscribe('books');


// This code only runs on the client
Template.body.helpers({
    books: function () {

        return Books.find({}).fetch();
    }
});