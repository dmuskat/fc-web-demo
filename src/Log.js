var Log;

Log = (function() {
  function Log() {
    this.showPanel = false;
    this.logArray = [];
    this.builtLogEntryCount = 0;
    //Build an element to hold a table for the Log panel. DataTable will replace contents of first row.
    $('<div id="logPanel" class="log-panel-off log-panel"><h3>Application Log Panel (use L key to toggle display)</h3></div>').prependTo('#container');
    $('<table id="logTable" class="display"></table').appendTo('#logPanel');
    $('<thead><tr><th>Timestamp</th><th>Type</th><th>Module Name</th><th>Message</th></tr></thead>').prependTo('#logTable');
    $('<tbody><tr><td>Testtime</td><td>Test</td><td>Testname</td><td>Testmessage</td></tr></tbody>').appendTo('#logTable');
    $(document).on( "keypress", this.handleKeypress.bind(this) );
  }

  Log.prototype.debug = function(moduleName, message) {
    this.addLogEntry('debug',moduleName, message);
  };

  Log.prototype.info = function(moduleName, message) {
    this.addLogEntry('info',moduleName, message);
  };

  Log.prototype.warning = function(moduleName, message) {
    this.addLogEntry('warning',moduleName, message);
  };

  Log.prototype.error = function(moduleName, message) {
    this.addLogEntry('error',moduleName, message);
  };

  Log.prototype.addLogEntry = function(type, moduleName, message) {
    this.logArray.push({
      type: type,
      moduleName: moduleName,
      message: message,
      timeStamp: (new Date).toUTCString()
      });
    if (this.showPanel){
      this.rebuildLogTable();
    }
  };

  Log.prototype.handleKeypress = function(e) {
    // 108 = 'l', 76 = 'L'
    if (e.keyCode === 108 || e.keyCode === 76) {
      this.showPanel = !this.showPanel;
      this.setPanelDisplay();
    }
  };

  Log.prototype.setPanelDisplay = function() {
    if (this.showPanel){
      if (this.builtLogEntryCount === this.logArray.length){
        this.buildLogTable();
      }else{
        this.rebuildLogTable();
      }
    }
    $('#logPanel').toggleClass('log-panel-off', !this.showPanel);
  };

  Log.prototype.buildLogTable = function() {
    // Build new DataTable on first pass, "retrieve" allows for reuse after first pass.
    $('#logTable').DataTable( {
      "order": [0, 'asc'],
      "retrieve": true,
      "data": this.logArray,
      "columns": [
        { "data": "timeStamp" },
        { "data": "type" },
        { "data": "moduleName" },
        { "data": "message" }
      ]
    });
    this.builtLogEntryCount = this.logArray.length;
  };
  Log.prototype.rebuildLogTable = function() {
    // Destroy exisiting Datatable and build new one with current Array.
    var table = $('#logTable').DataTable();
    table.destroy();
    this.buildLogTable();

  };
  return Log;

})();
