import React from 'react';
import withPropellors from '../../src/index';

const ButtonComponent = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{props.children}</button>;
};

const Button = withPropellors(ButtonComponent);

function App() {
  const [bg, setBg] = React.useState('lightblue');
  const toggle = () => {
    if (bg === 'lightblue') setBg('red');
    else setBg('lightblue');
  };
  return (
    <div className="App">
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
      <Button
        padding={10}
        marginLeft="10em"
        marginTop={bg === 'lightblue' ? '5em' : '7.6em'}
        backgroundColor={bg}
        cursor="pointer"
        css={{
          borderRadius: '5em'
        }}
        onClick={toggle}
      >
        Hello
      </Button>
    </div>
  );
}

export default App;
