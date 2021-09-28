const express=require("express")
const mongoose=require("mongoose")
const { find } = require("../../../day-3/we/mongoos/src/models/users.model")
const app=express()
app.use(express.json())

const connect=()=>{
   return mongoose.connect("mongodb://127.0.0.1:27017/lib")
}

app.listen(1200,function(){
    connect()
    console.log("port 1200");
    })

const authorSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true
})
const Author=mongoose.model("author",authorSchema)

const bookSchema=new mongoose.Schema({
    book_name:{type:String,required:true},
    book_body:{type:String,required:true},
    author:[{type:mongoose.Schema.Types.ObjectId, ref:"author",required:true}],
    section:{type:mongoose.Schema.Types.ObjectId, ref:"sections",required:true}
   
},{
    versionKey:false,
    timestamps:true
})
const Book=mongoose.model("book",bookSchema)

const sectionSchema=new mongoose.Schema({
    section_no:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})
const Section=mongoose.model("sections",sectionSchema)

const CheckShema=new mongoose.Schema({
    book:{type:mongoose.Schema.Types.ObjectId,ref:'book',required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true}
},{
    versionKey:false,
    timestamps:true
})
const Checkout=mongoose.model("checkout",CheckShema)

//
const userSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    gender:{type:String,required:false},
},{
    versionKey:false,
    timestamps:true,
})
const User = mongoose.model('user',userSchema)
//crud for users
        app.get('/users',async(req,res)=>{
            const users = await User.find().lean().exec();
            return res.status(200).send({users})
        })
        app.get('/users/:id',async(req,res)=>{
            const user = await User.findById(req.params.id).lean().exec()
            return res.status(200).send({user})
        })
        app.post('/users',async(req,res)=>{
            const users = await User.create(req.body)
        
            return res.status(201).send({users})
        })
        app.patch('/users/:id',async(req,res)=>{
            const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
            return res.status(200).send({user})
        }) 
        app.delete('/users/:id',async(req,res)=>{
            const user = await User.findByIdAndDelete(req.params.id).lean().exec()
            return res.status(200).send("User Deleted Successfully")
        })



//crud for books
app.get("/books",async (req,res)=>{
    const books=await Book.find().populate("author").populate("section").lean().exec()
    return res.status(200).send({books})
})
app.post("/books",async (req,res)=>{
    const books=await Book.create(req.body)
    return res.status(201).send({books})
})  
app.get("/books/:id",async (req,res)=>{
    const books=await Book.findById(req.params.id).lean().exec()
    return res.statuusers(200).send({books})
})
app.patch("/books/:id",async (req,res)=>{
    const books=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({books})
})
app.delete("/books/:id",async (req,res)=>{
    const books=await Book.findByIdAndDelete(req.params.id).lean().exec()
})
// crud for author
app.get("/authors",async (req,res)=>{
    const author=await Author.find()
   return res.status(200).send({author})
})
app.post("/authors",async (req,res)=>{
    const author=await Author.create(req.body)
    return res.status(201).send({author})
})
app.get("/authors/:id",async (req,res)=>{
    const aut=await Author.findById(req.params.id).lean().exec()
    return res.status(200).send({aut})
})
app.patch("/authors/:id",async (req,res)=>{
    const author=await Author.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({author})
})
app.delete("/authors/:id",async (req,res)=>{
    const author=await Author.findByIdAndDelete(req.params.id).lean().exec()
    return res.status(200).send({author})
})

// crud for checkout

app.get("/checkouts/:id",async (req,res)=>{
    const check_out=await Checkout.findById(req.params.id).lean().exec()
    return res.status(200).send({check_out})
})
app.post("/checkouts",async (req,res)=>{
    const check_out=await Checkout.create(req.body)
    return res.status(201).send({check_out})
})
app.patch("/checkouts/:id",async (req,res)=>{
    const check_out=await Checkout.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({check_out})
})
app.delete("/checkouts/:id",async (req,res)=>{
    const check_out=await Checkout.findByIdAndDelete(req.params.id).lean().exec()
    return res.status(200).send({check_out})
})
// crud for sections
app.get("/sections",async (req,res)=>{
    const sect=await Section.find().lean().exec()
    return res.status(200).send({sect})
})
app.get("/sections/:id",async (req,res)=>{
    const sect=await Section.findById(req.params.id).lean().exec()
    return res.status(200).send({sect})
})
app.post("/sections",async (req,res)=>{
    const sect=await Section.create(req.body)
    return res.status(201).send({sect})
})
app.patch("/sections/:id",async (req,res)=>{
    const sect=await Section.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({sect})
})
app.delete("/sections/:id",async (req,res)=>{
    const sect=await Section.findByIdAndDelete(req.params.id).lean().exec()
    return res.status(200).send({sect})
})
// find books in a section //
app.get("/sections/:id/books",async (req,res)=>{
    const books=await Book.find({section:req.params.id}).lean().exec()
    const section=await Section.findById(req.params.id).lean().exec() 
    return res.status(200).send({books,section})
})
// find books that are checked out //
app.get('/checkouts',async(req,res)=>{
    const checkout = await Checkout.find().populate("book").lean().exec()

    return res.status(200).send({checkout})
})
// find all books written by an author // 
app.get("/authors/:id/books",async (req,res)=>{
const auths=await Book.find({author:req.params.id}).lean().exec() 
return res.status(200).send({auths})
})

// books which not checkout in sectnios
app.get('/books/:id/sections',async(req, res)=>{
    let book_ar =[];
    const chec_itms = await Checkout.find({},{book:1,_id:0}).lean().exec()
    chec_itms.forEach(({book})=>{
        book_ar.push(book)
    })
    const books_d = await Book.find({$and:[{section:req.params.id},{_id: {$nin: book_ar}}]}).lean().exec()
    return res.status(200).send({books_d})
})

//find books of 1 author inside a section
app.get('/authors/:authorid/sections/:sectionid',async(req,res)=>{
    const books = await Book.find({author:req.params.authorid}).lean().exec();
    const section = await Section.findById(req.params.sectionid).lean().exec();
    const author = await Author.findById(req.params.authorid).lean().exec();

    return res.status(200).send({books,section,author});
})