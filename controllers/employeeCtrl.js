module.exports.getEmployee = (req, res, next) => {
	const { employee, department } = req.app.get('models');
	employee
		.findAll({ include: [{ model: department }] })
		.then(employees => {
			res.render('index', { employees });
		})
		.catch(err => {
			next(err);
		});
};

