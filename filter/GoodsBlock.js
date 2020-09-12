var GoodsBlock = React.createClass({
  displayName: "GoodsBlock",

  propTypes: {
    list: React.PropTypes.array.isRequired,
  },

  getInitialState: function() {
    return {
      filter: "", //фильтр из поля ввода
      isAlphabetical: false, //стоит ли галочка
    };
  },

  checkboxClicked: function(EO) {
    this.state.isAlphabetical?this.setState({isAlphabetical: false}):this.setState({isAlphabetical:true})
  },

  textChanged: function(EO) {
    this.setState({filter: EO.target.value});
  },

  reset: function() {
    this.setState({isAlphabetical:false});
    this.setState({filter: ""});
  },

   render: function () {
    var listCode = [];
    var currentList=this.props.list.slice();//копируем список из пропсов
    this.state.isAlphabetical?(currentList.sort()):(currentList=this.props.list.slice());
    if (this.state.filter) {
      currentList=currentList.filter((el)=>el.indexOf(this.state.filter.toLowerCase())>-1);
    }
    currentList.forEach((a)=>{
      var listItem = a;
      var listItemCode = React.DOM.option({key: listItem, className: "select-option", value:listItem}, listItem);
      listCode.push(listItemCode);
    })

    return React.DOM.div({ className: "filter-block"}, 
      React.DOM.div({className: "upper-block"},      
        React.DOM.input({type:"checkbox", className: "checkbox", name:"checkbox", onClick:this.checkboxClicked,
          checked:(this.state.isAlphabetical)
        }),
        React.DOM.input({type:"text", className:"inout-text", name:"input", onChange:this.textChanged, value: this.state.filter}),
        React.DOM.input( {type:'button',value:'сброс',onClick:this.reset, className:"reset-button"})
      ),
      React.DOM.select({ className: "list-select", multiple: true}, listCode)   
    )
  }
}
)
