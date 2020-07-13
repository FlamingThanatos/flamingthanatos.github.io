//###||####|      |####||####| A script that generates a maze, then solves that maze... and is written to look like a maze. (c) Andrew Woo, 2020 |####||####||####||####||####||###\\
let c; let r      ; let w=20; let g=[]; let t; let s; let f; let h=[]; let dn=[]; let dnq=[]; let l=[]; let gen=0x1; let slv=0x0; let cn=0; function setup() { let cv = createCanvas(
660,660); cv                        .parent("p5jscanvas"); c = floor(width / w); r = floor(height / w)                        ; for(y = 0; y < r; y++)                  { for (x = 0; 
x < c; x++){                        g.push(new Node(x, y)); } } t = g[floor(random(0, g.length))]; s =                        t; f = g[floor(random(0,                  g.length))];}
function draw( ) {      background(218, 165, 32); if (gen) {      t.hl() ; t.v = 0x1; let nt = t.gn();      if(nt){ nt.v      =0x1; h.push(t); t = nt;      } else if (h.length > 0){
t=h.pop();} else {      gen = 0x0; t = s; l.push(t); }} else      { if (cn < g.length) { let dead = g[      cn].fde();if      (dead) { dn.push(dead) ;      dnq.push(dead); }} if (cn
> g.length )                                                      { if (dnq.length > 0) { let ck = dnq      .shift(); dn                                    .push(ck);let tN=g[index(
ck.i, ck.j -                                                      1)]; let rN = g[index(ck.i + 1, ck.j      )]; let bN =                                    g[index(ck.i, ck.j + 1)];
let lN = g [      index(ck.i - 1, ck.j)]; if(tN) { let      tD = tN.fde(); if(                  tD ) {      dnq.push(tD); } } if(rN) { let      rD=rN.fde();if(rD){dnq .      push(rD
);}} if (bN)      { let bD = bN.fde( ); if (bD) { dnq.      push(bD); } } if (                  lN ) {      let lD = lN.fde(); if(lD){ dnq      .push(lD) ; } } } else {      slv=0x1
; let tN = g      [ index(t.i, t.j - 1) ];      let rN      = g[index(t.i+1, t      .j) ];      let bN      = g[index(t.i, t.j+1)]; let lN      =g[index(t.i-1,t.j)]; if      ( tN &&
!dn.includes      (tN)&&!l.includes(tN)&&(      t.vt ^      0x1111)==0x1000){t      =tN; l      .push(      t);}else if(rN && !dn.includes      (rN)&&!l.includes(rN) &&      (t.vt ^
0x1111 )  ==      0x0100) { t = rN; l.push      (t); }                              else if (bN && !dn      .includes(bN) && !                  l.includes(bN) && (t.vt^      0x1111)
== 0x0010) {      t = bN; l.push(t);} else      if (lN                              && !dn.includes(lN      )&&!l.includes(lN)                  && (t.vt^0x1111)==0x0001      ) { t =
lN; l.                                          push(t); } else if      ((t.vt^0x1111)==0x1100) { if (      tN && !dn.includes      (tN) && !l.includes(tN))                  {t=tN;l
.push(                                          t);} else if(rN &&      !dn.includes(rN)&&!l.includes(      rN) ) { t = rN; l.      push(t);}}else if((t.vt^                  0x1111) 
== 0x1001) { if (tN && !      dn.includes(tN) && !l.includes( tN )      ){ t =                              tN;l.push(t);}else      if ( lN && !dn.includes(lN) &&      ! l.includes(
lN)) { t = lN; l.push(t)      ;}}else if((t.vt ^ 0x1111) == 0x0110      ) { if                              (rN&&!dn.includes(      rN) && !l.includes(rN)){ t= rN      ; l.push(t) ;
} else                        if ( bN && !dn.includes (bN) && ! l.      includes(bN)) { t=      bN; l.push(t); } } else if ((t                                          .vt^0x1111)==
0x0011                        ) { if (bN && !dn.includes(bN) && !l      .includes(bN)) { t      =bN; l.push(t);} else if(lN &&                                          !dn.includes(
lN) && !l.includes(lN)) { t = lN; l.push(t); } } else if ( (t.vt ^                              0x1111) == 0x1010)      { if(tN && !dn.includes(tN) &&      !l.includes(tN)) {      t
= tN; l.push(t); } else if (bN && !dn.includes(bN) && !l.includes(                              bN )) { t = bN; l.      push(t); } } else if (( t.vt ^      0x1111 ) == 0x0101      )
{ if (rN && !dn.includes(rN) && !l.includes(rN)) { t = rN; l.push(      t); } else if (lN && !dn.includes(lN) && !                                          l.includes(lN) ) {      t
=lN; l.push(t);}}}} cn++;} push(); stroke(148,0,211); strokeWeight      (w/10); if(slv) { for (z = 0; z < l.length                                          ; z++) { let x = l      [
z].i *      w; let y = l      [z].j * w; if ((l[z].vt ^ 0x1111) ==      0x1000) { line(x+w/2, y, x+w/2, y+w/2) ; }      else if ((l[z].vt ^ 0x1111) == 0x0100) { line(x+w/2, y      +
w / 2,      x + w, y + w      /2);} else if ((l[z].vt ^ 0x1111) ==      0x0010) { line(x+w/2, y+w/2, x+w/2, y+w);}      else if ((l[z].vt ^ 0x1111) == 0x0001) { line(x+w/2, y      +
w / 2,      x, y + w / 2      ) ; } else if ((l[z].vt ^ 0x1111) ==      0x1100                        ) { line(x+w      /2, y, x+w, y+w/2);}else if((l[z].vt^0x1111) == 0x1001      )
{ line      (x+w/2, y, x      ,y+w/2);}else if((l[z].vt^0x1111) ==      0x0110                        ){line(x+w/2      , y+w, x+w, y+w/2);}else if((l[z].vt^0x1111) == 0x0011      )
{ line                        (x, y + w/2, x + w/2, y + w); } else      if((l[      z].vt^0x1111      ) == 0x1010)      { line(x + w/2, y, x + w/2, y + w);} else if ((l[z].vt      ^
0x1111                        )==0x0101) {line(x,y+w/2,x+w,y+w/2)}      }} pop      ();for(x=0;x      < dn. length      ; x++) {dn[x].sd();} for(x = 0; x < g.length; x++){ g[      x
].r();      } noStroke()      ; fill(255, 0, 0); rect((f.i*w)+w/4,      (f.j *      w)+w/4, w/2,      w / 2); fill                                                                  (
0, 255      ,0); rect((s      .i * w) + w/4, (s.j * w) + w/4, w/2,      w / 2)      ; } function      index(i , j)                                                                  {
if ( i      < 0 || j < 0                                                || i >      c - 1 || j >      r-1) { return -1; } return i+j*c ; }      class Node { constructor(i, j) { this
.i = i      ; this.j = j                                                ; this      .v=0x0; this      .w = 0x1111; this.vt = this.w; }; r(      ){ stroke(255); let x  =this.i*w; let
y=this      .j * w; if (this.w & 0x1000) { line(      x, y, x+w, y);} if (this      .w & 0x0100)                                                { line(x + w      , y, x + w, y + w); 
} if (      this.w & 0x0010) { line(x+w, y+w, x,      y+w);}if(this.w & 0x0001      ) {line(x, y                                                + w, x, y );      } }; sd() { let x = 
this.i      *w;let y=this.j*w;fill(51);noStroke(      ); rect(x, y, w, w); } ;      hl() { let x      = this.i*w; let y = this.j*w; noStroke(); fill(0, 255,      255); rect(x + w/4,
y+w/4,      w / 2, w / 2); }; gn() { let tN = g[      index(this.i, this.j - 1      )]; let rN =      g[index(this.i + 1, this.j)]; let bN = g[index(this.i,      this.j+1)];let lN=g
[index                                                (this.i-1, this.j)]; let      nb = []; if(      tN && !tN.v) {nb.push(tN);} if(rN && !rN.v) { nb.push(      rN);} if (bN && !bN
.v){nb                                                .push(bN);} if(lN && !lN      .v){nb.push(      lN);} if(nb.length > 0) { let nt = nb[floor(random( 0,      nb.length))]; if(nt
=== tN) { this.w =      this.w & 0x0111; this.vt = this.w; tN.w=tN.w & 0x1101;      tN.vt = tN.w                                                                  ;} if (nt === rN) {
this.w  = this.w &      0x1011; this.vt = this.w; rN.w = rN.w & 0x1110;  rN.vt      = rN.w; } if                                                                  (nt === bN) {this.w
= this.w & 0x1101;      this.vt =  this.w; bN.w = bN.w & 0x0111 ; bN.vt = bN.w      ; } if (nt === lN){ this.w=this.w & 0x1110      ; this.vt = this.w; lN.w = lN.w & 0x1011; lN.vt = 
lN.w; } return nt;      } else { return undefined; }}; fde() { let tN=g[index(      this.i, this.j-1)]; let rN = g[index(this.      i+1, this.j)]; let bN = g[index(this.i, this.j+1)
]; let                                                lN = g[index(this.i - 1,      this.j)]; if(this !== s && this !== f){ if      ((this.vt ^ 0x1111) == 0x1000){ if(tN){ this.vt =
0x1111                                                ; tN.vt = tN.vt | 0x0010      ;} return this;} else if((this.vt ^ 0x1111      ) == 0x0100) { if(rN) { this.vt = 0x1111; rN.vt =
rN.vt | 0x0001; } return this; } else if((this.vt ^ 0x1111) == 0x0010) { if(bN      ) {this.vt = 0x1111; bN.vt = bN.vt | 0x1000;} return this;} else if((this.vt ^ 0x1111) == 0x0001)
{ if (lN) { this.vt = 0x1111;  lN.vt = lN.vt | 0x0100; } return this; } else {      return undefined;}} else {return undefined;}}} /*PLACE-HOLDER-FOR-BUGS*//*PLACE-HOLDER-FOR-BUGS*/
//###||####||####||####||####||####||####||####||####||####||####||####||####|      |####||####||####||####||####||####||####||####||####||####||####||####||####||####||####||####\\