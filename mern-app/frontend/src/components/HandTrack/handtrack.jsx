import './styles.css'
import { useState, useEffect, useRef } from 'react'
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import { drawHand } from './utilities';
import { drawLandmarks } from '@mediapipe/drawing_utils';

function Handtrack() {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await handpose.load();
      setModel(model);
      console.log('Model loaded')
    };
    loadModel();
  }, []);

  useEffect(() => {
    const runDetection = async () => {
      console.log('Running detection...');
      if (model && videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
    
        // Set canvas size based on video size
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
    
        const predictions = await model.estimateHands(video);
        console.log('Predictions:', predictions);
        setPredictions(predictions);
    
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawHand(predictions, context);
        if (predictions[0] && predictions[0].landmarks) {
          drawLandmarks(context, predictions[0].landmarks, { visibilityMin: 0.65, color: '#00FF00', lineWidth: 2 });
    
          // Draw the bounding box
          const landmarks = predictions[0].landmarks;
          let minX = landmarks[0][0];
          let minY = landmarks[0][1];
          let maxX = landmarks[0][0];
          let maxY = landmarks[0][1];
          for (let i = 1; i < landmarks.length; i++) {
            const landmark = landmarks[i];
            minX = Math.min(minX, landmark[0]);
            minY = Math.min(minY, landmark[1]);
            maxX = Math.max(maxX, landmark[0]);
            maxY = Math.max(maxY, landmark[1]);
          }
    
          const width = maxX - minX;
          const height = maxY - minY;
          context.strokeStyle = '#FF0000';
          context.lineWidth = 2;
          context.strokeRect(minX, minY, width, height);
        }
      }
    
      requestAnimationFrame(runDetection);
    };
    
    runDetection();
  }, [model]);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };
    startCamera();

    if (predictions[0] && predictions[0].landmarks) {
      // Draw the landmarks on the canvas
      drawLandmarks(context, predictions[0].landmarks, { visibilityMin: 0.65, color: '#00FF00', lineWidth: 0.5 },  {x: 10, y: 10});
    
      // Calculate the bounding box
      const landmarks = predictions[0].landmarks;
      let minX = landmarks[0][0];
      let minY = landmarks[0][1];
      let maxX = landmarks[0][0];
      let maxY = landmarks[0][1];
      for (let i = 1; i < landmarks.length; i++) {
        const landmark = landmarks[i];
        minX = Math.min(minX, landmark[5] -50);
        minY = Math.min(minY, landmark[1] -50 );
        maxX = Math.max(maxX, landmark[1]);
        maxY = Math.max(maxY, landmark[1]);
      }
      const handWidth = maxX - minX;
      const handHeight = maxY - minY;
      const handCenterX = minX + handWidth / 2;
      const screenCenterX = window.innerWidth / 2;
      const xOffset = screenCenterX - handCenterX
      minX += xOffset;
      maxX += xOffset;
    
      // Draw the bounding box
      const width = maxX - minX;
      const height = maxY - minY;
      context.strokeStyle = '#FF0000';
      context.lineWidth = 2;
      context.strokeRect(minX, minY, handWidth, handHeight, width, height);
    }
    
  }, []);

  return (
    <>
    <div className="video-canvas-wrapper">
    <video ref={videoRef} autoPlay={true} className="video" />
    <canvas ref={canvasRef} className="canvas" />
    </div>
      <div>
        {predictions.length > 0 && predictions[0].handInViewConfidence > 0.5 ? (
          <div>
            <p>Hand detected!</p>
            <p>Hand position: {predictions[0].boundingBox.top} top, {predictions[0].boundingBox.left} left</p>
            {/* <p>Hand landmarks: {JSON.stringify(predictions[0].landmarks)}</p> */}
          </div>
        ) : (
          <p>No hand detected.</p>
        )}
      </div>
    </>
    
  );
}

export default Handtrack;
