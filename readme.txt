
Project: JavaScript Application Log
===================================

1. Implement a client-side application log with a revealable user interface.
2. Solution should be modular to support its use in similar applications.
3. Use index.html to demonstrate logging solution.


Programming Interface
---------------------
An instance of the Log object should provide a method for each of four log entry severity levels: debug, info, warning, error.

	debug(moduleName, message)

	info(moduleName, message)

	warning(moduleName, message)

	error(moduleName, message)

`moduleName` is a string indicating the section of the application that generated the log entry. This will often be the name of a module.

`message` is the string of text to be logged.

Assuming that `log` contains an instance of the Log object, the following statement should add a log entry that represents an error in MyModule.

	log.error('MyModule', 'Something bad happened.');


User Interface
--------------
The user interface, referred to as the Log Panel, will allow the user to view and filter a list of log entries.

1. Log entries must be collected regardless of the visibility of the Log Panel.
2. Initially, the Log Panel should be hidden.
3. Pressing the L key on the keyboard should reveal the Log Panel.
4. The Log Panel should occupy a layer (z-index) above all other page content.
5. Log entries should be ordered by time added ascending.
6. Each log entry should display time added, severity level, module name, and the message.
7. There must be a mechanism for limiting visible log entries to only those for a specific module name.
8. There must be a mechanism for limiting visible log entries to only those above a specified minimum log severity level. From lowest to highest severity, the log entries levels are debug, info, warning, and error. For example, if the user specifies a level of warning, only warning and error entries should be visible.
9. The filtering described above must be reversible. That is, there must be a way to reveal all log entries regardless of module name and severity level.
10. The list of log entries should update in real time. That is, a newly logged entry should be immediately visible except when hidden by active filtering.
11. There must be an obvious mechanism to close/hide the Log Panel.
12. The Log Panel should be styled to look pleasant and professional. Assume that customers will occasionally see the Log Panel and it should reflect positively on our company.