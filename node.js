// //code based on what we had in class (Mikhail code)

// const   express = require('express'), //Allows to respond to HTTP requests, defines routing and renders the required content
//         fs = require('fs'), //Working with the file system (read and write files)
//         http = require('http'), //HTTP Server
//         path = require('path'), //Utility that allows us to work with directory paths
//         xml2js = require('xml2js'), //This is XML <-> JSON converter
//         xmlParse = require('xslt-processor').xmlParse, //Parsing XML
//         xsltProcess = require('xslt-processor').xsltProcess; //Processing XSLT

// const   router = express(), //Instantiating Express
//         server = http.createServer(router); //Instantiating the server

// router.use(express.static(path.resolve(__dirname,'views'))); //Serving static content from "views" folder
// router.use(express.json());//avoid to duplicate route

// function XMLtoJSON(filename, cb){// parsing the file from XML to JSON
//     let filepath = path.normalize(path.join(__dirname, filename));
//     fs.readFile(filepath, 'utf8', function(err, xmlStr){
//         if (err) throw (err);
//         xml2js.parseString(xmlStr, {}, cb);
//     });
// };

// function JSONtoXML(filename, obj, cb) {//get current filenames indirectory with specific extension
//     let filepath = path.normalize(path.join(__dirname, filename));
//     let builder = new xml2js.Builder();
//     let xml = builder.buildObject(obj);
//     fs.unlinkSync(filepath);
//     fs.writeFile(filepath, xml, cb);
// };

// router.get('/get/html', function(req, res) {

//     res.writeHead(200, {'Content-Type' : 'text/html'}); //Tell the user that the resource exists and which type that is

//     let xml = fs.readFileSync('PowerGames.xml', 'utf8'), //read in the XML file
//         xsl = fs.readFileSync('PowerGames.xsl', 'utf8'); //read in the XSL file


//     let doc = xmlParse(xml), //Parse the XML file
//         stylesheet = xmlParse(xsl); //Parse the XSL file

//     let result = xsltProcess(doc, stylesheet); //Performing XSLT

//     res.end(result.toString()); //Serve back the user

// });

// router.post('/post/json', function(req, res) {//get the POST

//     console.log(req.body);//access data in a string

//     function appendJSON(obj) {

//         console.log(JSON.stringify(obj, null, " "))//convert for a JSON string

//         XMLtoJSON('PowerGames.xml', function (err, result){//convert the xml file
//             if (err) throw (err);//throw error

//             result.menu.section[obj.sec_n].entry.push({'item': obj.item, 'price': obj.price});//pushing the data

//             console.log(JSON.stringify(result, null, " "));//convert for a JSON string

//             JSONtoXML('PowerGames.xml', result, function(err){//current information to the xml file
//                 if (err) console.log(err);//throw error
//             });

//         });

//     };

//     appendJSON(req.body);//add the JSON to req.body

//     res.redirect('back');//redirect

// });

// router.post('/post/delete', function(req, res){

//     console.log(req.body);//access data in a string

//     function deleteJSON(obj){

//         console.log(obj)//access data in a string

//         XMLtoJSON('PowerGames.xml', function(err, result){//convert the xml file
//             if (err) throw (err);//throw error

//             console.log(obj.sec);//get the object section
//             console.log(obj.ent);
//             console.log(result);
            
//             delete result.menu.section[obj.sec].entry[obj.ent]; //set the specified object to null

//             JSONtoXML('PowerGames.xml', result, function(err){
//                 if (err) console.log(err);//throw error
//             });
//         });
//     };

//     deleteJSON(req.body);//delete Json file

//     res.redirect('back');//redirect

// });
// //configuration to open ports
// server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//     const addr = server.address();
//     console.log('Server listening at', addr.address + ':' + addr.port)
// });