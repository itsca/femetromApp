femetromAppControllers.controller('ProjectsController', function ProjectsController($scope, documentsFactory, projectsFactory, $location, $cordovaFileTransfer, $cordovaFile) {
   //Variables
   var deviceReady = false;
   //Functions
   $scope.openDocument = function(docURL) {
   	 documentsFactory.setDocUrl(docURL);
   	 $location.url("/document");
   };
   ionic.Platform.ready(function() {
  		deviceReady = true;
	});
   $scope.downloadDocument = function(docURL, projectId) {
   	alert("Download Function");
		var plat = device.platformm;
		if(plat == "iOS"){
	      var fileURL = cordova.file.dataDirectory + "files/pdf/proyecto" + projectId + ".pdf";
	    }else{
	      var fileURL = cordova.file.externalApplicationStorageDirectory + "files/pdf/proyecto" + projectId + ".pdf";
	    }
		window.resolveLocalFileSystemURL(fileURL, function(){
	    	cordova.plugins.fileOpener2.open(
			    fileURL,
			    'application/pdf', 
			    { 
			        error : function(e) {
			        },
			        success : function () {               
			        }
			    }
			);
	    }, 
	    function(){
	    	if (deviceReady) {
			   	var plat = device.platform,
					fileTransfer = new FileTransfer();
		        //local save path.
		        if(plat == "iOS"){
			      var fileURL = cordova.file.dataDirectory + "files/pdf/proyecto" + projectId + ".pdf";
			    }else{
			      var fileURL = cordova.file.externalApplicationStorageDirectory + "files/pdf/proyecto" + projectId + ".pdf";
			    }
		        //download url
		        var uri = encodeURI(docURL);
		        fileTransfer.download(
		            uri,
		            fileURL,
		            function(entry) {
		                window.resolveLocalFileSystemURL(fileURL, function(){
		                	cordova.plugins.fileOpener2.open(
							    fileURL,
							    'application/pdf', 
							    { 
							        error : function(e) { 
							            alert('Error status: ' + e.status + ' - Error message: ' + e.message);
							        },
							        success : function () {              
							        }
							    }
							);
		                }, 
		                function(){console.log("file DOESNT exists");});
		            },
		            function(error) {
		                /*alert("download error source " + error.source);
		                alert("download error target " + error.target);
		                alert("upload error code " + error.code);*/
		            },
		            false, {
		                headers: {
		                    "Authorization": ""
		                }
		            });
		    };
	    });
   };

   projectsFactory.getProjects().success(function(data) {
	    	$scope.projects = data;
	    })
});