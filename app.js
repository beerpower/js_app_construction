let book = {
    author: "Иван Вазов",
    title: "Под игото",
    type: "роман"
}

let animal = {
    type: null,
    name: null,
    color: null,

    init: function(type, name, color){
        this.set(type, name, color);
        this.voice();

        return this;
    },

    set:function(type, name, color){
        this.type = type;
        this.name = name;
        this.color = color;
        
    },

    voice: function(){
        console.log(this.name + ' say: i\'m ' + this.type);
    }
}


let app = {
    settings: {
        orianation: "horizontal"
    },

    // values: {
    //     val1: 1,
    //     val2: 2,
    //     operatator: "+"
    // },

    init: function(_settings){
        this.set(_settings);
        this.bindEvents();
    },
    
    set: function(_settings){
        this.settings = _settings;
    },

    bindEvents: function(){
        // on click...
        this.eventHandler();
    },

    eventHandler: function(){
        let orianation = this.settings.orianation 
    }   

}


app.init({ orianation: "blah "})