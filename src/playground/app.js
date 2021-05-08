
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options : props.options
    }
  } 
  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
       const options = JSON.parse(json);
    if(options){
      this.setState(() => {
        return {options}
      })
    }
    }catch(e){
      //Do nothing at all
    }
    
  }
    
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
      console.log('did update')
    }
  }
  componentWillUnmount(){
    console.log('component will unmount')
  }
  handleDeleteOptions() {
    this.setState(() => ({options : []}));
  }
  
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options : prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }
  
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum];
    alert(option)
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter Valid value to add Item'
    }else if(this.state.options.indexOf(option)>-1) {
      return 'this option already exists'
    }
    else{
      this.setState((prevState) =>({options : prevState.options.concat([option])}))
    }
  }
  render() {
    const subtitle = 'Put your life in the hands of computer'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length>1}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOptions 
          handleAddOption = {this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options : []
}

const Header = (props) => {
  return(
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
  )
}

Header.defaultProps = {
  title : 'Indecision'
}

const Action = (props) => {
  return(
    <div>
        <button onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          What should i do!
        </button> 
      </div>
  )
}

const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>PLease add an option</p>}
      {
          props.options.map((option) => <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
          />)
        }
      </div>
  )
}

const Option = (props) => {
  return(
    <div>
       {props.optionText}
       <button onClick={(e) => {
         props.handleDeleteOption(props.optionText)
       }}
       >
       remove
       </button>
       
    </div>
  )
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOptions = this.handleAddOptions.bind(this)
    this.state = {
      error:undefined
    }
  }
handleAddOptions(e) {
  e.preventDefault();
  var option = e.target.elements.option.value.trim()
  const error = this.props.handleAddOption(option);
  
  this.setState(() => {
    return {
      error
    }
  })
if(!error){
  e.target.elements.option.value=""
}
}
  render() {
    return (
      <div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))