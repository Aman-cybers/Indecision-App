console.log('App.js is running!');
const appRoot = document.getElementById('app')

const app = {
    title : 'Indecision App',
    subtitle : '',
    options : []
}
const numbers = [55,101,1000];

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value='';
    renderFunction()
  }
}

const removeAll = () =>{
  app.options = [];
  renderFunction();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)  
  const option = app.options[randomNum];
  alert(option)
}

const renderFunction =() => {
  const template = (
    <div>
     <h1>Title : {app.title}</h1>
     {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
     <p>{app.options.length > 0 ? "Here are your options" : "NO options"}</p>
     <button disabled={app.options.length>1 ? false : true} onClick={onMakeDecision}>What should i do</button>
     <button onClick={removeAll}>Remove all</button>
     <ol>
      {
        app.options.map((item) => {
          return <li key={item + 'a'}>{item}</li>
        })
      }
     </ol>
     <form onSubmit={onFormSubmit}>
       <input type="text" name="option" />
       <button>Add Option</button>
     </form>
    </div>
  );
   ReactDOM.render(template,appRoot)
}

renderFunction();


