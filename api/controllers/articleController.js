module.exports = {
    get: function (req, res, next) {
        res.send("articles");
    },
    getId: function (req, res, next) {
        res.send("get id");
    },
    create: function (req, res, next) {
        res.send("create articles");
    },
    update: function (req, res, next) {
        res.send("update articles");
    },
    delete: function (req, res, next) {
        res.send("delete articles");
    },
}