(function() {
    function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};
        
//        @desc which album is playing, for use in next and previous buttons
//        @type {Object}
        var currentAlbum = Fixtures.getAlbum();
        
//        @desc Buzz object audio file
//        @type {Object}
        var currentBuzzObject = null;
        
//        @function setSong
//        @desc Stops currently playing song and loads new audio file as currentBuzzObject
//        @param {Object} song
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
            
            SongPlayer.currentSong = song;
        };
        
//        @function playSong
//        @desc plays the song and lists song.playing to true so album.html changes to the correct button
//        @param {Object} song
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        }
        
//        @function pauseSong
//        @desc pauses song and sets song.playing to false so album.html changes to the pause icon
//        @param {Object} song
        var pauseSong = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        }
        
//        @function getSongIndex
//        @desc gets the song index so it can be changed for next and previous buttons
//        @param {Object} song
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
        
//        @desc current song object set to null when page loads
//        @desc publicly clarifies so it's noticable by the album and playerBar templates
//        @type {Object}
                SongPlayer.currentSong = null;

//        @desc current song volume from 0 to 100
//        @type {Number}
                SongPlayer.volume = 75;


        /**
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */

        SongPlayer.currentTime = null;


        /**
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
            currentBuzzObject.setTime(time);
            }
         };
        
//       @function SongPlayer.play(song)
//        @desc plays a song from the beginning if the song has been played yet and then resumes playing from where it was left off
//        @params {Object} song
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
                
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };
        
//       @function SongPlayer.pause(song)
//        @desc thuis pauses a song at its current time stamp
//        @params {Object} song
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            pauseSong(song);
        };
        
//        @function SongPlayer.previous
//        @desc goes back to previous song, stops playing music if the current song is the first song
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        SongPlayer.setVolume = function(volume) {
                if (currentBuzzObject) {
                urrentBuzzObject.setVolume(volume);
                    
            }
        }

        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('$rootScope','SongPlayer', SongPlayer);
})();