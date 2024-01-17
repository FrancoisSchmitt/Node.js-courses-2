exports.getPosts = (req, res, next) => {
	res.status(200).json({
		posts: [{ posts: [{ title: "test", content: "this is a test" }] }],
	});
};
exports.createPost = (req, res, next) => {
	const title = req.body.title;
	const content = req.body.content;
	// create post in db
	res.status(200).json({
		message: "Post created successfully!",
		post: { id: new Date().toISOString(), titlte: title, content: content },
	});
};
