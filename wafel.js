clientsPriceListDB = new Meteor.Collection('clientpricelist');

if (Meteor.isClient)
{
  Template.adminPanel.helpers({
    'clientsPriceList':function()
    {
      return clientsPriceListDB.find();
    }
  });

  Template.adminPanel.events({
    'click .add':function(){
      var client = $('#client').val();
      var canPrice = $('#canPrice').val();
      var boxPrice = $('#boxPrice').val();
      clientsPriceListDB.insert({client:client,canPrice:canPrice,boxPrice:boxPrice});
    },
    'click .remove':function(){
      clientsPriceListDB.remove(this._id);
    }
  });
}


if (Meteor.isServer) {

}
