(function() {
    function SongPlayer(Fixtures) {
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
                stopSong();
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
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

        var stopSong = function() {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
            
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
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
//        @function SongPlayer.next
//        @desc skips to next song, stops music if last song is on
         SongPlayer.next = function() {
                var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                currentSongIndex++;
            
                if (currentSongIndex >= currentAlbum.songs.length) {
                    stopSong();
                } else {
                    var song = currentAlbum.songs[currentSongIndex];
                    setSong(song);
                    playSong(song);
                }
            };

        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();