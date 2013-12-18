/**
 *  This file is part of PepitMobil project.
 *
 *  PepitMobil is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This Web application is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with PepitMobil.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @copyright     Copyright (c) PepitMobil
 * @link          http://pepit.be
 * @package       app.webroot.js.exercises
 * @license       http://www.gnu.org/licenses/ GPLv3 License
 */

var Menu = function () {

// public methods
    this.init = function () {

		$divMenu = $("#container");
		$divMenu.html("");
    };

// private methods
    Menu.prototype.printMainMenu = function() {
		
		$divMenu.append('<div id="row1" class="row"></div>');
		$("#row1").append(	'<div id="col1-1" class="col-lg-3"></div>');
		$("#row1").append(	'<div id="col1-2" class="col-lg-3"></div>');
		$("#row1").append(	'<div id="col1-3" class="col-lg-3"></div>');
		$("#row1").append(	'<div id="col1-4" class="col-lg-3"></div>');

		var index = 1;
		var row = 1;
		
		var btnStyle = "btn-primary";
		
		$.getJSON('data/exercises.json', function (donnees) {
            donnees.levels.forEach(function (level, i) {

				$("#col" + row + '-' + index).append('<a href="#" onClick="new Menu().printSubMenu(\'' + level.name + '\');" class="btn ' + btnStyle + ' btn-block" style="padding:10px" role="button">'
					+ level.label + '<br/><i style="font-size: 12px">' + level.subLabel + '</i></a><br/>');
				
				switch(index)
				{
					case 1 :
						btnStyle = "btn-success";
						break;
					case 2 :
						btnStyle = "btn-warning";
						break;
					case 3 :
						btnStyle = "btn-info";
						break;
					case 4 :
						btnStyle = "btn-primary";
						index = 0;
						row++;
						$divMenu.append('<div id="row' + row + '" class="row"></div>');
						$("#row" + row).append('<div id="col' + row + '-1" class="col-lg-3"></div>');
						$("#row" + row).append('<div id="col' + row + '-2" class="col-lg-3"></div>');
						$("#row" + row).append('<div id="col' + row + '-3" class="col-lg-3"></div>');
						$("#row" + row).append('<div id="col' + row + '-4" class="col-lg-3"></div>');
						break;
				}
				index++;

            });
        });
    };
	
	Menu.prototype.printSubMenu = function(menuName) {

		$divMenu.html("");
		$divMenu.append('<div id="row1" class="row"></div>');
		$("#row1").append('<div id="col1-1" class="col-lg-3"></div>');
		$("#row1").append('<div id="col1-2" class="col-lg-3"></div>');
		$("#row1").append(	'<div id="col1-3" class="col-lg-3"></div>');
		$("#row1").append(	'<div id="col1-4" class="col-lg-3"></div>');
		
		var index = 1;
		var row = 1;
		
		var btnStyle = "panel-primary";
		
		$.getJSON('data/exercises.json', function (donnees) {
			donnees.levels.forEach(function (level, i) {
				if(level.name == menuName) {
					
					
					level.subjects.forEach(function (subject, i) {
						$("#col" + row + "-" + index).append('<div class="list-group"><div class="list-group-item active">' + subject.label + '</div></div>');
						
						subject.topics.forEach(function (topic, i) {
							$("#col" + row + "-" + index + " .list-group").append('<a href="" onClick="new Menu().generateGame(\'' + menuName + '\', \'' + subject.name + '\', \'' + topic.name + '\');" class="list-group-item" style="color:black;">' + topic.label + '</a>');
						});
						
						switch(index)
						{
							case 1 :
								btnStyle = "btn-success";
								break;
							case 2 :
								btnStyle = "btn-warning";
								break;
							case 3 :
								btnStyle = "btn-info";
								break;
							case 4 :
								btnStyle = "btn-primary";
								index = 0;
								row++;
								$divMenu.append('<div id="row' + row + '" class="row"></div>');
								$("#row" + row).append('<div id="col' + row + '-1" class="col-lg-3"></div>');
								$("#row" + row).append('<div id="col' + row + '-2" class="col-lg-3"></div>');
								$("#row" + row).append('<div id="col' + row + '-3" class="col-lg-3"></div>');
								$("#row" + row).append('<div id="col' + row + '-4" class="col-lg-3"></div>');
								break;
						}
						index++;
					});
				}
			});
		});
	};
	
	Menu.prototype.generateGame = function(menuName, subjectName, topicName) {
		$divMenu.html('');
		$divMenu.append('<script src="js/exercises/' + menuName + '/' + subjectName + '/' + topicName + '.js"></script>');
	};
	


// private attributes
    var $divMenu;
	
	this.init();
}; 