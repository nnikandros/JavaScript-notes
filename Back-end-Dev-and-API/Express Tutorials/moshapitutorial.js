const express = require("express");
const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === Number(req.params.id)); // find which element of the array courses has the property courses.id === req.params.id. parseInt is needed because req.params.id is a string.
  if (!course) {
    res.status(404).send("The course with the  given id was not found");
  }
  res.send(course);
});

app.post("/api/courses", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res
      .status(400)
      .send("Name is required and shoyld be minimum 3 charachers long");
    return; // to make sure to end the function early and the rest of the code doesnt run.
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const port = 3000;
app.listen(port, () => console.log(`listening on port: ${port}...`));
