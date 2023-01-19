class SiteController {
    // GET
    index(req, res) {
        res.render('news');
    }
    search(req, res) {
        res.send('new Search');
    }
}
const siteController = new SiteController();
export { siteController };
