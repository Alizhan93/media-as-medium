const articlesAPI = [
    {
        id: 0,
        title: "7 Practical CSS Tips",
        text: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
        img: "./images/2.png",
    },
    {
        id: 1,
        title: "3 Practical JS Tips",
        text: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        img: "./images/3.png",
    },
    {
        id: 2,
        title: "5 Practical HTML Tips",
        text: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        img: "./images/4.png",
    },
];

let article = 
`<div class="wrapper">
<div class="leftSide">
    <div class="text">
        <div class="author">
            <img src="./images/Img1.png" alt="">
            <p>Authors name in Topics name July</p>
         </div>
    <a href="article.html"class-"ref"> <p id = "title"></p> </a>
    <p class="textart" id = "text"></p>
    </div>
    <div class="details">
        <button class="button">Java Script</button>
        <p>12 min read . Selected for you</p>
    </div>
</div>
<div>
     <div class="image">
        <img id = "img">
    </div>
</div>
</div>`

const articles = document.getElementById("articles");

articlesAPI.forEach((item) => {
    let newArticle = article.replace('id = "title">', `id = "title">${item.title}`);
    newArticle = newArticle.replace(
        'id = "text">',
        `id = "text">${item.text}`,
        'id = "img">',
        `id = "img">${item.img}`);       
    articles.innerHTML += newArticle;
});
