var nodemailer= require('nodemailer');
const config = require('../config/environment');

var mailtransport = nodemailer.createTransport({
	service:'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD
	}
});

exports.send = function(hemail,gname,gemail,gnum,intime){
		  mailtransport.sendMail({
		  from:'"Event Management System" <'+process.env.EMAIL+'>',
		  to: hemail,
		  subject:'Visitor Details for the meeting',
		  text:'Hello from Innovaccer Event Management system \n'+'Details of the visitor are:- \n'
		  +'Name :- '+gname+'\nE-mail Address :- '+gemail +'\nContact No :- '+gnum
		  + '\nCheck-In Time :- '+intime
		  },function(err)
		  { if(err)
		  console.log("Email can't be send, due to"+err);
	  	  else
	  	  console.log('Email sent to host');
 	      });
};

exports.send2 = function(gemail,gname,gnum,intime,outtime,hname){
	      mailtransport.sendMail({
		  from:'"Event Management System" <'+process.env.EMAIL+'>',
		  to: gemail,
		  subject:'Details of the meeting',
		  text:'Hello from Innovaccer Event Management system \n'+'Details of the meeting are:- \n'
		  +'Name :- '+gname+'\nContact No :- '+gnum+ '\nCheck-In Time :- '+intime
		  + '\nCheck-Out Time :- '+outtime+'\nHost Name :- '+hname
		  +'\nAddress visited :- Innovaccer Office'
		  },function(err)
		  { if(err)
		  console.log("Email can't be send, due to"+err);
	  	  else
	  	  console.log('Email sent to visitor');
 	      });
};
