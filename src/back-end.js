const express = require("express");
const multiparty = require("multiparty");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,my-xsrf-header"
  );
  next();
});
app.use(
  session({
    secret: "keykey",

    cookie: {
      maxAge: 60 * 60 * 24 * 1000,
    } /*第一个参数：只有在https才可以访问cookie；第二个参数：设置cookie的过期时间*/,
    resave: false,
    saveUninitialized: true,
    // rolling: true /*只要页面在操作就不会过期，无操作5秒后过期*/,
  })
);
app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//设置跨域访问

app.get("/test", (req, res) => {
  setTimeout(() => {
    res.send({
      status: 200,
      data: {
        name: "helei",
        age: 18,
        heroesUrl: "api/heroes",
        textfile: "assets/textfile.txt",
        date: "2020-01-29",
      },
    });
  }, 1500);
});
app.use("/login", (req, res) => {
  req.session.userid = "9527";
  req.session.login = true;

  res.cookie("userid", "95288", {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    domain: "http://localhost:4200",
  });
  res.send("登录成功!!!");
});
app.use("/loginout", (req, res) => {
  req.session.login = false;

  res.send("登录成功!!!");
});
app.use("/post", (req, res) => {
  // console.log(new Date(), req.cookies);
  if (req.session.login) res.send(req.cookies.userid);
  else res.send("请求失败。。。");
});
app.get("/jsonp", (req, res) => {
  // res.type("text/javascript");
  data = {
    name: "helei",
    age: 18,
    heroesUrl: "api/heroes",
    textfile: "assets/textfile.txt",
    date: "2020-01-29",
  };
  // res.jsonp({
  //   status: 200,
  //   data: {
  //     name: "helei",
  //     age: 18,
  //     heroesUrl: "api/heroes",
  //     textfile: "assets/textfile.txt",
  //     date: "2020-01-29",
  //   },
  // });
  // res.send(`${req.query.cbk}(${JSON.stringify(data)})`);
  app.set("jsonp callback name", "cbk");
  res.jsonp(data);
});
app.listen(3000, () => {
  console.log("http://localhost:3000/test");
});
