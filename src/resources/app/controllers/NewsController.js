class NewsController {
    // GET
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('News Detail');
    }
}
const newsController = new NewsController();
export { newsController };
