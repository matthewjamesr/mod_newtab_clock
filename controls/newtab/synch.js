/*
 * Synch: [mod_synch] synch.js
 *
 * Copyright (c) 2014, Matthew Reichardt. All rights reserved.
 *
 * @author: matthewjamesr
 *
 * @log:
 * - 2014-07-17 spolu  Creation
 */
'use strict'

function Synch() { }

	var imagePath = '';

	function connect(connect_type) {
		var engine = connect_type;

		if(engine == 'mysql') {
			$.ajax({                                      
		      url: 'http://breach.matthewreichardt.com/data/request/synch.php',                  //the script to call to get data          
		      data: "cmd=1&username=" + localStorage.getItem("breach_auth_user"),                        //you can insert url argumnets here to pass to api.php
		                                       //for example "id=5&parent=6"
		      dataType: 'json',                //data format      
		      success: function(data)          //on recieve of reply
		      {

		      	var breach_user = {
	      			id: data[0],
	      			username: data[1],
	      			email: data[3],
	      			imagePath: data[4],
	      			location: data[5],
      			};

      			localStorage.setItem('breach_user', JSON.stringify(breach_user));

      			var breach_user = JSON.parse(localStorage.getItem("breach_user"));

		        var id = breach_user.id;              //get id
		        var vname = breach_user.username;
		        imagePath = breach_user.imagePath;          //image

		        if(id != null) {
		        	alert('logged in, refresh page....');
		        }
		      } 
		    });
		}
	}
