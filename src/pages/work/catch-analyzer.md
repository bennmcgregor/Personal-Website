---
title: "Catch Posture Analyzer"
image: "work/catch-analyzer.jpg"
description: "A machine learning app for analyzing posture while rowing"
---

_Catch Posture Analyzer_
&nbsp;  
&nbsp;  
&nbsp;  

<video autoplay="autoplay" loop>
  <source src="../../assets/work/catch-analyzer-labels.mp4" type="video/mp4"/>
  <source src="../../assets/work/catch-analyzer-labels.webm" type="video/webm"/>
  Your browser does not support the video tag.
</video>
<div><i>The application's labelling of my rowing</i></div>
</div>  
&nbsp;  
&nbsp;  
&nbsp;  

A [machine learning application developed on Google Colab](https://colab.research.google.com/drive/1ULC7FAizUZT4mYWlnpTU27xF79OEBDNm?usp=sharing) with Keras and TensorFlow for analyzing streamed video of a rower's posture at the catch on an ergometer. The application uses a pipeline of three machine learning models—a pose estimator, a multilayer perceptron, and an image classification CNN—to give a binary classification ("Good" or "Bad" posture) to individual frames of data, which are then passed to the rower in real time.

Check out the [Google Colab demo document](https://colab.research.google.com/drive/1ULC7FAizUZT4mYWlnpTU27xF79OEBDNm?usp=sharing) for a detailed description of the app and a report on my development process.
&nbsp;  
&nbsp;  
&nbsp;  

<video autoplay="autoplay" loop>
  <source src="../../assets/work/catch-analyzer-pose.mp4" type="video/mp4"/>
  <source src="../../assets/work/catch-analyzer-pose.webm" type="video/webm"/>
  Your browser does not support the video tag.
</video>
<div><i>A visualization of the pose data used to identify the catch position</i></div>
</div>  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
<div>    </div>
