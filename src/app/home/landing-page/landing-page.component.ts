import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fabric } from "fabric";


import { SessionManagerService } from 'src/app/Shared-General/services/session-manager.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  color='black'
  canvas:any
  constructor(public router: Router,
    public SessionManagerServiceObj: SessionManagerService) {

    }

     currentModes
     modes = {
      pan:'pan',
      drawing:'drawing'
    }

  ngOnInit() {
    let mousePressed=false
    this.currentModes

    this.currentModes = this.modes.pan
   let test = new fabric.Canvas('canvas',{
      selection:false,
      width:900 ,
      height:750,
      backgroundColor:'#002929'
    });
    this.canvas=test
    // admin.initializeApp(this.firebaseConfig);

  //  let img=fabric.Image.fromURL('https://5.imimg.com/data5/UJ/EL/MY-2201238/wooden-chalk-board-500x500.jpg',(img=>{
  //   canvas.backgroundImage = img
  //   canvas.renderAll()
  //  }))
this.canvas.renderAll()
   this.canvas.on('mouse:move',(event)=>{
     if(mousePressed && this.currentModes==this.modes.pan) {
      this.canvas.setCursor('grab')
      this.canvas.renderAll()
      const mEvent=event.e
      const delta = new fabric.Point(mEvent.movementX,mEvent.movementY);
      this.canvas.relativePan(delta)
     } else  if(mousePressed && this.currentModes==this.modes.drawing) {
      this.canvas.freeDrawingBrush.color = this.color
      this.canvas.freeDrawingBrush.width = 15
      this.canvas.isDrawingMode =true
      this.canvas.renderAll()
     }

   })




   this.canvas.on('mouse:down',(event)=>{
 mousePressed=true
 this.canvas.setCursor('grab')
 this.canvas.renderAll()
  })

  this.canvas.on('mouse:up',(event)=>{
    mousePressed=false
    this.canvas.setCursor('default')
    this.canvas.renderAll()
   })



  }

  clearCanvas() {
    this.canvas.getObjects().forEach(element => {

      if(element !==this.canvas.backgroundImage) {
        this.canvas.remove(element)
      }
    });
  }

  toggleMode() {
    if(this.currentModes=='pan') {

      this.currentModes = this.modes.drawing
    } else {

    this.currentModes = this.modes.pan
    }
  }

  createRectangle() {
    let rectangle = new fabric.Rect({
      width:100,
      height:100,
      fill:'green'
    })
    this.canvas.add(rectangle)
    this.canvas.renderAll()

  }

  createCircle() {
    let canvCenter = this.canvas.getCenter()
    const circle = new fabric.Circle({
      radius:50,
      fill:'orange',
      left:canvCenter.left,
      top:canvCenter.top,
      originX:'center',
      originY:'center',
      cornerColor:'white'
    })

  }





  text:{
    left:200,
    right:200,
    fontFamily:"Comic Sans",
    fontWeight:"normal",
    overline: false,
    underline; false,
    fontStyle: 'normal',
    textAlign: 'center',
    textBackgroundColor:'rgb(255,255,255)'
  }
  textValue='Pencil Drawing Canvas'
  isText = false


}
