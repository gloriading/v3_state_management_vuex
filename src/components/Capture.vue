<template>
 <!-- The buttons to control the stream -->
<div class="button-group">
  <button id="btn-start" type="button" class="button" @click="startStreaming">Start Streaming</button>
  <button id="btn-stop" type="button" class="button" @click="stopStreaming">Stop Streaming</button>
  <button id="btn-capture" type="button" class="button" @click="captureSnapshot">Capture Image</button>
</div>

<!-- Video Element & Canvas -->
<div class="play-area">
  <div class="play-area-sub-stream">
    <h3>The Stream</h3>
    <video id="stream" width="400" height="320" ref="stream">
    </video>
    <div class="overlay">
      <h2>instructions</h2>
      <a href="https://whatwebcando.today/articles/choose-front-back-camera-stream/" target="_blank">A Link</a>
    </div>
  </div>
  <div class="play-area-sub">
    <h3>The Capture</h3>
    <canvas id="capture" width="320" height="240" ref="canvus"></canvas>
    <div id="snapshot" ref="snapshot"></div>
  </div>
</div> 
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Stream {
  srcObject: unknown;
  play: () => void;
  load: () => void;
}
export default defineComponent({
  name: 'Capture',
  setup() {
    const cameraStream = ref<MediaStream | null>(null);
    const stream = ref<HTMLVideoElement | null>(null);
    const canvus = ref<HTMLCanvasElement | null>(null);
    const snapshot = ref<HTMLElement | null>(null);

    function startStreaming() {
      const mediaSupport = 'mediaDevices' in navigator;

      if (mediaSupport && cameraStream.value == null) {
        // This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(function(mediaStream) {
          cameraStream.value = mediaStream;

          (stream.value as HTMLVideoElement).srcObject = mediaStream;
          (stream.value as HTMLVideoElement).play();
        })
        .catch( function( err ) {
          console.log( "Unable to access camera: " + err );
        });
      }
      else {
        alert( 'Your browser does not support media devices.' );
      }
    }

    function stopStreaming() {
      if (cameraStream.value !== null) {
        const track = (cameraStream.value as MediaStream).getTracks()[0];

        track.stop();
        (stream.value as HTMLVideoElement).load();

        cameraStream.value = null;
      }
    }

  function captureSnapshot() {
    if (cameraStream.value !== null) {
      if (!canvus.value) return;
      const ctx = (canvus.value as HTMLCanvasElement).getContext('2d');
      if (!ctx) return;
      const img = new Image();

      ctx.drawImage(stream.value as HTMLVideoElement, 0, 0, canvus.value.width, canvus.value.height );
    
      img.src	= canvus.value.toDataURL("image/png");
      img.width	= 240;

      (snapshot.value as HTMLElement).innerHTML = '';
      (snapshot.value as HTMLElement).appendChild(img);
    }
  }


    return {
      startStreaming,
      stopStreaming,
      captureSnapshot,
      stream,
      canvus,
      snapshot
    }
  },
})
</script>

<style scoped>
.button-group, .play-area {
  border: 1px solid grey;
  padding: 1em 1%;
  margin-bottom: 1em;
}

.button {
  padding: 0.5em;
  margin-right: 1em;
}

.play-area-sub {
  width: 47%;
  padding: 1em 1%;
  display: inline-block;
  text-align: center;
}
.play-area-sub-stream {
  width: 400px;
  display: inline-block;
  text-align: center;
  position: relative;
}

.overlay {
  position: absolute;
  bottom: 100px;
  left: 0;
  z-index: 10;
}
#capture {
  display: none;
}

#snapshot {
  display: inline-block;
  width: 320px;
  height: 240px;
}

@media (max-width: 480px)  {

}
</style>