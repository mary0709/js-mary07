let Xbola= 25;
let Ybola= 25;
let Dbolax= 50;
let VelXb=2;
let VelYb=2;

let Xsalada=575;
let Ysalada=25;
let Dsalada=50;
let VelXs=2;
let VelYs=2;

let Xtudo=25;
let Ytudo=375;
let Dtudo=50;
let VelXt=2;
let VelYt=2;

let Xbacon=575;
let Ybacon=375;
let Dbacon=50;
let VelXb2=2;
let VelYb2=2;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("red");
  circle(Xbola,Ybola,Dbolax)
  circle(Xsalada,Ysalada,Dsalada)
  circle(Xtudo,Ytudo,Dtudo)
  circle(Xbacon,Ybacon,Dbacon)
  fill("rgb(182,43,43)")
  
  Xbola+=VelXb;
  Ybola+=VelYb;
  if (Xbola>width||Xbola<0)
   {VelXb*=-1};
  if (Ybola>height||Ybola<0)
    {VelYb*=-1};
    
  
  Xsalada-=VelXs;
  Ysalada+=VelYs;
  if (Xsalada>width||Xsalada<0)
    {VelXs*=-1};
  if (Ysalada>height||Ysalada<0)
    {VelYs*=-1};
  
  
  Xtudo+=VelXt;
  Ytudo-=VelYt;
  if (Xtudo>width||Xtudo<0)
    {VelXt*=-1};
  if (Ytudo>height||Ytudo<0)
  {VelYt*=-1};
  
  
  
  Xbacon-=VelXb2;
  Ybacon-=VelYb2;
  if (Xbacon>width||Xbacon<0)
    {VelXb2*=-1};
  if (Ybacon>height||Ybacon<0)
    {VelYb2*=-1}
}

