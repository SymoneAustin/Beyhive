import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({


    albums:[
    
    { text: 'Dangerously In Love',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Dangerously_In_Love_Album%282003%29.png/220px-Dangerously_In_Love_Album%282003%29.png'
       },
        
     { text: "B Day",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
       },
       
    { text: "I Am... Sasha Fierce",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
       },
       
    { text: "4",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png"
       },
       
    { text: "Beyoncé",
        imageURL: "http://www.treblezine.com/wp-content/uploads/2014/01/beyonce-beyonce.jpg"
       },
       
    { text: "Lemonade",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png"
       }
    
    
    ]

});

//Template.list.userInCollection = function(){
// 
//    return Meteor.users.find();
//    
//}


Template.album.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.album.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.album.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
