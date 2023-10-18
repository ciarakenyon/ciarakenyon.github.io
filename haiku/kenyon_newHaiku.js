(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kenyon_newHaiku_atlas_1", frames: [[0,0,2005,1326]]},
		{name:"kenyon_newHaiku_atlas_2", frames: [[0,0,1188,1025],[0,1027,1220,246]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["kenyon_newHaiku_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["kenyon_newHaiku_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["kenyon_newHaiku_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yellowleafmoving = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ABQA9QAAg9Acg5QAUgnAqg0AgTiyQAAgkAsgxQAqguArgTAA8AfQASA4AUBIQAgByAQBLQABAHACAHQABAEAAADQAAgCgBgEQAAAAAAgBAi9lwQBBAYBHByQA4BeAlBsQAKAbAKAgIjRAAACMDxQAGgcAxgvQBAhAABgBAgdioIiMAAQgLAFgeAFQgjAFgOAFIAAAKABuDxIiLAA");
	this.shape.setTransform(-0.55,4.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AD0pWIAAAKQABAnAEBlQAFBzAABBQAOgQBJg+QBOhDAPgPQA0C8ATBJQAdB3AABeQAADChYCGQhSB+iNAvQiNAvifgsQiogtiWiIQAaABBHgUQBIgVABAAQgyguhjgcQhjgcgogkIgBgFQgDgFgGAAQA4gUAXgKQAngQAAgYQAAghg4g7Qg0g0gUgFIAAgKQBlAeA9hfQAuhJAAhXQAAh/hIizQglhcg/iGQBBA2AdAXQA2AsA2AkIAUAAQACgiAMgWQAIgPAcgxQAuDWAiA1QAvBJB/AAQAgAABRhDQAzgqAzgzAGKHVQAAATAPBRQAPBRAAAYQAAATgTA5QgUA4gLANAnxslQgDgGgDgHIgKAAQAIAHAIAGg");
	this.shape_1.setTransform(0.025,0.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2C60A").s().p("AhNKcQioguiWiHQAaAABHgUIBJgUQgyguhjgcQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g1gUgFIAAgKQBlAeA9heQAuhJAAhXQAAh/hIizQglhbg/iGIBeBNQA2AsA2AjIAUAAQACghAMgXIAkhAQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzQABAoAEBkQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB1AABfQAADChYCGQhSB+iNAvQhJAYhOAAQhIAAhNgUgAA2C8QASA4AUBIQAgBzAQBLIADAOIABAHIgBgGIAAgBIAAABIABAGIgBgHIgDgOQgQhLgghzQgUhIgSg4IgUg8Qgkhsg5hcQhHhyhBgZQBBAZBHByQA5BcAkBsIAUA8IjRAAgAC9FDQgxAvgGAcQAGgcAxgvIBBhBIhBBBgABoGOIiLAAgABmBkQgcA5AAA9QAAg9Acg5QAUgoAqg0QgqA0gUAogAjYgBQgjAFgOAEIAAAKIAAgKQAOgEAjgFQAfgEAKgGICMAAIiMAAQgKAGgfAEgAgZgVIAAgBQAAgjAsgxQAqguArgTQgrATgqAuQgsAxAAAjIAAABg");
	this.shape_2.setTransform(0.025,-11.2046);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowleafmoving, new cjs.Rectangle(-58.4,-86.4,116.9,173.9), null);


(lib.yellowleaffalling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AgTiyQAAgkAsgxQAqguArgTABQA9QAAg9Acg5QAUgnAqg0AgdioIiMAAQgLAFgeAFQgjAFgOAFIAAAKAi9lwQBBAYBHByQA4BeAlBsQAKAbAKAgQASA4AUBIQAgByAQBLQABAHACAHQABAEAAADQAAgCgBgEQAAAAAAgBACMDxQAGgcAxgvQBAhAABgBAA8AfIjRAAABuDxIiLAA");
	this.shape.setTransform(-0.55,3.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AD0pcIAAAKAnxsqQBBA2AdAXQAgAaAgAXQAWAQAWAOIAUAAQACghAMgXQAIgOAcgyQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzQABAoAEBkQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB2AABeQAADChYCGQhSB+iNAvQiNAvifgrQiJglh9hhQgcgWgcgZQARAAAngJQASgEAXgHQBIgUABAAQgpgmhJgZQgRgGgSgFQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g0gUgFIAAgKQBlAeA9heQAUghAMgjQAOgsAAgxQAAg5gOhDQgShTgohjQglhbg/iGgAn0stQACABABACAGKHQQAAATAPBRQAPBRAAAYQAAATgTA4QgUA4gLAO");
	this.shape_1.setTransform(0.025,0.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("AhNKcQiJglh9hhQgcgWgcgZQARAAAngJIApgLIBJgUQgpgmhJgZQgRgGgSgFQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g1gUgFIAAgKQBlAeA9heQAUggAMgjQAOgsAAgxQAAg5gOhDQgShTgohjQglhbg/iGIBeBNQAgAaAgAXQAWAQAWAOIAUAAQACghAMgXIAkhAQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzQABAoAEBkQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB1AABfQAADChYCGQhSB+iNAvQhJAYhOAAQhIAAhNgUgACQIPIgBgGIAAgBIgDgOQgQhLgghzQgUhIgSg4IgUg8Qgkhsg5hcQhHhyhBgZQBBAZBHByQA5BcAkBsIAUA8QASA4AUBIQAgBzAQBLIADAOIABAHIAAAAgAC9FDQgxAvgGAcQAGgcAxgvIBBhBIhBBBgABoGOIiLAAgABmBkQgcA5AAA9QAAg9Acg5QAUgoAqg0QgqA0gUAogAA2C8IjRAAgAjYgBQgjAFgOAEIAAAKIAAgKQAOgEAjgFQAfgEAKgGICMAAIiMAAQgKAGgfAEgAgZgVIAAgBQAAgjAsgxQAqguArgTQgrATgqAuQgsAxAAAjIAAABgACPIIIAAABIABAGIgBgHgACPIIIAAAAg");
	this.shape_2.setTransform(0.025,-11.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowleaffalling, new cjs.Rectangle(-58.4,-85.8,116.9,172.7), null);


(lib.tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("EgWGAqAQjoCtlfCEQjeBUmFBvIgUAAQBhAXBkAlQBpAoAwASQCmA+CaAAQDdAAH/haQATgEFAg6QCagcAZAAQDaAAFCG/QBXB5B/DNQBpCnAUAUQCUoGA4ivQC9pLBNAAQCtAAEkBQQCzAyBHAQQCYAlCNARIPAAAQAAgFACgFQAFgKANAAQgYhjhchLQhDg2iQhEQjXhkgrgYQiYhShnhiQj4jth0iGQimjChajBQgTgpg0kBQg1kIg2lGQiMtPAAlWQAAhkAol8QAol8AAkOQAAkMgfjaQgViVgwi5Qg3jagNhEQggimAAiyQAAiHAji6QAii0A6izQA7i5BEiBQBLiNBFgtQhMAZjNASQi8ARiXAAQirAAkqgeQkpgeihAAQkKAAlMAWQlOAXkCAjQAqAvBwDgQB4DwB0EWQE2LpAAFGQAACohVFnQhYFXgHAyQgIBEg3CaQg+CtgPBBQgVBihwCFQgBABhJBTQghAkAAAJQAABHATBNQAIAjAhBpQA8C9AACjQAADagBBuQAADFABCEQALJdAvDIQAXBlAGA4QANB4AAEAQAABRABBkQgBBCgKAkQgLAlgkA1QgBAChfCHQgHAFgGAFIgiAAEgGsg5TQABAKABAKQAzIABNFhQAcCDAJBUQANB9AADXQAAA4gMFDQgPFzgNDSIgMgCQgPgFgNgNEgNkg4rQBTFRBJDBQAcBLA/B/QAhBEAKBRQAKBfAAESQAAIzhBFXQgaCHgqCCQgTA+g6CdQhmEYgqD9QhCGOAAKQQAADNAoILQAoIKAAECQAACrgWBhQgOBAgiA+QgkBCgMAqQgWBPAACLQAAA8gSAsQgKAaggBGAJjx7QgilVg3mdQgfjog4mSQhXqEAXjkEAALg4DQAAGlAyLaQAyLaAAF7ArEKyQAAkDgCh8QgEjPgOiTAkMxTQiOCFgOAOQg1A1gRAmQgPAkgBBCQACBkAABQQAADUA2BqQBNCWDRAgAhYxnIDbAAQCEBpBoCgQB8DBAACiQAACqiABhQgwAkhWAqQgyAYhsAzIAAgoAi8tjQAAAsgKBiQgKBhAAAVQAAFWEXhmAAftjQBUBMAfAzQAyBTgFBuAMDeeQAZCmA5B4QAwBlBSBYQAuAzB1BkQB2BmBBBGAlcBdQAAF/goELQgXCagEApQgNB1AACRQAAAZAUHGQAUHGAAAZQAAFAgEBEQgHBigxFEACXDVQAAD+gUGhQgKDRgKC7QAAF0AKBsQAIBdAiBHQA7B5AmB2QBOD0BdHNAioUeQAFCLgCC1QgCBlgCC+QgCFKArDtAI7FNQAACxAMGiQAOH1AOA9EgV5Ap2QgDAFgEAFIgGAA");
	this.shape.setTransform(-96.875,-35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A06811").s().p("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");
	this.shape_1.setTransform(-96.875,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(-364.7,-454.7,535.7,839.5), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AgdioIiMAAQgKAFgfAFQgjAFgOAFIAAAKAgTiyQAAgkAsgxQAqguArgTAi9lwQBBAYBHByQA4BeAlBsQAKAbAKAgIjRAAABQA9QAAg9Acg5QAUgnAqg0ACVFqQABAEAAADQAAgCgBgEQAAAAAAgBgACMDxQAGgcAxgvQBAhAABgBABuDxIiLAAAA8AfQASA4AUBIQAgByAQBLQABAHACAH");
	this.shape.setTransform(52.85,84.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AD0pSQABAoAEBkQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB2AABeQAADChYCGQhSB+iNAvQiNAvifgrQiJglh9hhQgcgWgcgZQARAAAngJQASgEAXgHQBIgUABAAQgpgmhJgZQgRgGgSgFQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g0gUgFIAAgKQBlAeA9heQAUghAMgjQAOgsAAgxQAAg5gOhDQgShTgohjQglhbg/iGQBBA2AdAXQAgAaAgAXQAWAQAWAOIAUAAQACghAMgXQAIgOAcgyQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzgAD0pcIAAAKAn0stQACABABACAGKHQQAAATAPBRQAPBRAAAYQAAATgTA4QgUA4gLAO");
	this.shape_1.setTransform(53.425,81.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F28605").s().p("AhNKcQiJglh9hhQgcgWgcgZQARAAAngJIApgLIBJgUQgpgmhJgZQgRgGgSgFQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g1gUgFIAAgKQBlAeA9heQAUggAMgjQAOgsAAgxQAAg5gOhDQgShTgohjQglhbg/iGIBeBNQAgAaAgAXQAWAQAWAOIAUAAQACghAMgXIAkhAQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzQABAoAEBkQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB1AABfQAADChYCGQhSB+iNAvQhJAYhOAAQhIAAhNgUgACQIPIgBgGIAAgBIABAHIAAAAgAA2C8QASA4AUBIQAgBzAQBLIADAOIgDgOQgQhLgghzQgUhIgSg4IgUg8Qgkhsg5hcQhHhyhBgZQBBAZBHByQA5BcAkBsIAUA8IjRAAgAC9FDQgxAvgGAcQAGgcAxgvIBBhBIhBBBgABoGOIiLAAgABmBkQgcA5AAA9QAAg9Acg5QAUgoAqg0QgqA0gUAogAjYgBQgjAFgOAEIAAAKIAAgKQAOgEAjgFQAfgEAKgGICMAAIiMAAQgKAGgfAEgAgZgVIAAgBQAAgjAsgxQAqguArgTQgrATgqAuQgsAxAAAjIAAABgACPIIIAAABIABAGIgBgHgACPIIIAAAAg");
	this.shape_2.setTransform(53.425,69.0954);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-5,-5,116.9,172.8), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AxolIQAYkZCSh5QAygoBCgYQBegiCAAAQA7AABMAiQALAFAMAGQBbAtAGAAQAngcAvgcQApgZAvgYQDJhpCpAAQBUAABzAeQCEAiAnAuQASAaAOASQAPASAMAKQAmAfBxAbQEUBBCnDUQBDBVAlBdQALAaAHAZQAPA2AAAtQAAAngPA5QgMApgUA1QguB5glAfQgBABiEBVQhgA+gBAgQgDCSgwBvQgtBqhKAvQhhA9iDAhQhpAahXAAQhvAAjbhwQhxg6iIhQQhGBQh+AuQh7AsiNAAQlBAAieksQg0hkgch6QgThWAAgyQg4AHgfheQgGgRgEgSQgNg3AAg5QAAgtANgoQAjhvCEhP");
	this.shape.setTransform(133.925,94.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7NFQhxg6iIhQQhGBQh+AuQh7AsiNAAQlBAAieksQg0hkgch6QgThWAAgyQg4AHgfheIgKgjQgNg3AAg5QAAgtANgoQAjhvCEhPIAegeQAYkZCSh5QAygoBCgYQBegiCAAAQA7AABMAiIAXALQBbAtAGAAQAngcAvgcQApgZAvgYQDJhpCpAAQBUAABzAeQCEAiAnAuQASAaAOASQAPASAMAKQAmAfBxAbQEUBBCnDUQBDBVAlBdQALAaAHAZQAPA2AAAtQAAAngPA5QgMApgUA1QguB5glAfIiFBWQhgA+gBAgQgDCSgwBvQgtBqhKAvQhhA9iDAhQhpAahXAAQhvAAjbhwg");
	this.shape_1.setTransform(133.925,94.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-5,-5,277.9,199.9), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AgdioIiMAAQgKAFgfAFQgjAFgOAFIAAAKAi9lwQBBAYBHByQA4BeAlBsQAKAbAKAgIjRAAABQA9QAAg9Acg5QAUgnAqg0AgTiyQAAgkAsgxQAqguArgTACMDxQAGgcAxgvQBAhAABgBABuDxIiLAAACVFqQABAEAAADQAAgCgBgEQAAAAAAgBgAA8AfQASA4AUBIQAgByAQBLQABAHACAH");
	this.shape.setTransform(52.85,85.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AD0pMQABAnAEBlQAFBzAABBQAOgQBJg+QBOhDAPgPQA0C8ATBJQAdB3AABeQAADChYCGQhSB+iNAvQiNAvifgsQiogtiWiIQAaABBHgUQBIgVABAAQgyguhjgcQhjgcgogkIgBgFQgDgFgGAAQA4gUAXgKQAngQAAgYQAAghg4g7Qg0g0gUgFIAAgKQBlAeA9hfQAuhJAAhXQAAh/hIizQglhcg/iGQBBA2AdAXQA2AsA2AkIAUAAQACgiAMgWQAIgPAcgxQAuDWAiA1QAvBJB/AAQAgAABRhDQAzgqAzgzgAD0pWIAAAKAnxslQgDgGgDgHIgKAAQAIAHAIAGgAGKHVQAAATAPBRQAPBRAAAYQAAATgTA5QgUA4gLAN");
	this.shape_1.setTransform(53.425,81.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F28605").s().p("AhNKcQioguiWiHQAaAABHgUIBJgUQgyguhjgcQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g1gUgFIAAgKQBlAeA9heQAuhJAAhXQAAh/hIizQglhbg/iGIBeBNQA2AsA2AjIAUAAQACghAMgXIAkhAQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzQABAoAEBkQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB1AABfQAADChYCGQhSB+iNAvQhJAYhOAAQhIAAhNgUgACQIPIgBgGIAAgBIABAHIAAAAgAA2C8QASA4AUBIQAgBzAQBLIADAOIgDgOQgQhLgghzQgUhIgSg4IgUg8Qgkhsg5hcQhHhyhBgZQBBAZBHByQA5BcAkBsIAUA8IjRAAgAC9FDQgxAvgGAcQAGgcAxgvIBBhBIhBBBgABoGOIiLAAgABmBkQgcA5AAA9QAAg9Acg5QAUgoAqg0QgqA0gUAogAjYgBQgjAFgOAEIAAAKIAAgKQAOgEAjgFQAfgEAKgGICMAAIiMAAQgKAGgfAEgAgZgVIAAgBQAAgjAsgxQAqguArgTQgrATgqAuQgsAxAAAjIAAABgACPIIIAAABIABAGIgBgHgACPIIIAAAAg");
	this.shape_2.setTransform(53.425,70.1954);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-5,-5,116.9,173.9), null);


(lib.redleafmoving = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ai9lwQBBAYBGByQA5BeAlBsQAJAbALAgIjRAAAgdioIiMAAQgKAFgfAFQgjAFgOAFIAAAKAgTiyQAAgkAsgxQAqguArgTABQA9QAAg9Acg5QAUgnAqg0ACMDxQAGgcAxgvQBAhAABgBAA8AfQARA4AVBIQAgByAPBLQACAHABAHQABAEABADQAAgCgBgEQAAAAgBgBABuDxIiLAA");
	this.shape.setTransform(-0.55,4.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AnxslQBBA2AdAXQA2AsA2AkIAUAAQACgiAMgWQAIgPAcgxQAuDWAiA1QAvBJB/AAQAgAABRhDQAzgqAzgzQABAnAEBlQAFBzAABBQAOgQBJg+QBOhDAPgPQA0C8ATBJQAdB3AABeQAADChYCGQhSB+iNAvQiNAvifgsQiogtiWiIQAaABBHgUQBIgVABAAQgyguhjgcQhjgcgogkIgBgFQgDgFgGAAQA4gUAXgKQAngQAAgYQAAghg4g7Qg0g0gUgFIAAgKQBlAeA9hfQAuhJAAhXQAAh/hIizQglhcg/iGQgDgGgDgHIgKAAQAIAHAIAGgAD0pWIAAAKAGKHVQAAATAPBRQAPBRAAAYQAAATgTA5QgUA4gLAN");
	this.shape_1.setTransform(0.025,0.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3300").s().p("AhNKcQioguiWiHQAaAABHgUIBJgUQgyguhjgcQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g1gUgFIAAgKQBlAeA9heQAuhJAAhXQAAh/hIizQglhbg/iGIBeBNQA2AsA2AjIAUAAQACghAMgXIAkhAQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzQABAnAEBlQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB1AABfQAADChYCGQhSB+iNAvQhJAYhOAAQhIAAhNgUgACQIPIgBgGIAAgCIABAIIAAAAgABcE8QAgBzAQBKIADAOIgDgOQgQhKgghzQgUhIgSg4QASA4AUBIgAC9FDQgxAvgGAcQAGgcAxgvIBBhBIhBBBgABoGOIiLAAgABmBkQgcA5AAA9QAAg9Acg5QAUgoAqg0QgqA0gUAogAA2C8IgUg8Qgkhsg5hcQhHhyhBgZQBBAZBHByQA5BcAkBsIAUA8IjRAAgAjYgBQgjAFgOAEIAAAKIAAgKQAOgEAjgFQAfgEAKgGICMAAIiMAAQgKAGgfAEgAgZgVIAAgBQAAgjAsgxQAqguArgTQgrATgqAuQgsAxAAAjIAAABgACPIHIAAACIABAGIgBgIgACPIHIAAAAg");
	this.shape_2.setTransform(0.025,-11.2046);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redleafmoving, new cjs.Rectangle(-58.4,-86.4,116.9,173.9), null);


(lib.redleaffalling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ai9lwQBBAYBGByQA5BeAlBsQAKAbAKAgQASA4AUBIQAgByAPBLQACAHACAHQABAEAAADQAAgCgBgEQAAAAAAgBAgTiyQAAgkAsgxQAqguArgTABQA9QAAg9Acg5QAUgnAqg0ACMDxQAGgcAxgvQBAhAABgBAgdioIiMAAQgKAFgfAFQgjAFgOAFIAAAKAA8AfIjRAAABuDxIiLAA");
	this.shape.setTransform(-0.55,3.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AD0pSQABAoAEBkQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB2AABeQAADChYCGQhSB+iNAvQiNAvifgrQiJglh9hhQgcgWgcgZQARAAAngJQASgEAXgHQBIgUABAAQgpgmhJgZQgRgGgSgFQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g0gUgFIAAgKQBlAeA9heQAUghAMgjQAOgsAAgxQAAg5gOhDQgShTgohjQglhbg/iGQBBA2AdAXQAgAaAgAXQAWAQAWAOIAUAAQACghAMgXQAIgOAcgyQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzgAD0pcIAAAKAn0stQACABABACAGKHQQAAATAPBRQAPBRAAAYQAAATgTA4QgUA4gLAO");
	this.shape_1.setTransform(0.025,0.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AhNKcQiJglh9hhQgcgWgcgZQARAAAngJIApgLIBJgUQgpgmhJgZQgRgGgSgFQhjgcgoglIgBgFQgDgFgGAAQA4gUAXgJQAngRAAgYQAAghg4g7Qg0g1gUgFIAAgKQBlAeA9heQAUggAMgjQAOgsAAgxQAAg5gOhDQgShTgohjQglhbg/iGIBeBNQAgAaAgAXQAWAQAWAOIAUAAQACghAMgXIAkhAQAuDXAiA1QAvBIB/AAQAgAABRhCQAzgrAzgzQABAoAEBkQAFBzAABBQAOgPBJg+QBOhDAPgQQA0C9ATBJQAdB1AABfQAADChYCGQhSB+iNAvQhJAYhOAAQhIAAhNgUgACQIPIgBgGIAAgBIABAHIAAAAgAA2C8QASA4AUBIQAgBzAQBLIADAOIgDgOQgQhLgghzQgUhIgSg4IjRAAgAC9FDQgxAvgGAcQAGgcAxgvIBBhBIhBBBgABoGOIiLAAgABmBkQgcA5AAA9QAAg9Acg5QAUgoAqg0QgqA0gUAogAg7hIQA5BcAkBsIAUA8IgUg8Qgkhsg5hcQhHhyhBgZQBBAZBHBygAjYgBQgjAFgOAEIAAAKIAAgKQAOgEAjgFQAfgEAKgGICMAAIiMAAQgKAGgfAEgAgZgVIAAgBQAAgjAsgxQAqguArgTQgrATgqAuQgsAxAAAjIAAABgACPIIIAAABIABAGIgBgHgACPIIIAAAAg");
	this.shape_2.setTransform(0.025,-11.7546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redleaffalling, new cjs.Rectangle(-58.4,-85.8,116.9,172.7), null);


(lib.littlecloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AFyopQAEACAAADQAAgLAAABQgCADgCACQgFAFgKAAQAIAAAHAAQDhAFBPCRQAyBbAADCQAAAJAWAcQAnAyAJANQBGBjAABdQAADPifBeQhmA7h3AAQhbAAgKgDQgSgGgzgzIgKAAQg2BRiAAiQhfAZiOAAQiZAAhVgyQg/gmghhIQgSgogYhDQgYgvgyAEQiTAMhTh3QhEhkAAiMQAAhrAuhAQA3hMBtAHApxk0QA+iRCdhWQCQhPCiAAQBDAABaAoQBUAmAXAgQAngdBXgNQBCgKAOAH");
	this.shape.setTransform(-29.425,-12.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlhI5Qg/gmghhIQgSgogYhDQgYgvgyAEQiTAMhTh3QhEhkAAiMQAAhrAuhAQA3hMBtAHIAcgeQA+iRCdhWQCQhPCiAAQBDAABaAoQBUAmAXAgQAngdBXgNIBQgDQgFAFgKAAIAPAAQDhAFBPCRQAyBbAADCQAAAJAWAcIAwA/QBGBjAABdQAADPifBeQhmA7h3AAQhbAAgKgDQgSgGgzgzIgKAAQg2BRiAAiQhfAZiOAAQiZAAhVgyg");
	this.shape_1.setTransform(-29.425,-12.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.littlecloud, new cjs.Rectangle(-120.8,-79.8,182.8,133.8), null);


(lib.leafpile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-188.9,-150.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leafpile, new cjs.Rectangle(-188.9,-150.8,594,512.5), null);


(lib.circlebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AGuAAQAACyh+B+Qh+B+iyAAQixAAh+h+QhMhMgeheQgUg/AAhHQAAhGAUg/QAeheBMhMQB+h+CxAAQCyAAB+B+QB+B+AACxg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AkvEwQhMhMgehfQgUg+AAhHQAAhGAUg+QAehfBMhMQB+h+CxAAQCyAAB+B+QB+B+AACxQAACyh+B+Qh+B+iyAAQixAAh+h+g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("AkvEwQhMhMgehfQgUg+AAhHQAAhGAUg+QAehfBMhMQB+h+CxAAQCyAAB+B+QB+B+AACxQAACyh+B+Qh+B+iyAAQixAAh+h+g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(10,1,1).p("AIRAAQAADXibCZQibCYjbAAQjaAAibiYQhdhcglhyQgZhMAAhWQAAhVAZhMQAlhyBdhcQCbiYDaAAQDbAACbCYQCbCZAADWg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("Al1FvQhdhbglhzQgZhLABhWQgBhVAZhLQAlhzBdhbQCbiZDaABQDbgBCaCZQCbCYAADWQAADXibCYQiaCZjbgBQjaABibiZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{y:0}},{t:this.shape,p:{y:0}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{y:0}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_1,p:{y:0.5}},{t:this.shape,p:{y:0.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.8,-56.9,115.69999999999999,113.9);


(lib.orangeleavemoving = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// yellow
	this.instance = new lib.yellowleafmoving();
	this.instance.setTransform(-726.15,67.9,0.8509,0.8311,150.0013,0,0,465.6,329.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({regX:0,regY:0.5,scaleX:0.851,rotation:150.357,x:-202.55,y:103.55},0).wait(1).to({rotation:150.759,x:-154.7,y:101.05},0).wait(1).to({rotation:151.2,x:-103,y:98.8},0).wait(1).to({rotation:151.682,x:-47.35,y:96.85},0).wait(1).to({rotation:152.206,x:11.9,y:95.4},0).wait(1).to({rotation:152.773,x:74.9,y:94.55},0).wait(1).to({rotation:153.385,x:141.5,y:94.45},0).wait(1).to({rotation:154.044,x:211.5,y:95.2},0).wait(1).to({rotation:154.75,x:284.95,y:97},0).wait(1).to({rotation:155.507,x:361.85,y:100},0).wait(1).to({rotation:156.316,x:441.75,y:104.45},0).wait(1).to({rotation:157.179,x:524.85,y:110.45},0).wait(1).to({rotation:158.097,x:610.75,y:118.15},0).wait(1).to({rotation:159.074,x:699.65,y:127.9},0).wait(1).to({rotation:160.112,x:791.2,y:139.75},0).wait(1).to({rotation:161.212,x:885.25,y:154},0).wait(1).to({rotation:162.376,x:981.7,y:170.8},0).wait(1).to({rotation:163.609,x:1080.5,y:190.45},0).wait(1).to({rotation:164.911,x:1181.4,y:213.2},0).wait(1).to({rotation:166.284,x:1284.25,y:239.2},0).wait(1));

	// red
	this.instance_1 = new lib.redleafmoving();
	this.instance_1.setTransform(-148.65,112.4,1,1,59.9996,0,0,0.1,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regX:0,rotation:67.895,x:-122.05,y:99.25},0).wait(1).to({rotation:71.1263,x:-73.05,y:79.55},0).wait(1).to({rotation:73.1774,x:-29.2,y:64.1},0).wait(1).to({rotation:75.479,x:20.35,y:48.65},0).wait(1).to({rotation:78.3109,x:74,y:34.55},0).wait(1).to({rotation:82.1976,x:131.5,y:22.9},0).wait(1).to({rotation:88.4579,x:194.25,y:15.75},0).wait(1).to({rotation:93.9065,x:258.85,y:17},0).wait(1).to({rotation:92.2445,x:326.85,y:18.6},0).wait(1).to({rotation:91.1116,x:402.45,y:18.65},0).wait(1).to({rotation:89.8115,x:480.8,y:17.05},0).wait(1).to({rotation:87.8109,x:562.9,y:13.15},0).wait(1).to({rotation:81.2834,x:650.35,y:4.1},0).wait(1).to({rotation:73.8565,x:731.7,y:-17.4},0).wait(1).to({rotation:68.8966,x:819.45,y:-49.8},0).wait(1).to({rotation:62.7707,x:906.8,y:-91.8},0).wait(1).to({rotation:54.5936,x:988.65,y:-146},0).wait(1).to({rotation:70.3582,x:1081.6,y:-195.65},0).wait(1).to({rotation:79.8752,x:1186.7,y:-226.05},0).wait(1).to({rotation:99.6715,x:1295.55,y:-238.1},0).wait(1));

	// orange
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(-88.45,37.05,1,1,0,0,0,53.4,81.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(1).to({rotation:1.2707,x:-57.35,y:25.1},0).wait(1).to({rotation:2.6775,x:-22.95,y:12.65},0).wait(1).to({rotation:4.1894,x:14.95,y:0.1},0).wait(1).to({rotation:5.8039,x:56.6,y:-12.45},0).wait(1).to({rotation:7.5104,x:102,y:-24.7},0).wait(1).to({rotation:9.3019,x:151.35,y:-36.45},0).wait(1).to({rotation:11.1691,x:204.8,y:-47.35},0).wait(1).to({rotation:13.1008,x:262.45,y:-57.15},0).wait(1).to({rotation:15.0883,x:324.65,y:-65.45},0).wait(1).to({rotation:17.1198,x:391.6,y:-72.15},0).wait(1).to({rotation:19.1802,x:463.2,y:-76.65},0).wait(1).to({rotation:21.2614,x:540.05,y:-78.7},0).wait(1).to({rotation:23.3477,x:622.1,y:-77.9},0).wait(1).to({rotation:25.431,x:709.85,y:-73.85},0).wait(1).to({rotation:27.4977,x:803.3,y:-66.2},0).wait(1).to({rotation:29.5386,x:902.8,y:-54.35},0).wait(1).to({rotation:31.544,x:1008.6,y:-38},0).wait(1).to({rotation:33.5074,x:1121.15,y:-16.55},0).wait(1).to({rotation:35.4219,x:1240.75,y:10.35},0).wait(1).to({rotation:37.2808,x:1367.5,y:43.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.7,-297.7,1758.8,598.7);


(lib.orangeleaffalling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// yellow
	this.instance = new lib.yellowleaffalling();
	this.instance.setTransform(-446.8,-925.7,0.9999,0.9999,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0.5,scaleX:1,scaleY:1,x:-459.3,y:-866.55},0).wait(1).to({x:-470.75,y:-807.05},0).wait(1).to({x:-480.7,y:-747.5},0).wait(1).to({x:-489.25,y:-687.85},0).wait(1).to({x:-496.3,y:-628.2},0).wait(1).to({x:-501.9,y:-568.45},0).wait(1).to({x:-506.05,y:-508.65},0).wait(1).to({x:-508.75,y:-448.75},0).wait(1).to({x:-510,y:-388.8},0).wait(1).to({x:-509.8,y:-328.8},0).wait(1).to({x:-508.15,y:-268.75},0).wait(1).to({x:-505.05,y:-208.6},0).wait(1).to({x:-500.45,y:-148.35},0).wait(1).to({x:-494.45,y:-88.05},0).wait(1).to({x:-487,y:-27.7},0).wait(1).to({x:-478.05,y:32.7},0).wait(1).to({x:-467.7,y:93.2},0).wait(1).to({x:-455.85,y:153.8},0).wait(1).to({x:-442.6,y:214.5},0).wait(1).to({x:-427.85,y:275.25},0).wait(1).to({x:-411.65,y:336.1},0).wait(1).to({x:-394,y:397.05},0).wait(1).to({x:-374.9,y:458.1},0).wait(1));

	// red
	this.instance_1 = new lib.redleaffalling();
	this.instance_1.setTransform(-317.65,-853.05,1,1,150.0008,0,0,-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0.5,rotation:150.001,x:-298.55,y:-793.4},0).wait(1).to({x:-280.8,y:-733.75},0).wait(1).to({x:-264.55,y:-674.1},0).wait(1).to({x:-249.85,y:-614.45},0).wait(1).to({x:-236.7,y:-554.8},0).wait(1).to({x:-225,y:-495.2},0).wait(1).to({x:-214.8,y:-435.6},0).wait(1).to({x:-206.15,y:-375.95},0).wait(1).to({x:-199,y:-316.35},0).wait(1).to({x:-193.35,y:-256.75},0).wait(1).to({x:-189.25,y:-197.15},0).wait(1).to({x:-186.6,y:-137.6},0).wait(1).to({x:-185.5,y:-78},0).wait(1).to({x:-185.9,y:-18.4},0).wait(1).to({x:-187.8,y:41.15},0).wait(1).to({x:-191.2,y:100.8},0).wait(1).to({x:-196.15,y:160.4},0).wait(1).to({x:-202.55,y:220},0).wait(1).to({x:-210.5,y:279.65},0).wait(1).to({x:-219.95,y:339.3},0).wait(1).to({x:-230.95,y:398.95},0).wait(1).to({x:-243.4,y:458.65},0).wait(1).to({x:-257.45,y:518.35},0).wait(1));

	// orange
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(-418.1,-936.8,1,1,0,0,0,53.4,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-404.5,y:-868.5},0).wait(1).to({x:-391.8,y:-800.25},0).wait(1).to({x:-380.05,y:-732.15},0).wait(1).to({x:-369.15,y:-664.1},0).wait(1).to({x:-359.2,y:-596.1},0).wait(1).to({x:-350.1,y:-528.2},0).wait(1).to({x:-341.95,y:-460.4},0).wait(1).to({x:-334.65,y:-392.65},0).wait(1).to({x:-328.25,y:-325},0).wait(1).to({x:-322.8,y:-257.4},0).wait(1).to({x:-318.2,y:-189.9},0).wait(1).to({x:-314.5,y:-122.45},0).wait(1).to({x:-311.7,y:-55.05},0).wait(1).to({x:-309.8,y:12.25},0).wait(1).to({x:-308.75,y:79.5},0).wait(1).to({x:-308.65,y:146.65},0).wait(1).to({x:-309.45,y:213.8},0).wait(1).to({x:-311.1,y:280.85},0).wait(1).to({x:-313.7,y:347.9},0).wait(1).to({x:-317.15,y:414.85},0).wait(1).to({x:-321.55,y:481.75},0).wait(1).to({x:-326.8,y:548.6},0).wait(1).to({x:-333,y:615.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-576.3,-1028.5,479.79999999999995,1730.3);


(lib.bigcloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// little_cloud
	this.instance = new lib.littlecloud();
	this.instance.setTransform(445,7.7,1,1,0,0,0,-29.4,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-12.9,x:447.1,y:9.1},0).wait(1).to({x:449.2,y:10.3},0).wait(1).to({x:451.3,y:11.35},0).wait(1).to({x:453.4,y:12.35},0).wait(1).to({x:455.5,y:13.2},0).wait(1).to({x:457.6,y:13.95},0).wait(1).to({x:459.7,y:14.55},0).wait(1).to({x:461.8,y:15.1},0).wait(1).to({x:463.9,y:15.5},0).wait(1).to({x:466,y:15.8},0).wait(1).to({x:468.05,y:16},0).wait(1).to({x:470.15,y:16.05},0).wait(1).to({x:472.25,y:16},0).wait(1).to({x:474.35,y:15.85},0).wait(1).to({x:476.45,y:15.6},0).wait(1).to({x:478.55,y:15.2},0).wait(1).to({x:480.65,y:14.7},0).wait(1).to({x:482.75,y:14.1},0).wait(1).to({x:484.85,y:13.4},0).wait(1).to({x:486.95,y:12.6},0).wait(1).to({x:489.05,y:11.65},0).wait(1).to({x:491.15,y:10.6},0).wait(1).to({x:493.3,y:9.45},0).wait(1));

	// big
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(-0.6,3.8,1,1,0,0,0,133.9,94.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:3.15,y:7.6},0).wait(1).to({x:6.9,y:11},0).wait(1).to({x:10.65,y:14.1},0).wait(1).to({x:14.4,y:16.8},0).wait(1).to({x:18.1,y:19.2},0).wait(1).to({x:21.85,y:21.25},0).wait(1).to({x:25.6,y:23},0).wait(1).to({x:29.35,y:24.35},0).wait(1).to({x:33.1,y:25.35},0).wait(1).to({x:36.8,y:26.05},0).wait(1).to({x:40.55,y:26.4},0).wait(1).to({x:44.3},0).wait(1).to({x:48.05,y:26.05},0).wait(1).to({x:51.75,y:25.35},0).wait(1).to({x:55.5,y:24.35},0).wait(1).to({x:59.25,y:23},0).wait(1).to({x:63,y:21.25},0).wait(1).to({x:66.7,y:19.2},0).wait(1).to({x:70.45,y:16.85},0).wait(1).to({x:74.2,y:14.1},0).wait(1).to({x:77.95,y:11},0).wait(1).to({x:81.7,y:7.6},0).wait(1).to({x:85.4,y:3.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,-96.1,724.2,222.39999999999998);


// stage content:
(lib.kenyon_newHaiku = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {haiku:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndStop("artwork");
		}
		
		var root = this;
		stage.enableMouseOver();
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text = line01;
		}
		
		var line01 = "Look at all the leaves";
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text = line02;
		}
		
		var line02 = "The colors are so vibrant";
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text = line03;
		}
		
		var line03 = "Watch them blow away";
	}
	this.frame_1 = function() {
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame01_btn.addEventListener("click",toFrame01);
		
		function toFrame01(){
			console.log("will go to frame 1");
			root.gotoAndStop("haiku");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// moving_leaves
	this.instance = new lib.orangeleavemoving();
	this.instance.setTransform(416.95,543.3,0.4958,0.4835);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// leaf_pile
	this.instance_1 = new lib.leafpile();
	this.instance_1.setTransform(319.65,527.15,0.4205,0.4491,0,0,0,108,105.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// falling_leaves
	this.instance_2 = new lib.orangeleaffalling();
	this.instance_2.setTransform(453.9,305.6,0.4967,0.4087);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// tree
	this.instance_3 = new lib.tree();
	this.instance_3.setTransform(126.4,309.1,0.5613,0.794,0,0,-0.6761,-96.9,-34.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

	// grass
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("EhO3gFZMCdvAAAIAAKzMidvAAAg");
	this.shape.setTransform(483.675,625.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("EhO3AFaIAAqzMCdvAAAIAAKzg");
	this.shape_1.setTransform(483.675,625.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// clouds
	this.instance_4 = new lib.bigcloud();
	this.instance_4.setTransform(319.2,73.8,0.8134,0.7773,0,0,0,-33,-21.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1));

	// buttons
	this.toFrame02_btn = new lib.circlebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(477.85,523.8);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.toFrame01_btn = new lib.circlebutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(895.7,523.85);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// background
	this.line03_txt = new cjs.Text("Line Three", "55px 'Bangla MN'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 103;
	this.line03_txt.lineWidth = 692;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(494.85,335.95);

	this.line02_txt = new cjs.Text("Line Two", "55px 'Bangla MN'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 103;
	this.line02_txt.lineWidth = 839;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(494.35,212);

	this.line01_txt = new cjs.Text("Line One", "55px 'Bangla MN'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 103;
	this.line01_txt.lineWidth = 676;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(492.85,98.6);

	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(187.95,0,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_1();
	this.instance_6.setTransform(-22.45,-8.5,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(10,1,1).p("EhO3g1VMCdvAAAMAAABqqMidvAAAg");
	this.shape_2.setTransform(483.675,318.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#30A3EA","#FFFFFF"],[0,1],-504.7,0,504.8,0).s().p("EhO3A1VMAAAhqpMCdvAAAMAAABqpg");
	this.shape_3.setTransform(483.675,318.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(453.9,205.3,539.6,459.40000000000003);
// library properties:
lib.properties = {
	id: 'C051B7AEF93547A4AF30A7D3842D308F',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/kenyon_newHaiku_atlas_1.png", id:"kenyon_newHaiku_atlas_1"},
		{src:"images/kenyon_newHaiku_atlas_2.png", id:"kenyon_newHaiku_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C051B7AEF93547A4AF30A7D3842D308F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;