var width = window.innerWidth;
var height = window.innerHeight;
var paper = Raphael("canvas", width, height);

var DRAW = {

  nodes : {},

  nodeSPosition : 2,

  shokunin : function(){
    this.nodes.shokunin = paper.text(width / 2, height / 2 - 100, "Shokunin").attr({"font-size" : 50}).hover(function(){
      DRAW.nodes.centerNodeCircle.attr({"stroke" : "teal"});
      DRAW.nodes.centerNodeText.attr({"stroke" : "teal"});
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
      DRAW.nodes.centerNodeCircle.attr({"stroke" : "black"});
      DRAW.nodes.centerNodeText.attr({"stroke" : "black"});
    }).click(function(){
      DRAW.centerNodeEvent();
    });

    this.nodes.shokuninSub = paper.text(width / 2, height / 2 - 60, "Code crafters").attr({"font-size" : 30}).hover(function(){
      DRAW.nodes.centerNodeCircle.attr({"stroke" : "teal"});
      DRAW.nodes.centerNodeText.attr({"stroke" : "teal"});
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
      DRAW.nodes.centerNodeCircle.attr({"stroke" : "black"});
      DRAW.nodes.centerNodeText.attr({"stroke" : "black"});
    }).click(function(){
      DRAW.centerNodeEvent();
    });
  },

  centerNode : function(){
    this.nodes.centerNodeCircle = paper.circle(width / 2, height / 2, 20).attr({"fill" : "white"});
    this.nodes.centerNodeText = paper.text(width / 2, height / 2, "S").attr({"font-size" : 30});

    var st = paper.set().push(this.nodes.centerNodeText, this.nodes.centerNodeCircle).hover(function(){
      DRAW.nodes.centerNodeCircle.attr({"stroke" : "teal"});
      DRAW.nodes.centerNodeText.attr({"stroke" : "teal"});
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
      DRAW.nodes.centerNodeCircle.attr({"stroke" : "black"});
      DRAW.nodes.centerNodeText.attr({"stroke" : "black"});
    }).click(function(){
      DRAW.centerNodeEvent();
    });
  },

  centerNodeEvent : function(){
    var animShokunin = Raphael.animation({x: width / 2, y: 40}, 200, "linear");
    this.nodes.shokunin.animate(animShokunin);

    var animShokuninSub = Raphael.animation({x: width / 2, y: 80}, 200, "linear");
    this.nodes.shokuninSub.animate(animShokuninSub);

    var animCenterNodeCircle = Raphael.animation({cx: width / 2, cy: 140}, 200, "linear");
    this.nodes.centerNodeCircle.animate(animCenterNodeCircle);

    var animCenterNodeText = Raphael.animation({x: width / 2, y: 140}, 200, "linear", this.firstLineNodes);
    this.nodes.centerNodeText.animate(animCenterNodeText);

  },

  firstLineNodes : function(){
    var boxes = [];

    var anim = Raphael.animation({opacity : "1"}, 200, "linear");
    var anim2 = Raphael.animation({opacity : "1"}, 200, "linear", DRAW.lastLineNodes);

    DRAW.nodes.philosophy = paper.text(width / 2, 200, "Philosophy").attr({"font-size" : 30, "opacity" : 0}).click(DRAW.philosophyClick).hover(function(){
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
    });

    boxes.push(DRAW.nodes.philosophy.getBBox());
    DRAW.nodes.philosophyBorder = paper.rect(boxes[0].x, boxes[0].y - 5, boxes[0].width, 1).attr({"stroke" : "lightgrey"});

    DRAW.nodes.members = paper.text(width / 4, 200, "Members").attr({"font-size" : 30, "opacity" : 0}).click(DRAW.membersClick).hover(function(){
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
    });

    boxes.push(DRAW.nodes.members.getBBox());
    DRAW.nodes.membersBorder = paper.rect(boxes[1].x, boxes[1].y - 5, boxes[1].width, 1).attr({"stroke" : "lightgrey"});

    DRAW.nodes.projects = paper.text(3 * width / 4, 200, "Projects").attr({"font-size" : 30, "opacity" : 0}).click(DRAW.projectsClick).hover(function(){
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
    });

    boxes.push(DRAW.nodes.projects.getBBox());
    DRAW.nodes.projectsBorder = paper.rect(boxes[2].x, boxes[2].y - 5, boxes[2].width, 1).attr({"stroke" : "lightgrey"});

    DRAW.nodes.philosophy.animate(anim);
    DRAW.nodes.philosophyBorder.animate(anim);

    DRAW.nodes.members.animate(anim);
    DRAW.nodes.membersBorder.animate(anim);

    DRAW.nodes.projects.animate(anim);
    DRAW.nodes.projectsBorder.animate(anim2);
  },

  lastLineNodes : function(top){
    var top = 200,
        newHeight = height - top;

    DRAW.nodes.frankPic = paper.image("img/profile-fb.png", width / 4 - 40, top + newHeight /4 - 20, 80, 80).attr({"opacity" : 0}).hover(function(){
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
    }).click(function(){
      DRAW.frankClick();
    });

    DRAW.nodes.mohamedPic = paper.image("img/profile-mm.png", width / 4 - 40, top + 2 * newHeight /4 - 20, 80, 80).attr({"opacity" : 0}).hover(function(){
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
    }).click(function(){
      DRAW.mohamedClick();
    });

    DRAW.nodes.juliePic = paper.image("img/profile-jh.png", width / 4 - 40, top + 3 * newHeight /4 - 20, 80, 80).attr({"opacity" : 0}).hover(function(){
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
    }).click(function(){
      DRAW.julieClick();
    });

    DRAW.nodes.spreadPic = paper.image("img/logo-spread.png", 3 * width / 4 - 40,  top + newHeight /3 - 40, 80, 80).attr({ "opacity" : 0}).hover(function(){
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
    }).click(function(){
      DRAW.spreadClick();
    });

    DRAW.nodes.spurPic = paper.image("img/spur.png", 3 * width / 4 - 40, top + 2 * newHeight /3 - 40, 80, 80).attr({"opacity" : 0}).hover(function(){
      document.body.style.cursor = "pointer";
    }, function(){
      document.body.style.cursor = "default";
    }).click(function(){
      DRAW.spurClick();
    });

    var texts = {
      title1 : "What ?",
      description : "Shokunin is a small team made of tech enthousiasts. \n It's tiny, active & performant",
      title2 : "Why ?",
      motivation : "Every one of us believe in individual invitiative, \n team spirit, creativity and sustainable code."
    }

    var title1 = paper.text(width / 3, top + newHeight /6, texts.title1).attr({"font-size" : 30, "text-anchor" : "start", "opacity" : 0, "font-weight": "bold"});
    var description = paper.text(width / 3, top + 2 * newHeight /6, texts.description).attr({"font-size" : 20, "text-anchor" : "start", "opacity" : 0});
    var title2 = paper.text(width / 3, top + 3 * newHeight /6, texts.title2).attr({"font-size" : 30, "text-anchor" : "start", "opacity" : 0, "font-weight": "bold"});
    var motivation = paper.text(width / 3, top + 4 * newHeight /6, texts.motivation).attr({"font-size" : 20, "text-anchor" : "start", "opacity" : 0});
    DRAW.nodes.philosophySet = paper.set().push(title1, description, title2, motivation);

  },

  philosophyClick : function(){
    var show = Raphael.animation({opacity : "1"}, 200, "linear");
    var hide = Raphael.animation({opacity : "0"}, 200, "linear");
    var toTeal = Raphael.animation({"stroke" : "teal"}, 200, "linear");
    var toGrey = Raphael.animation({"stroke" : "lightgrey"}, 200, "linear");
    var placeNodeSText = Raphael.animation({"x" : 2 * width/4}, 200, "linear");
    var placeNodeSCircle = Raphael.animation({"cx" : 2 * width/4}, 200, "linear");

    DRAW.nodes.philosophySet.animate(show);
    DRAW.nodes.philosophyBorder.animate(toTeal);

    DRAW.nodes.frankPic.animate(hide);
    DRAW.nodes.mohamedPic.animate(hide);
    DRAW.nodes.juliePic.animate(hide);
    DRAW.nodes.membersBorder.animate(toGrey);

    DRAW.nodes.spurPic.animate(hide);
    DRAW.nodes.spreadPic.animate(hide);
    DRAW.nodes.projectsBorder.animate(toGrey);

    DRAW.nodeSPosition = 2;
    DRAW.nodes.centerNodeCircle.animate(placeNodeSCircle);
    DRAW.nodes.centerNodeText.animate(placeNodeSText);

  },

  membersClick : function(){
    var show = Raphael.animation({opacity : "1"}, 200, "linear");
    var hide = Raphael.animation({opacity : "0"}, 200, "linear");
    var toTeal = Raphael.animation({"stroke" : "teal"}, 200, "linear");
    var toGrey = Raphael.animation({"stroke" : "lightgrey"}, 200, "lightgrey");

    DRAW.nodes.philosophySet.animate(hide);
    DRAW.nodes.philosophyBorder.animate(toGrey);

    DRAW.nodes.frankPic.animate(show);
    DRAW.nodes.mohamedPic.animate(show);
    DRAW.nodes.juliePic.animate(show);
    DRAW.nodes.membersBorder.animate(toTeal);

    DRAW.nodes.spurPic.animate(hide);
    DRAW.nodes.spreadPic.animate(hide);
    DRAW.nodes.projectsBorder.animate(toGrey);

    var time = DRAW.nodeSPosition === 3 ? 400 : 200;
    DRAW.nodeSPosition = 1;
    var placeNodeSText = Raphael.animation({"x" : width/4}, time, "linear");
    var placeNodeSCircle = Raphael.animation({"cx" : width/4}, time, "linear");
    DRAW.nodes.centerNodeCircle.animate(placeNodeSCircle);
    DRAW.nodes.centerNodeText.animate(placeNodeSText);

  },

  projectsClick : function(){
    var show = Raphael.animation({opacity : "1"}, 200, "linear");
    var hide = Raphael.animation({opacity : "0"}, 200, "linear");
    var toTeal = Raphael.animation({"stroke" : "teal"}, 200, "linear");
    var toGrey = Raphael.animation({"stroke" : "lightgrey"}, 200, "linear");

    DRAW.nodes.philosophySet.animate(hide);
    DRAW.nodes.philosophyBorder.animate(toGrey);

    DRAW.nodes.frankPic.animate(hide);
    DRAW.nodes.mohamedPic.animate(hide);
    DRAW.nodes.juliePic.animate(hide);
    DRAW.nodes.membersBorder.animate(toGrey);

    DRAW.nodes.spurPic.animate(show);
    DRAW.nodes.spreadPic.animate(show);
    DRAW.nodes.projectsBorder.animate(toTeal);

    var time = DRAW.nodeSPosition === 1 ? 400 : 200;
    DRAW.nodeSPosition = 3;
    var placeNodeSText = Raphael.animation({"x" : 3 * width/4}, time, "linear");
    var placeNodeSCircle = Raphael.animation({"cx" : 3 * width/4}, time, "linear");
    DRAW.nodes.centerNodeCircle.animate(placeNodeSCircle);
    DRAW.nodes.centerNodeText.animate(placeNodeSText);
  },

  spreadClick : function(){
    $("#show-spread")[0].click();
  },

   spurClick : function(){
    $("#show-spur")[0].click();
  },

  frankClick : function(){
    $("#show-frank")[0].click();
  },

  mohamedClick : function(){
    $("#show-mohamed")[0].click();
  },

  julieClick : function(){
    $("#show-julie")[0].click();
  }

}

DRAW.shokunin();
DRAW.centerNode();
