function customRender(reactElement,container){

  // Second Rule
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])

  }
  container.appendChild(domElement)




// First rule 
 /* const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)
  container.appendChild(domElement); */
}

const reactElement = {
  type : 'a',
  props:{
    href: 'https://google.com',
    target : '_blank'
  },
  children : 'Click me to visit google'
}

const mainContaner = document.querySelector('#root');
customRender(reactElement,mainContaner);


