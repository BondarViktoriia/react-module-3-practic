import { Component } from 'react';
import { Controls } from './Controls';
import { Progres } from './Progres';
import { Publication } from './Publication';

const LS_KEY = 'reader_publication_index';

export class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      const index = Number(localStorage.getItem(LS_KEY));
      this.setState(state => ({ publicationIndex: index }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.publicationIndex) {
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
    }
  }
  changeIndex = value => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex + value,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const totalPublication = items.length;

    const currentPublication = items[publicationIndex];
    return (
      <div>
        <Controls
          current={publicationIndex + 1}
          total={totalPublication}
          onChange={this.changeIndex}
        />
        <Progres current={publicationIndex + 1} total={totalPublication} />
        <Publication
          title={currentPublication.title}
          text={currentPublication.text}
        />
      </div>
    );
  }
}
