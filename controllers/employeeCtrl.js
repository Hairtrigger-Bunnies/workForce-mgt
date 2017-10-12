module.exports.getEmployee = (req, res, next) => {
	const { employee } = req.app.get('models');
		employee.findAll()
		.then(employee => {
			res.render('employee', { employee });
		})
		.catch(err => {
			next(err);
		});
};

