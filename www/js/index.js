/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();

    },

    onSuccess : function(imageURI){

        var imageSrc = imageURI;
        var main = document.getElementsByTagName('main')[0];
        var picturePreview = document.getElementById('picture-preview');
        var pictureEndPreview = document.getElementById('picture-end-preview');

        main.style.backgroundImage = 'url("'+ imageSrc +'")';
        picturePreview.style.backgroundImage = 'url("'+ imageSrc +'")';
        
        pictureEndPreview.src = imageSrc;
        
        var hide = document.getElementById('hide-for-picture');
        hide.style.display = "none";

        var edit = document.getElementById('edit');
        edit.style.display = "block";

        var imageURI = imageURI;
        this.uploadPhoto(imageURI);
    },

    onFail : function(message) {
        alert('Failed because: ' + message);
    },

    onSuccessMusic : function(imageURI){
        alert("sucess");
    },

    onTakePhoto: function(){
        navigator.camera.getPicture(this.onSuccess.bind(this), this.onFail, { 
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI
        });
    },

    onTakeMusic: function(){
        console.log("onTakeMusic");
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, this.gotFS.bind(this), this.fail)
    },

    gotFS: function(fileSystem) {
        console.log(fileSystem);
        console.log("gotFS");
        fileSystem.root.getFile("", null, this.gotFileEntry, this.fail);
    },

    gotFileEntry: function (fileEntry) {
        console.log("fileEntry");
        fileEntry.file(this.gotFile.bind(this), this.fail.bind(this));
    },

    gotFile: function (file){
        console.log("gotFile");
        readDataUrl(file);
        readAsText(file);
    },

    readDataUrl: function(file){
        console.log("readAsDataURL");
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as data URL");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    },

    readAsText: function(file){
        console.log("readAsText");
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as text");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    },


    uploadPhoto: function(imageURI) {
        var cpt = 1;

        var options = new FileUploadOptions();
        options.fileKey="file";

       // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
       options.fileName="img1.jpg";
       cpt=cpt+1;


       var ft = new FileTransfer();
       ft.upload(imageURI, "http://noemiediaz.fr/kazoku/upload.php",
        function(){
            alert("win");
        }, 
        function(){

            alert("fail");
        }, options);

   },

   fail:function(){
    alert("fail");
   },



    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        var illustration =  document.getElementById("illustration");
        var edit =  document.getElementById("edit");
        var musique =document.getElementById("musique");
        //document.getElementById("illustration").addEventListener("click", this.onTakePhoto.bind(this), false);
        //document.getElementById("edit").addEventListener("click", this.onTakePhoto.bind(this), false);
        if(illustration)
            illustration.addEventListener("click", this.onTakePhoto.bind(this), false);
        if(edit)
            edit.addEventListener("click", this.onTakePhoto.bind(this), false);
        if(musique)
            musique.addEventListener("click", this.onTakeMusic.bind(this), false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');

   },
    // Update DOM on a Received Event
    receivedEvent: function() {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }


};

app.initialize();
