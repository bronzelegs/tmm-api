import {Router} from 'express';
import pluralize  from "pluralize";
import {ok, fail} from "./utils";

const MAX_RESULTS = 100;

/**
 Generic controller that provides CRUD operations for a given Mongoose model
 */
export default class BaseController {
	
	/**
	 @param model Mongoose model
	 @param key primary key of the model that will be used for searching, removing
	 and reading
	 */
	constructor(model, key, router) {
		this.model = model;
		this.modelName = model.modelName.toLowerCase();
		this.key = key;
	}
	
	create(data) {
		return this.model
			.create(data)
			.then((modelInstance) => {
				var response = {};
				response[this.modelName] = modelInstance;
				return response;
			});
	}
	
	
	read(id) {
		var filter = {};
		filter[this.key] = id;
		console.log(id, filter);
		return this.model
			.findOne(filter)
			.then((modelInstance) => {
				var response = {};
				response[this.modelName] = modelInstance;
				return response;
			});
	}
	
	
	list() {
		return this.model
			.find({})
			.limit(MAX_RESULTS)
			.then((modelInstances) => {
				var response = {};
				response[pluralize(this.modelName)] = modelInstances;
				return response;
			});
	}
	
	delete(id) {
		const filter = {};
		filter[this.key] = id;
		
		return this.model
			.remove(filter)
			.then(() => {
				return {};
			})
	}
	
	
	/**
	 */
	update(id, data) {
		var filter = {};
		filter[this.key] = id;
		
		return this.model
			.findOne(filter)
			.then((modelInstance) => {
				for (var attribute in data) {
					if (data.hasOwnProperty(attribute) && attribute !== this.key && attribute !== "_id") {
						modelInstance[attribute] = data[attribute];
					}
				}
				
				return modelInstance.save();
			})
			.then((modelInstance) => {
				var response = {};
				response[this.modelName] = modelInstance;
				return response;
			});
	}
	
	route() {
		
		const router = new Router();
		
		router.use(function timeLog(req, res, next) {
			console.log('Body: ', req.body, 'Query: ', req.query, 'Time: ', Date.now());
			next();
		});
		
		router.get("/", (req, res) => {
			this
				.list()
				.then(ok(res))
				.then(null, fail(res));
		});
		
		router.post("/", (req, res) => {
			console.log(req.body);
			this
				.create(req.body)
				.then(ok(res))
				.then(null, fail(res));
		});
		
		router.get("/:key", (req, res) => {
			console.log('get on ' + req.params.key);
			
			this
				.read(req.params.key)
				.then(ok(res))
				.then(null, fail(res));
		});
		
		router.put("/:key", (req, res) => {
			console.log('put on ' + req.params.key);
			
			this
				.update(req.params.key, req.body)
				.then(ok(res))
				.then(null, fail(res));
		});
		
		router.delete("/:key", (req, res) => {
			this
				.delete(req.params.key)
				.then(ok(res))
				.then(null, fail(res));
		});
		
		return router;
	}
}
