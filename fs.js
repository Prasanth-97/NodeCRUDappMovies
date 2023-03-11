// File system ( Inbuilt module)

const fs = require("fs");

const quote = "Nothing is impossible";

// writefile actually creates file
fs.writeFile("quotes.txt",quote,(err)=>{return console.log("Completed writing")});


//////////////////////// DAY-40 (Additional session - left over topics) ///////////



// TASK
// Create files such as text-1.html to text-2.html in folder name as backup
// quotes is Live more worry less

const quote1 = "Live more worry less";

for(let i=1 ; i <= 10 ; i++){
    fs.writeFile(`./backUp/text-${i}.html`,quote1,(err)=>{return console.log("Completed writing")});
}

const argv = process.argv[2];

function genFiles(argv){
    if(argv > 50){
        return  console.log("Maximum limit exceeded"); // Early return
    }
    else{
        for(let i=1 ; i <= argv ; i++){
            fs.writeFile(`./backUp/text-${i}.html`,quote1,(err)=>{return console.log("Completed writing")});
        }
    }
}
// genFiles(argv);

// Read file in fs

fs.readFile("./quotes.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err); // error will happen when wrongfilename or no access to file
    }
    else{
        console.log(data);
    }
})


// appending file in fs core module

const data = "When you start doing things"

fs.appendFile("./quotes.txt", "\n" + data ,(err) =>{
    console.log("Appended successfully");
})

// deleting or unlinking in fs module

fs.unlink("./delete.txt",(err) => console.log("Deleted Successfully"));


