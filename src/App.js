import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormControl from 'react-bootstrap/esm/FormControl';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import { Card } from 'react-bootstrap/esm';

const marked = require('marked');
marked.setOptions({
	breaks: true,
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			markdown: this.placeholder,
		};
	}

	handleChange = (event) => {
		this.setState({
			markdown: event.target.value,
		});
	};

	placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qGgOy350nKEwShIl-w2--y1TZBYGvyLn0w&usqp=CAU)
`;

	render() {
		console.log(this.state.markdown);
		return (
			<div
				className='App container'
				style={{
					textAlign: 'center',
					width: '800px',
					fontFamily: 'Roboto',
				}}>
				<div>
					<FormGroup controlId='formControlsTextarea'>
						<FormLabel>
							<h4>
								<strong>Markdown Input</strong>
							</h4>
						</FormLabel>
						<FormControl
							rows={5}
							id='editor'
							as='textarea'
							value={this.state.markdown}
							onChange={
								this.handleChange
							}></FormControl>
					</FormGroup>
				</div>
				<div
					style={{
						textAlign: 'center',
						marginBottom: '15px',
						marginTop: '10px',
					}}>
					<Card bg='secondary' text='white'>
						<Card.Header>
							<h4>
								<strong>Markdown Output</strong>
							</h4>
						</Card.Header>
						<Card.Body>
							<div
								id='preview'
								dangerouslySetInnerHTML={{
									__html: marked(
										this.state.markdown
									),
								}}></div>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
	}
}
export default App;
