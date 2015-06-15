/*
* Model
*/
var Memorie = Backbone.Model.extend({
	defaults:{
		narration:"N/A",
		musique:"Sugar Sugar",
		date:"N/A",
		sphere:"Amour",
		emotion:"",
	}
});

/*
* Collection
*/

var Memories = Backbone.Collection.extend({
	url:'api/memories.json',
	model:Memorie
});

/*
* View
*/

var ListItem = Backbone.View.extend({
	tagName:'div',
	template:_.template($('#list-item-tmpl').html()),

	events:{
		'click .btn-edit' : 'edit',
		'click .btn-remove' : 'suppr'
	},

	initialize:function(){
		this.render();
		this.listenTo(this.model, 'change', this.render );
	},

	edit : function(){
		this.trigger('edit', this.model);
	},

	suppr : function(){
		this.trigger('suppr', this);
	},

	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
	}

});

var List = Backbone.View.extend({
	el :'#list-memories',
	initialize: function(){
		this.listenTo(this.model, 'reset', this.render);
		this.listenTo(this.model, 'add', this.add);
	},

	add : function(model){
		var item = new ListItem({model : model});
		this.listen(item);
		this.$el.append(item.el);
	},

	edit : function(model){
		this.trigger('edit', model);
	},

	suppr: function(item){
		this.stopListening(item);
		item.remove();
		this.model.remove(item.model);
		delete item;
	},

	listen : function(item){
		this.listenTo(item, 'edit', this.edit);
		this.listenTo(item, 'suppr', this.suppr);
	},

	render : function(){
		var item;
		this.model.each(function(model){
			this.add(model);
		},this);
	}
});

var Form = Backbone.View.extend({
	el:'form',
	events :{
		'click #add' : 'valid'
	},

	initialize : function(){
		this.illustration = this.$('#illustration');
		this.narration = this.$('#narration');
		this.date=this.$("#date");
		this.sphere=this.$("#sphere");
		this.emotion=this.$("#emotion");
		this.partage=this.$("#distance");
	},
	
	valid : function(e){
		e.preventDefault();
		if(this.current){
			this.current.set({
				'illustration' : this.illustration.val(),
				'narration' : this.narration.val(), 
				'date' : this.date.val(),
				'sphere' : this.sphere.val(),
				'emotion' : this.emotion.val(),
				'partage' : this.partage.val()
			});
		} 
		else {
			var content = {};
			if(this.illustration.val() != ""){
				content.illustration = this.illustration.val();
			}

			if(this.narration.val() != ""){
				content.narration = this.narration.val();
			}

			if(this.date.val() != ""){
				content.date = this.date.val();
			}

			if(this.sphere.val() != ""){
				content.sphere = this.sphere.val();
			}

			if(this.emotion.val() != ""){
				content.emotion = this.emotion.val();
			}

			if(this.partage.val() != ""){
				content.partage = this.partage.val();
			}

			this.trigger('add',content);
		}
		this.reset();
	},

	edit : function(model){
		this.current = model;
		this.illustration.val(model.get('illustration'));
		this.narration.val(model.get('narration'));
		this.date.val(model.get('date'));
		this.sphere.val(model.get('sphere'));
		this.emotion.val(model.get('emotion'));
		this.partage.val(model.get('partage'));
	},
	suppr: function(id){
		if(id === this.current.get('id')){
			this.reset();
		}
	},

	reset: function(){
		this.current == null;
		this.illustration.val('');
		this.narration.val('');
		this.date.val('');
		this.sphere.val('');
		this.emotion.val('');
		this.partage.val('');
	}
});

var AddMemories = Backbone.View.extend({

	initialize : function(){
		this.model = new Memories();

		this.list = new List({model : this.model});
		this.listenTo(this.list, 'edit', this.edit);

		this.form = new Form();
		this.listenTo(this.form, 'add', this.add);

		this.listenTo(this.model, 'remove', this.suppr);

		this.model.fetch({reset: true});
	},

	add : function(model){
		this.model.create(model);
	},

	edit : function(model){
		this.form.edit(model);
	},

	suppr: function(e){
		this.form.suppr(e.id);
	}
});

var addMemories = new AddMemories();