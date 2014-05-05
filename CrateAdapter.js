/*---------------------------------------------------------------
  :: sails-crate
  -> adapter
---------------------------------------------------------------*/

var async = require('async')
, _       = require('lodash-node')
, crate   = require('node-crate');

module.exports = (function(){

  var dbs = {};

  var adapter = {

    syncable: false,

    registerCollection: function(collection, cb) {
      cb()
    },

    teardown: function(cb) {
      // nothing to do
      cb()
    },
    // Fetch the schema for a collection
    // (contains attributes and autoIncrement value)
    describe: function(collectionName, cb) {},

    define: function(collectionName, definition, cb) {},
    
    // Drop an existing collection / table
    drop: function(collectionName, cb) {
      var doCb = function (){cb()}
      crate.drop (collectionName).success(doCb).error(doCb)
    },
    // Create a new collection
    create: function(collectionName, data, cb) {
      // TODO: CHECK data format in schema definitions
      crate.create(collectionName, data, cb)
    },

    find: function(collectionName, options, cb) {
      // TODO: parsing options, map to SQL - see sails-mysql sql.js and utils.js
      // options are MONGO like queries ... 

    },
    // Stream one or more models from the collection
    // using where, limit, skip, and order
    // In where: handle `or`, `and`, and `like` queries
    stream: function(collectionName, options, stream) {
      // 1) Build find query
      // 2) Run query
      // 3) write resuts to stream 
      // stream.write(row, function()   
      // });
    },
    // Update one or more models in the collection
    update: function(collectionName, options, values, cb) {
        console.log (arguments)
    },
    // Delete one or more models from the collection
    destroy: function(collectionName, options, cb) {
      // crate.delete (collectionName, options, cb)
    },

    identity: 'sails-crate'

  };

  //////////////                 //////////////////////////////////////////
  ////////////// Private Methods //////////////////////////////////////////
  //////////////                 //////////////////////////////////////////
  function connect (collection, cb) {}

  function marshalConfig(config) {}

  return adapter;

})();