var express= require('express');
var app = express();
var mongojs=require('mongojs');
var db=mongojs('studentList',['studentList']);
var bodyParser=require('body-parser');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/studentList',function(req, res){
	console.log("received a GET request");

	

	db.studentList.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
	
});

app.post('/studentList',function(req,res){
	console.log(req.body);
	db.studentList.insert(req.body,function(err,docs){
		res.json(docs);
	});
})
app.delete('/studentList/:id', function(req,res){
	var id=req.params.id;
	console.log(id);
	db.studentList.remove({_id: mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	})
})


app.listen(3000);
console.log("I'm listenning on 3000");