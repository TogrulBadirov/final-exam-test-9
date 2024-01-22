import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000
const connectionUrl = "mongodb+srv://togrul:togrul@firstcluster.udpwqcz.mongodb.net/"

const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    author: { type: String, required: true },
    authorImage: { type: String, required: true },
    price: { type: Number, required: true },
});

const Courses = mongoose.model('Course', CoursesSchema);

app.get('/', async (req, res) => {
    try {
        const allCourse = await Courses.find({})
        res.status(200).send(allCourse)
    } catch (error) {
        res.status(500).send('Server Error!')
    }
})

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const course = await Courses.findById(id)
        res.status(200).send(course)
    } catch (error) {
        res.status(500).send('Server Error!')
    }
})

app.post('/', async (req, res) => {
    try {
        const newCourse = new Courses(req.body)
        await newCourse.save()
        res.status(200).send('Course Created!')
    } catch (error) {
        res.status(500).send('Server Error!')
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const course = await Courses.findByIdAndDelete(id)
        res.status(200).send("Course Deleted!")
    } catch (error) {
        res.status(500).send('Server Error!')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect(connectionUrl)
    .then(() => console.log('Connected!'));