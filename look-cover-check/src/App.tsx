import * as React from 'react';
import './App.css';
import Main from './Components/Main';
import Processing from './Components/Processing';

// import logo from './logo.svg';

interface IAppState {
  loading: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      loading: false
    };
  }

  public render() {
    return (
      this.state.loading ?
        <Processing /> :
        <Main />
    );
  }
}

export default App;