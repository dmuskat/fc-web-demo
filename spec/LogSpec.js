describe("Log", function() {
  var log;
  beforeEach(function() {
    log = new Log();
  });
  // Sanity check that tests are working
  it("should be able to test", function() {
    expect(true).toBe(true);
  });

  it("should be able to insantiate Log ", function() {
    expect(log.logArray).toBeDefined();
    expect(log instanceof Log).toBeTruthy();
  });

  it("should have a default showPanel setting of true", function() {
    expect(log.showPanel).toBe(false);
  });

  it("should allow a call to debug()", function() {
    spyOn(log, 'debug');
    log.debug('test module', 'test message');
    expect(log.debug).toHaveBeenCalled();
  });

  it("should allow a call to info()", function() {
    spyOn(log, 'info');
    log.info('test module', 'test message');
    expect(log.info).toHaveBeenCalled();
  });

  it("should allow a call to warning()", function() {
    spyOn(log, 'warning');
    log.warning('test module', 'test message');
    expect(log.warning).toHaveBeenCalled();
  });

  it("should allow a call to error()", function() {
    spyOn(log, 'error');
    log.error('test module', 'test message');
    expect(log.error).toHaveBeenCalled();
  });

  it("should call addLogEntry() when debug() called", function() {
    spyOn(log,'addLogEntry')
    log.debug('test module', 'test message');
    expect(log.addLogEntry).toHaveBeenCalled();
  });

  it("should call addLogEntry() when info() called", function() {
    spyOn(log,'addLogEntry')
    log.info('test module', 'test message');
    expect(log.addLogEntry).toHaveBeenCalled();
  });

  it("should call addLogEntry() when warning() called", function() {
    spyOn(log,'addLogEntry')
    log.warning('test module', 'test message');
    expect(log.addLogEntry).toHaveBeenCalled();
  });

  it("should call addLogEntry() when error() called", function() {
    spyOn(log,'addLogEntry')
    log.error('test module', 'test message');
    expect(log.addLogEntry).toHaveBeenCalled();
  });

  describe("Keypress Event Tests", function() {
    var spyEvent;

    beforeEach(function() {
      setUpHTMLFixture();
    });
    // Sanity check that events tests are working
    it ("should receive the document keypress event.", function() {
      spyEvent = spyOnEvent($(document), 'keypress');
      $(document).trigger( "keypress" );

      expect('keypress').toHaveBeenTriggeredOn($(document));
      expect(spyEvent).toHaveBeenTriggered();
    });

    it ("should call setPanelDisplay() on document keypress event for 'l' key.", function() {
      spyOn(log, 'setPanelDisplay');
      var e = jQuery.Event( "keypress", { keyCode: 76 } );
      $(document).trigger( e );

      expect(log.setPanelDisplay).toHaveBeenCalled();
    });

    it ("should call setPanelDisplay() on document keypress event for 'L' key.", function() {
      spyOn(log, 'setPanelDisplay');
      var e = jQuery.Event( "keypress", { keyCode: 108 } );
      $(document).trigger( e );

      expect(log.setPanelDisplay).toHaveBeenCalled();
    });

    it ("should not call setPanelDisplay() on document keypress event for other keyes.", function() {
      spyOn(log, 'setPanelDisplay');
      var e = jQuery.Event( "keypress", { keyCode: 68 } );
      $(document).trigger( e );

      expect(log.setPanelDisplay).not.toHaveBeenCalled();
    });

    it ("should call buildLogTable() on document keypress event for panel key when showPanel is true.", function() {
      spyOn(log, 'buildLogTable');
      var e = jQuery.Event( "keypress", { keyCode: 76 } );
      $(document).trigger( e );

      expect(log.buildLogTable).toHaveBeenCalled();
    });

    it ("should not call buildLogTable() on document keypress event for panel key when showPanel is false.", function() {
      // Keypress for 'l' sets showPanel = true
      var e = jQuery.Event( "keypress", { keyCode: 76 } );
      $(document).trigger( e );
      // Keypress for 'L' sets showPanel = false
      spyOn(log, 'buildLogTable');
      var e = jQuery.Event( "keypress", { keyCode: 108 } );
      $(document).trigger( e );

      expect(log.buildLogTable).not.toHaveBeenCalled();

    });

  });
  describe("Log data structure Tests", function() {

    it ("should add a debug entry to the array when debug() called.", function() {
      log.debug('Jasmine test', 'debug should work');

      expect(log.logArray.length).toEqual(1);
      expect(log.logArray[0].type).toEqual('debug');
      expect(log.logArray[0].moduleName).toEqual('Jasmine test');
      expect(log.logArray[0].message).toEqual('debug should work');

    });

    it ("should add a info entry to the array when info() called.", function() {
      log.info('Jasmine test', 'info should work');

      expect(log.logArray.length).toEqual(1);
      expect(log.logArray[0].type).toEqual('info');
      expect(log.logArray[0].moduleName).toEqual('Jasmine test');
      expect(log.logArray[0].message).toEqual('info should work');

    });

    it ("should add a warning entry to the array when warning() called.", function() {
      log.warning('Jasmine test', 'warning should work');

      expect(log.logArray.length).toEqual(1);
      expect(log.logArray[0].type).toEqual('warning');
      expect(log.logArray[0].moduleName).toEqual('Jasmine test');
      expect(log.logArray[0].message).toEqual('warning should work');

    });

    it ("should add an error entry to the array when error() called.", function() {
      log.error('Jasmine test', 'error should work');

      expect(log.logArray.length).toEqual(1);
      expect(log.logArray[0].type).toEqual('error');
      expect(log.logArray[0].moduleName).toEqual('Jasmine test');
      expect(log.logArray[0].message).toEqual('error should work');

    });

    it ("should call rebuildLogTable() when adding to the array when showPanel is true.", function() {
      spyOn(log, 'rebuildLogTable');
      log.showPanel = true;
      log.debug('Jasmine test', 'rebuild should happen');
      expect(log.rebuildLogTable).toHaveBeenCalled();
    });

    it ("should not call rebuildLogTable() when adding to the array when showPanel is false.", function() {
      spyOn(log, 'rebuildLogTable');
      log.showPanel = false;
      log.debug('Jasmine test', 'rebuild should not happen');
      expect(log.rebuildLogTable).not.toHaveBeenCalled();
    });

  });
});